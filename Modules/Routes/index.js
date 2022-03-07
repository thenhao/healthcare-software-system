const express = require('express');

const app = express();

app.use(express.json());

//const mcController = require('../controllers').mc;
const mcRoutes = require('../mc.routes');
app.use(mcRoutes);

module.exports = app;
