require('../../db');
const House = require('../../collections/House');

const putHouseCtrl = async (_id, type, size, price, images, rooms) => {

    const updated = await House.updateOne(
        {_id},
        {$set: {type, size, price, images, rooms}}
    );

    return updated;
};

module.exports = putHouseCtrl;