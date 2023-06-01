import { Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2];
const featureState = process.argv[3];

if (!removedFeatureName) {
    throw new Error('Укажите назваение фича-флага');
}

if (!featureState) {
    throw new Error('Укажите стотяние фичи "on" или "off"');
}

if (featureState !== 'on' && featureState !== 'off') {
    throw new Error('Не коректное стотяние фичи, должно быть "on" или "off"');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
    let isToggleFeature = false;
    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === 'toggleFeatures'
        ) {
            isToggleFeature = true;
        }
    });

    return isToggleFeature;
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(
                SyntaxKind.ObjectLiteralExpression,
            );

            if (!objectOptions) return;

            const onFunctionProperty = objectOptions.getProperty('on');
            const nameFunctionProperty = objectOptions.getProperty('name');

            const featureNameProperty = objectOptions.getProperty('off');

            const onFunction = onFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const offFunction = onFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const featureName = featureNameProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            if (featureName !== removedFeatureName) return;

            if (featureState === 'on') {
                node.replaceWithText(onFunction?.getBody().getText() ?? '');
            }

            if (featureState === 'off') {
                node.replaceWithText(offFunction?.getBody().getText() ?? '');
            }
        }
    });
});

project.save();
