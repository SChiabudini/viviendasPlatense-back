const postPortfolioCtrl = require('../../controllers/portfolioCtrls/postPortfolioCtrl');

const postPortfolioHandler = async (req, res) => {
  const { text, image, video } = req.body;

  try {

    const newPortfolio = await postPortfolioCtrl(text, image, video);

    res.status(200).send(newPortfolio);

  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postPortfolioHandler;