const {authClinic} = require('../../Authorization/auth'); // for JWT role auth

//As a Clinic Assistant, I am able to create a test result for the person by using his FIN
const express = require('express');
const router = express.Router();

//Import controller
const CreateResultController = require('../../Controller/Sarah/create-result.controller.js');
const createResultController = new CreateResultController();

//Invoke create in McController based on route
router.post('/createResult', authClinic, createResultController.createResult);

module.exports = router;