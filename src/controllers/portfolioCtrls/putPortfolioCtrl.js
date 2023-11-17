require('../../db');
const Portfolio = require('../../collections/Portfolio');

const putPortfolioCtrl = async (_id, text, image) => {

    const updated = await Portfolio.updateOne(
        {_id},
        {$set: {text, image}}
    );

    return updated;
};

module.exports = putPortfolioCtrl;