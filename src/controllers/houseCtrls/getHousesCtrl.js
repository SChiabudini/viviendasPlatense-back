require('../../db');
const House = require('../../collections/House');

const getHousesCtrl = async () => {
    const houses = await House.find();

    return houses;
};

module.exports = getHousesCtrl;