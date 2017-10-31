const fs = require('fs');

exports.save = (flat,cb) => {
    setTimeout(() => {
        fs.writeFile('./data.json', JSON.stringify(flat),cb);
    }, 5000);
}

exports.load = () => {
    return JSON.parse(fs.readFile('./data.json', 'utf8'));
}
