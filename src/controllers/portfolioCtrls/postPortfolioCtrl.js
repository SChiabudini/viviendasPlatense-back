const Portfolio = require('../../collections/Portfolio');

const postPortfolioCtrl = async (text, image) => {
  
    const newPortfolio = {
        text,
        image
    }

    const createdPortfolio = await Portfolio.create(newPortfolio);

    return createdPortfolio;
};

module.exports = postPortfolioCtrl;