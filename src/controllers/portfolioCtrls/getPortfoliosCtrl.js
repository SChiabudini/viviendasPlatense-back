require('../../db');
const Portfolio = require('../../collections/Portfolio');

const getPortfoliosCtrl = async () => {
    const portfolios = await Portfolio.find();

    // Mezclar el array aleatoriamente (algoritmo de Fisher-Yates)
    for (let i = portfolios.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [portfolios[i], portfolios[j]] = [portfolios[j], portfolios[i]];
    }

    // Tomar solo los primeros 16
    const randomPortfolios = portfolios.slice(0, 16);

    return randomPortfolios;
};

module.exports = getPortfoliosCtrl;