const fs = require('fs');

exports.save = (job) => {
    fs.writeFileSync('./data-job.json', JSON.stringify(job));
}

exports.load = () => {
    return JSON.parse(fs.readFileSync('./data-job.json', 'utf8'));
}