exports.get404Page = (req, res) => {
    res.status(400).render('./errors/404', {
        pageTitle: '404 - Page Not Found',
        path: '/404'
    });
}