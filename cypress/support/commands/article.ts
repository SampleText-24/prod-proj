import { Article } from '../../../src/entities/Article';

const testArticle = {
    title: 'Python news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://www.logo.wine/a/logo/Python_(programming_language)/Python_(programming_language)-Logo.wine.svg',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['IT'],
    blocks: [],
};

export const createArticle = (article?: Article) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'mock' },
            body: article ?? testArticle,
        })
        .then((res) => res.body);

export const removeArticle = (articleId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'mock' },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(profileId: string): Chainable<void>;
        }
    }
}
