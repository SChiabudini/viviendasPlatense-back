const postPortfolioCtrl = require('../../controllers/portfolioCtrls/postPortfolioCtrl');

const postPortfolioHandler = async (req, res) => {
  const { text, image } = req.body;

  try {
    if (!image) {
      return res.status(400).send({ error: 'Missing data' });
    }

    if (
      typeof text !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - text' });
    }
    if (typeof image !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - image' });
    }

    const newPortfolio = await postPortfolioCtrl(text, image);

    res.status(200).send(newPortfolio);

  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postPortfolioHandler;