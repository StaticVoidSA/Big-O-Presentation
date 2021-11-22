const { sumA, sumB, sumC, sumD } = require('../util/sum-helper');
const createArray = require('../util/generate_array');

exports.getSums = (req, res) => {
    try {
        const arr = createArray.create(1000, 1, 2000);
        const outputForEach = sumA(arr);
        const outputFilter = sumB(arr);    
        const outputMap = sumC(arr);
        const outputRecursive = sumD(arr);
    
        res.status(200).render('./sum/sum', {
            pageTitle: 'Total Sums',
            path: '/sums',
            timeA: outputForEach.time,
            outputA: outputForEach, 
            timeB: outputFilter.time,
            outputB: outputFilter,
            timeC: outputMap.time,
            outputC: outputMap,
            timeD: outputRecursive.time,
            outputD: outputRecursive,
            length: arr.length
        });
    } catch (error) {
        console.log(error);
    }
}