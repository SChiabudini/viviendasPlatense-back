const getPortfolioByIdCtrl = require('../../controllers/portfolioCtrls/getPortfolioByIdCtrl');

const getPortfolioByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const portfolio = await getPortfolioByIdCtrl(id);

        res.status(200).send(portfolio);

    } catch (error) {
        res.status(400).send({ description: `There's no publication with ID: ${id}` }); 
    }
};

module.exports = getPortfolioByIdHandler;