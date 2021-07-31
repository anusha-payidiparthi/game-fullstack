const express = require('express')

const GamesCtrl = require('../controllers/games-ctrl')

const router = express.Router()


router.get('/fetchGames', GamesCtrl.fetchGames);

module.exports = router;