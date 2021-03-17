const fs = require('fs');

exports.readData = (callback, _path) => {
    let info = [];

    fs.readFile(_path, (err, data) => {
        if (!err) {
            info = JSON.parse(data);
        }
    });
    return callback(info);
}

exports.writeData = (type, time, _path) => {
    let info = { type: type, time: time };

    fs.appendFile(_path, JSON.stringify(info), (err) => {
        err && console.log(`Error: ${err}`);
    });
}