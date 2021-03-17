exports.getHome = (req, res) => {
    res.render('./home/index', {
        pageTitle: 'The Big \'O Notation',
        path: 'home'
    });
}