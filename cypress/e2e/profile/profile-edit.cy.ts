let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Профиль успешно загрушается', () => {
        cy.getByTestId('ProfileCard.firstname')
            .should('have.value', 'Test');
    });
    it('Пользователь меняет имя и фамилию', () => {
        const newName = 'New_name';
        const newLastname = 'New_lastname';
        cy.updateProfile(newName, newLastname);
        cy.getByTestId('ProfileCard.firstname')
            .should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname')
            .should('have.value', newLastname);
    });
});
