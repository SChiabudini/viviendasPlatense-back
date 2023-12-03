const House = require('../../collections/House');

const postHouseCtrl = async (type, size, price, images, rooms) => {
  
    const newHouse = {
      type,
      size,
      price,
      images,
      rooms
    }

    const createdHouse = await House.create(newHouse);

    return createdHouse;
};

module.exports = postHouseCtrl;