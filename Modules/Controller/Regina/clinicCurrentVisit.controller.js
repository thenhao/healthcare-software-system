const CurrentVisitService = require('../../Services/Regina/clinicCurrentVisit.service');

class CurrentVisitController {

  async createVisitRecord(req, res){
    if(typeof req.body.issueMC !== 'boolean' || typeof req.body.currentDiagnosis !== 'string'){
      res.status(400);
      return res.json({message: "Incorrect data requested."});
    }

    const result = await CurrentVisitService.updateRecord(req.body);
    res.status(result.status);

    return res.json({data: result.data, status: result.status, message: result.message});
  }
}

module.exports = CurrentVisitController;