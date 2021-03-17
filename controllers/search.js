const { findMethod, filterMethod, forEachMethod, forMethod } = require('../util/search-helper');

const arr = ['Janet', 'James', 'Shannon', 'Brandon'];

exports.getSearchMethods = (req, res) => {
    const findOutput = findMethod(arr, 'Shannon');
    const filterOutput = filterMethod(arr, 'Shannon');
    const forEachOutput = forEachMethod(arr, 'Shannon');
    const forOutput = forMethod(arr, 'Shannon');

    res.status(200).render('./search/search', {
        pageTitle: 'Search Methods',
        path: '/search-methods',
        method: req.method,
        findOutput: findOutput,
        filterOutput: filterOutput,
        forEachOutput: forEachOutput,
        forOutput: forOutput
    });
}