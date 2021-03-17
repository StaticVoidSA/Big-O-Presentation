const { getMaxForEach, getMaxFilter, getMaxMap } = require('../util/max-value-helper');
const { getMinForEach, getMinFilter, getMinMap } = require('../util/min-value-helper');

exports.getMinMax = (req, res) => {
    res.status(200).render('./min-max/min-max', {
        pageTitle: 'Min-Max Values',
        path: '/min-max',
        method: req.method
    });
}

exports.postMinMax = (req, res) => {
    let arr = new Array();
    arr[0] = +req.body.a;
    arr[1] = +req.body.b;
    arr[2] = +req.body.c;
    arr[3] = +req.body.d;
    arr[4] = +req.body.e;
    arr[5] = +req.body.f;
    arr[6] = +req.body.g;
    arr[7] = +req.body.h;

    if (isNaN(arr[0])) {
        arr = [];
        arr[0] = req.body.a;
        arr[1] = req.body.b;
        arr[2] = req.body.c;
        arr[3] = req.body.d;
        arr[4] = req.body.e;
        arr[5] = req.body.f;
        arr[6] = req.body.g;
        arr[7] = req.body.h;
    }

    const outputForEachMax = getMaxForEach(arr);
    const outputFilterMax = getMaxFilter(arr);
    const outputMapMax = getMaxMap(arr);

    const outputForEachMin = getMinForEach(arr);
    const outputFilterMin = getMinFilter(arr);
    const outputMapMin = getMinMap(arr);

    res.status(200).render('./min-max/min-max', {
        pageTitle: 'Min-Max Values',
        path: '/min-max',
        method: req.method,
        forEachMax: outputForEachMax,
        filterMax: outputFilterMax,
        mapMax: outputMapMax,
        forEachMin: outputForEachMin,
        filterMin: outputFilterMin,
        mapMin: outputMapMin
    });
}