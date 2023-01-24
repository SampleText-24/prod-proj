import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('Unauthorized user', () => {
        it('Must show main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Must redirect and show main page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Must redirect on not found page', () => {
            cy.visit('/kypil_mujik_shlyapy_a_ona_emy_kak_dva');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Отображается страница профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Отображается страница списка статей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
