require('../../db');
const House = require('../../collections/House');

const putHouseCtrl = async (_id, type, size, price, image) => {

    const updated = await House.updateOne(
        {_id},
        {$set: {type, size, price, image}}
    );

    return updated;
};

module.exports = putHouseCtrl;