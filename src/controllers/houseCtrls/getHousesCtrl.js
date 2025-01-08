require('../../db');
const House = require('../../collections/House');

const getHousesCtrl = async () => {
    const houses = await House.find();

    // Reordenar las casas: las de tipo "eco" al inicio, el resto en el orden original.
    const sortedHouses = houses.sort((a, b) => {
        if (a.type === 'Eco' && b.type !== 'Eco') {
            return -1; // "eco" antes de otros
        }
        if (a.type !== 'Eco' && b.type === 'Eco') {
            return 1; // otros después de "eco"
        }
        return 0; // mantener el orden original entre elementos no "eco"
    });

    return sortedHouses;
};

module.exports = getHousesCtrl;