const Games = require('../models/games-model');


fetchGames = (req, res) => {
    Games.find({}, { name: 1 }, function (err, data) {
        if (err) {
            return res.json({
                success: false
            });
        }
        return res.json({
            success: true,
            data: data
        });
    });
}

module.exports = {
    fetchGames
}