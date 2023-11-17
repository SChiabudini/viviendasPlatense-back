const Portfolio = require('../../collections/Portfolio');

const getPortfolioByIdCtrl = async (_id) => {
    const portfolio = await Portfolio.findOne({_id})
    
    return portfolio;
}

module.exports = getPortfolioByIdCtrl;