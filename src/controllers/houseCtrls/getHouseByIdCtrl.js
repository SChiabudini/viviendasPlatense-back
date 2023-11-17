require('../../db');
const House = require('../../collections/House');

const getHouseByIdCtrl = async (_id) => {
    const house = await House.findOne({_id})
    
    return house;
}

module.exports = getHouseByIdCtrl;