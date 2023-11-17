const getPortfoliosCtrl = require('../../controllers/portfolioCtrls/getPortfoliosCtrl');

const getPortfoliosHandler = async (req, res) => {

    try {
        const portfolios = await getPortfoliosCtrl();

        res.status(200).send(portfolios);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getPortfoliosHandler;