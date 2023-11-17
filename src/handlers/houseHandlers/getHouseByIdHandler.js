const getHouseByIdCtrl = require('../../controllers/houseCtrls/getHouseByIdCtrl');

const getHouseByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const house = await getHouseByIdCtrl(id);

        res.status(200).send(house);

    } catch (error) {
        res.status(400).send({ description: `There's no house with ID: ${id}` }); 
    }
};

module.exports = getHouseByIdHandler;