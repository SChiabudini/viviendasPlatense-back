const House = require('../../collections/House');

const postHouseCtrl = async (type, size, price, image) => {
  
    const newHouse = {
      type,
      size,
      price,
      image
    }

    const createdHouse = await House.create(newHouse);

    return createdHouse;
};

module.exports = postHouseCtrl;