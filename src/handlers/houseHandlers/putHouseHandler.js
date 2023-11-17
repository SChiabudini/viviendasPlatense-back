const putHouseCtrl = require('../../controllers/houseCtrls/putHouseCtrl');

const putHouseHandler = async (req, res) => {
    const { _id, type, size, price, image } = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      if (
        (type && typeof type !== 'string') ||
        (size && typeof size !== 'number') ||
        (price && typeof price !== 'number') ||
        (image && typeof image !== 'string')
    ){
        return res.status(400).send({ error: 'Incorrect DataType' });
      }
      
      const houseUpdate = await putHouseCtrl(_id, type, size, price, image)
    
      return res.status(200).send('House had been updated');

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putHouseHandler;