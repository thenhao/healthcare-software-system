//As a Clinic Assistant, I am able to create a MC for the person by using his FIN
const {Mc} = require('../Models');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class McService {
    constructor(datafile) {
        this.datafile = datafile;
    }

    async create(mcId, fin, clinicId, mcStartDate, mcEndDate, status) {
        const data = (await this.getData()) || [];
        data.unshift({mcId, fin, clinicId, mcStartDate, mcEndDate, status});
        return writeFile(this.datafile, JSON.stringify(data));
    }
}

module.exports = McService;