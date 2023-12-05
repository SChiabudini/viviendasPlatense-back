require('../../db');
const Portfolio = require('../../collections/Portfolio');

const putPortfolioCtrl = async (_id, text, image, video) => {

    const updated = await Portfolio.updateOne(
        {_id},
        {$set: {text, image, video}}
    );

    return updated;
};

module.exports = putPortfolioCtrl;