require('dotenv').config()
const express = require('express');
const cors = require('cors');
const morgan = require('morgan')


const ConnectDatabase = require('./DB');
const userRouter = require('./Router/User.Route.js');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))

app.use('/user', userRouter)

app.get("/", (req, res) => {
    res.send("all is well")
})




ConnectDatabase()
    .then(() => {
        app.listen(8000)
        console.log("Server Started")
})


