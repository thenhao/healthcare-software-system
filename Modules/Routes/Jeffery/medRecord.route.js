const express = require("express")
const router = express.Router()
const MedicalRecordModel = require("../../ORM/medRecord.model");
const {createNewMedRecord} = require('../../Controller/Jeffery/medRecord.controller');

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
router.post('/', createNewMedRecord);

router.get("/", async (req, res) => {
    const medRecordList = await MedicalRecordModel.findAll();
    res.send(medRecordList);
})

module.exports = router;