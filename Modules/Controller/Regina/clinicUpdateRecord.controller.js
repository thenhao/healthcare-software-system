const updateMedRecordService = require('../../Services/Regina/clinicUpdateRecord.service');

class UpdateMedRecordController {

  async updateRecord(req, res){
    if(typeof req.body.regNo !== 'number' && typeof req.body.issueMC !== 'boolean' && typeof req.body.mcID !== 'number' && typeof req.body.medicalHistory !== 'string' && req.body.currentDiagnosis !== 'string' && typeof req.bosy.visitHistory !== 'string'){
      res.status(400);
      return res.json({message: "Incorrect data requested."});
    }

    const result = await updateMedRecordService.updateRecord(req.body);
    res.status(result.status);

    return res.json({data: result.data, status: result.status, message: result.message});
  }
}

module.exports = UpdateMedRecordController;