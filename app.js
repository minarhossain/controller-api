//!Basic import
const { readdirSync } = require('fs')
const express = require('express');
const app = express();
const router = require('./src/routes/api')
require('dotenv').config();
const port = process.env.RUNNING_PORT || 6000;
const ConnectDB = require('./src/config/ConnectDB');


//!Security middlewares import
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const helmet = require('helmet');
// const xss = require('xss-clean');
const hpp = require('hpp');
const bodyParser = require('body-parser');


//!Rate limiting
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 300 });


//!Security middlewares implement
app.use(cors());
app.use(helmet());
// app.use(xss());
app.use(hpp());
app.use(mongoSanitize());
app.use(limiter);

app.use(bodyParser.json({ limit: '5mb' }));


//!Managing Backend routing
// readdirSync("./src/routes").map(r => app.use("/api/v1", require(`./src/routes/${r}`)));
app.use('/api/v1', router)


//! Undefined Route

app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not Found' })
})


//!Server Listening
app.start = async () => {
    try {
        await ConnectDB()
        app.listen(port, () => {
            console.log(`Server Running http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = app;