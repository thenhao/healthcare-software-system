const express = require('express');
const router = express.Router();

const CurrentVisitController = require('../../Controller/Regina/clinicCurrentVisit.controller');
const currentVisitController = new CurrentVisitController();

router.post('/createVisitRecord', currentVisitController.createVisitRecord);
router.get('/findVisitRecord', currentVisitController.findVisitRecord);
router.put('/updateVisitRecord', currentVisitController.updateVisitRecord);

module.exports = router;