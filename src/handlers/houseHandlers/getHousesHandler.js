const getHousesCtrl = require('../../controllers/houseCtrls/getHousesCtrl');

const getHousesHandler = async (req, res) => {

    try {
        const houses = await getHousesCtrl();

        res.status(200).send(houses);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getHousesHandler;