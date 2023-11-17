const { Router } = require('express');
const { getHousesHandler, getHouseByIdHandler, postHouseHandler, putHouseHandler } = require('../handlers/houseHandlers/indexHandlers');

const houseRouter = Router();

houseRouter.get('/', getHousesHandler);

houseRouter.get('/:id', getHouseByIdHandler);

houseRouter.post('/', postHouseHandler);

houseRouter.put('/', putHouseHandler);

module.exports = houseRouter;