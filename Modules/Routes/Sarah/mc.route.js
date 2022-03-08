//As a Clinic Assistant, I am able to create a MC for the person by using his FIN
const express = require('express');
const router = express.Router();

//Import controller
const McController = require('../../Controller/Sarah/mc.controller.js');
const mcController = new McController();

//Invoke create in McController based on route
router.post('/createMC', mcController.createMC);

module.exports = router;