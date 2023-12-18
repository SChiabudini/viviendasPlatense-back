const House = require('../../collections/House');

const postHouseCtrl = async (type, size, price, images, rooms, description) => {
  
    const newHouse = {
      type,
      size,
      price,
      images,
      rooms,
      description
    }

    const createdHouse = await House.create(newHouse);

    return createdHouse;
};

module.exports = postHouseCtrl;