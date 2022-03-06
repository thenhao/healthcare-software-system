//As a Clinic Assistant, I am able to create a MC for the person by using his FIN
const express = require('express');
const router = express.Router();

const McController = require('../Controllers/Sarah/mc.controller');
const mcController = new McController;

//const McService = require('../Services/Sarah/mc.service');

router.post('/mc', mcController.createMc);

module.exports = router;

//return res.redirect('/mc');