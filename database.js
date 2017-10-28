const fs = require('fs');

exports.save = (flat) => {
    fs.writeFileSync('./data.json', JSON.stringify(flat));
}

exports.load = () => {
    return JSON.parse(fs.readFileSync('./data.json', 'utf8'));
}
