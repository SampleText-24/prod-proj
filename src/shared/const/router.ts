export enum AppRoutes {
    // eslint-disable-next-line no-unused-vars
    MAIN = 'main',
    // eslint-disable-next-line no-unused-vars
    ABOUT = 'about',
    // eslint-disable-next-line no-unused-vars
    PROFILE = 'profile',
    // eslint-disable-next-line no-unused-vars
    ARTICLES = 'articles',
    // eslint-disable-next-line no-unused-vars
    ARTICLE_DETAILS = 'article_details',
    // eslint-disable-next-line no-unused-vars
    ARTICLE_CREATE = 'article_create',
    // eslint-disable-next-line no-unused-vars
    ARTICLE_EDIT = 'article_edit',
    // eslint-disable-next-line no-unused-vars
    ADMIN_PANEL = 'admin_panel',
    // eslint-disable-next-line no-unused-vars
    FORBIDDEN = 'forbidden',
    // last
    // eslint-disable-next-line no-unused-vars
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + id
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    // last
    [AppRoutes.NOT_FOUND]: '*',
};
