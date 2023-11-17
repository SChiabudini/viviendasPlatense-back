const putPortfolioCtrl = require('../../controllers/portfolioCtrls/putPortfolioCtrl');

const putPortfolioHandler = async (req, res) => {
    const { _id, text, image } = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      if (
        (text && typeof text !== 'string') ||
        (image && typeof image !== 'string')
    ){
        return res.status(400).send({ error: 'Incorrect DataType' });
      }
      
      const portfolioUpdate = await putPortfolioCtrl(_id, text, image)
    
      return res.status(200).send('Publication had been updated');

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putPortfolioHandler;