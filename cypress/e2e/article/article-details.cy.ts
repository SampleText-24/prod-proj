let currentArticleId = '';
describe('Пользователь заходит на страницу со статьёй', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it.skip('Видит страницу статьи', () => {
        cy.getByTestId('ArticleDetails.Info')
            .should('exist');
    });
    it.skip('Видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationList')
            .should('exist');
    });
    it.skip('Оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info')
            .should('exist');
        cy.getByTestId('AddNewComment').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard')
            .should('have.length', 1);
    });
    it('Ставит оценку', () => {
        cy.getByTestId('ArticleDetails.Info')
            .should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRating(5, 'feedback');
        cy.get('[data-selected=true]')
            .should('have.length', 5);
    });
    it('Ставит оценку на стабах (данных с папки fixtures)', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetails.Info')
            .should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRating(5, 'feedback');
        cy.get('[data-selected=true]')
            .should('have.length', 5);
    });
});
