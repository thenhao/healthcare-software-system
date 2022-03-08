const CurrentVisit = require('../../ORM/currentVisit.model');

module.exports = {

  createVisitRecord: async(request) => {
    let result = {
      data: null,
      status: null,
      message: null
    }

    const visitRecord = await CurrentVisit.findAll({where: {FIN: request.FIN}});

    if(!visitRecord){
      result.message = `Visit Record with FIN No ${request.FIN} does not exist.`
      result.status = 404;
      return result;
    }

    visitRecord.issueMC = request.issueMC;
    visitRecord.currentDiagnosis = request.currentDiagnosis;

    await visitRecord.save();

    result.data = visitRecord;
    result.status = 200;
    result.message = `Visit Record for FIN No ${request.FIN} has been successfully updated.`
    return result;
  }
}