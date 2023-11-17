require('../../db');
const Portfolio = require('../../collections/Portfolio');

const getPortfoliosCtrl = async () => {
    const portfolios = await Portfolio.find();

    return portfolios;
};

module.exports = getPortfoliosCtrl;