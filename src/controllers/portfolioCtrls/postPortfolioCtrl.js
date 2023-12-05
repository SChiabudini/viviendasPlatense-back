const Portfolio = require('../../collections/Portfolio');

const postPortfolioCtrl = async (text, image, video) => {
  
    const newPortfolio = {
        text,
        image,
        video
    }

    const createdPortfolio = await Portfolio.create(newPortfolio);

    return createdPortfolio;
};

module.exports = postPortfolioCtrl;