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
    it('Видит страницу статьи', () => {
        cy.getByTestId('ArticleDetails.Info')
            .should('exist');
    });
    it('Видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationList')
            .should('exist');
    });
    it('Оставляет комментарий', () => {
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
});
