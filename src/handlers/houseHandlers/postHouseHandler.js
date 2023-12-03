const postHouseCtrl = require('../../controllers/houseCtrls/postHouseCtrl');

const postHouseHandler = async (req, res) => {
  const { type, size, price, images, rooms } = req.body;

  try {
    if (!type || !size || !price || !images || !Array.isArray(images) || !rooms) {
      return res.status(400).send({ error: 'Incorrect DataType or Missing Data' });
    }

    if (typeof type !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - type' });
    }

    if (typeof size !== 'number') {
      return res.status(400).send({ error: 'Incorrect DataType - size' });
    }

    if (typeof price !== 'number') {
      return res.status(400).send({ error: 'Incorrect DataType - price' });
    }

    if (!images.every((image) => typeof image === 'string')) {
      return res.status(400).send({ error: 'Incorrect DataType - images' });
    }

    if (typeof rooms !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - type' });
    }

    const newHouse = await postHouseCtrl(type, size, price, images, rooms);

    res.status(200).send(newHouse);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postHouseHandler;
