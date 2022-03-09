//as a supervisor I want to be able to update into the employee records that the employee is at work today

const express = require("express");
const router = express.Router();

//Import controller
const EmployeeWorkStatuscontroller = require("../../Controller/Shaun/EmployeeWorkStatus.controller.js");
const employeeWorkStatuscontroller = new EmployeeWorkStatuscontroller();

//Invoke create in EmployeeWorkStatusController based on route
router.put(
  "/EmployeeWorkStatus",
  employeeWorkStatuscontroller.updateEmployeeWorkStatus
);

module.exports = router;
