const postPortfolioCtrl = require('../../controllers/portfolioCtrls/postPortfolioCtrl');

const postPortfolioHandler = async (req, res) => {
  const { text, image, video } = req.body;

  try {

    if (
      typeof text !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - text' });
    }
    if (typeof image !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - image' });
    }
    if (typeof video !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - video' });
    }

    const newPortfolio = await postPortfolioCtrl(text, image, video);

    res.status(200).send(newPortfolio);

  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postPortfolioHandler;