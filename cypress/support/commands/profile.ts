export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) =>
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'mock' },
        body: {
            id: '4',
            firstname: 'Test',
            lastname: 'Profile',
            age: 404,
            currency: 'EUR',
            country: 'Russia',
            city: 'Paper Town',
            username: 'Test User',
            avatar: 'https://cdn2.albumoftheyear.org/375x/album/9241-chill-out.jpg',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
