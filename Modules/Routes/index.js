const express = require('express');
const app = express();

app.use(express.json());

const mcRoutes = require('../mc.routes');
app.use(mcRoutes);

module.exports = app;