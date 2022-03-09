const express = require("express");
const router = express.Router();
const MedicalRecordModel = require("../../ORM/fullMedicalRecord.model");
const {createNewMedRecord} = require('../../Controller/Jeffery/medRecord.controller');//Ensure same as export in other file

//Create new medical record's identity
// POST /medicalrecord
/*
{
    clinicID:integer (FK),
    FIN:string (FK),
    issueMC: boolean,
    medicalHistory:string,
    visitHistory: date (today's date),
    nextOfKinContact: integer (FK)
}
*/
router.post('/newrecord', createNewMedRecord);

router.get('/newrecord', async (req, res) => {
    const list = await MedicalRecordModel.findAll();
    res.send(list);
})

module.exports = router;