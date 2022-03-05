const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();

append.use(express.json());

module.exports = router;