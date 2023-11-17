const postHouseCtrl = require('../../controllers/houseCtrls/postHouseCtrl');

const postHouseHandler = async (req, res) => {
  const { type, size, price, image } = req.body;

  try {
    if (!type || !size || !price || !image) {
      return res.status(400).send({ error: 'Missing data' });
    }

    if (
      typeof type !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - type' });
    }
    if (typeof size !== 'number') {
      return res.status(400).send({ error: 'Incorrect DataType - size' });
    }
    if (typeof price !== 'number') {
      return res.status(400).send({ error: 'Incorrect DataType - price' });
    }
    if (typeof image !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - image' });
    }

    const newHouse = await postHouseCtrl(type, size, price, image);

    res.status(200).send(newHouse);

  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postHouseHandler;