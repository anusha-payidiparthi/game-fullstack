const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db/connection');
const UserRouter = require('./routes/user-router');
const GamesRouter = require('./routes/games-router');

const app = express()
const apiPort = 3500

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', UserRouter);
app.use('/games', GamesRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))