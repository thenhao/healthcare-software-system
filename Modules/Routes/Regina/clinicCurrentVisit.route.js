const express = require('express');
const router = express.Router();

const CurrentVisitController = require('../../Controller/Regina/clinicCurrentVisit.controller');
const currentVisitController = new CurrentVisitController();

router.post('/createVisitRecord', currentVisitController.createVisitRecord);

module.exports = router;