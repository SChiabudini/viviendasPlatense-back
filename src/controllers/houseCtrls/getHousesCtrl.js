require('../../db');
const House = require('../../collections/House');

const getHousesCtrl = async () => {
    const houses = await House.find();

    const sortedHouses = houses.sort((a, b) => {
        // 1️⃣ Priorizar "Eco" sobre los demás
        if (a.type === 'Eco' && b.type !== 'Eco') return -1;
        if (a.type !== 'Eco' && b.type === 'Eco') return 1;

        // 2️⃣ Si ambos son "Eco", ordenar por tamaño ascendente
        if (a.type === 'Eco' && b.type === 'Eco') {
            return a.size - b.size;
        }

        // 3️⃣ Si ninguno es "Eco", mantener el orden original
        return 0;
    });

    return sortedHouses;
};

module.exports = getHousesCtrl;
