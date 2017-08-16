require('@std/esm');
const path = require('path');
const httpStatus = require('statuses');
const express = require('express');
const config = require('./config');
const log = require('./logger');
const port = config.get('port');
const app = express();


app.enable('trust proxy');
app.disable('x-powered-by');

app.get('/ping/:code?', (req, res) => {
    const code = req.params.code;
    const isValidCode = !!httpStatus[code];

    res.type('text/plain');

    if (code === 'version'){
        res.status(200).send(config.get('version'));
    } else {
        res.status(isValidCode ? code : 200).send('pong');
    }
});

log.info(':::::: %s listening on port: %s', config.get('name'), port);
app.listen(port);
