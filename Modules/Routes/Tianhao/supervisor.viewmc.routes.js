const express = require("express");
//to bring in the controller for supervisor under my folder
const SupervisorController = require("../../Controller/Tianhao/supervisor.controller.js");
const router = express.Router();

//Instantiate a new instance of the class
const supervisorController = new SupervisorController();

//user story: As a Supervisor, I am able to view all historical MC of the person by using his employee ID

router.get("/viewmc", supervisorController.findAll);
router.get("/viewmc/:employeeID", supervisorController.findSpecificEmployee);

module.exports = router;