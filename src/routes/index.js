const { Router } = require('express');
const houseRouter = require('./houseRoutes');
const portfolioRouter = require('./portfolioRoutes');

const router = Router();

router.use('/house', houseRouter);
router.use('/portfolio', portfolioRouter);
router.use('/', (req, res) => {res.send('Hola soy el back!')});

module.exports = router;