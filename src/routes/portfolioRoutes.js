const { Router } = require('express');
const { getPortfoliosHandler, getPortfolioByIdHandler, postPortfolioHandler, putPortfolioHandler } = require('../handlers/portfolioHandlers/indexHandlers');

const portfolioRouter = Router();

portfolioRouter.get('/', getPortfoliosHandler);

portfolioRouter.get('/:id', getPortfolioByIdHandler);

portfolioRouter.post('/', postPortfolioHandler);

portfolioRouter.put('/', putPortfolioHandler);

module.exports = portfolioRouter;