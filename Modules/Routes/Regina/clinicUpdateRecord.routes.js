const express = require('express');
const router = express.Router();

const UpdateMedRecordController = require('../../Controller/Regina/clinicUpdateRecord.controller');
const updateMedRecordController = new UpdateMedRecordController();

router.put('/updateMedRecord', updateMedRecordController.updateRecord);

module.exports = router;