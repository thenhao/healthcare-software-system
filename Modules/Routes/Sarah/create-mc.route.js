const {authClinic} = require('../../Authorization/auth'); // for JWT role auth

//As a Clinic Assistant, I am able to create a MC for the person by using his FIN
const express = require('express');
const router = express.Router();

//Import controller
const CreateMcController = require('../../Controller/Sarah/create-mc.controller.js');
const createMcController = new CreateMcController();

//Invoke create in McController based on route
router.post('/createMc', authClinic, createMcController.createMc);

module.exports = router;