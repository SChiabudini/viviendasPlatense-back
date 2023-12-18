const postHouseCtrl = require('../../controllers/houseCtrls/postHouseCtrl');

const postHouseHandler = async (req, res) => {
  const { type, size, price, images, rooms, description } = req.body;

  try {
    if (!type || !size || !price || !images || !Array.isArray(images) || !rooms || !description) {
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

    if (!description.every((description) => typeof description === 'string')) {
      return res.status(400).send({ error: 'Incorrect DataType - description' });
    }

    const newHouse = await postHouseCtrl(type, size, price, images, rooms, description);

    res.status(200).send(newHouse);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postHouseHandler;
