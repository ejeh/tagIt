if(process.env.NODE_ENV == 'dev' || process.env.NODE_ENV == 'test') {
    require('dotenv').config();
}


const
    express = require("express"),
    bParser = require('body-parser');
const app = express();

const
    port = process.env.PORT,
    env = process.env.NODE_ENV;

app.set('port', port);
app.set('env', env);
const routes = require('./routes/routes');



app.use(bParser.json());
app.use(bParser.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    if(req.method === 'OPTIONS') {
        res.status(200).end();
    }
    else {
        next();
    }
});

module.exports = app;
