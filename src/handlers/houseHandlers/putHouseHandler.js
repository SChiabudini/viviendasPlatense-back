const putHouseCtrl = require('../../controllers/houseCtrls/putHouseCtrl');

const putHouseHandler = async (req, res) => {
    const { _id, type, size, price, images, rooms, description } = req.body;

    try {
        if (!_id) {
            return res.status(400).json({ error: 'Missing ID' });
        }

        if (
            (type && typeof type !== 'string') ||
            (size && typeof size !== 'number') ||
            (price && typeof price !== 'number') ||
            (images && (!Array.isArray(images) || !images.every((image) => typeof image === 'string'))) ||
            (rooms && typeof rooms !== 'string') ||
            (description && (!Array.isArray(description) || !description.every((description) => typeof description === 'string')))
        ) {
            return res.status(400).send({ error: 'Incorrect DataType' });
        }

        const houseUpdate = await putHouseCtrl(_id, type, size, price, images, rooms, description);

        return res.status(200).send('House has been updated');
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putHouseHandler;
