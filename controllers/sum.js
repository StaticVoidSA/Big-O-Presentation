const { sumA, sumB, sumC } = require('../util/sum-helper');

const arr = [9023, 345, 67567, 344, 3345, 2333, 76445, 3454, 4545, 2343, 65656, 34545, 
    2323, 331, 3434, 2324, 87978, 5666, 4545, 3434, 34534, 99230, 37884, 238823, 123, 33434, 
    56656, 34534, 2344, 334, 5455, 34357, 2345, 233, 1222, 554321, 763786, 34555, 3456, 345,
    2343, 76555, 45566, 3344, 9088, 6778, 56677, 456665, 345554, 34457, 34456, 5667, 4555,
    45456, 767, 7888, 67867, 456, 345, 333455];

exports.getSums = (req, res) => {
    try {
        const outputForEach = sumA(arr);
        const outputFilter = sumB(arr);    
        const outputMap = sumC(arr);
    
        res.status(200).render('./sum/sum', {
            pageTitle: 'Total Sums',
            path: '/sums',
            timeA: outputForEach.time,
            outputA: outputForEach, 
            timeB: outputFilter.time,
            outputB: outputFilter,
            timeC: outputMap.time,
            outputC: outputMap,
            length: arr.length
        });
    } catch (error) {
        console.log(error);
    }
}