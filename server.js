const express = require('express');

const db = require('./knexfile');

const carDealerRouter = require('./carDealer-Router')

const server = express();

server.use(express.json());
server.use('/api/cars' , carDealerRouter);













module.exports = server;