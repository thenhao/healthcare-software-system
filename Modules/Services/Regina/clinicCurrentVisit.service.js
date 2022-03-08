const CurrentVisit = require('../../ORM/currentVisit.model');

module.exports = {

  createVisitRecord: async(request) => {
    let result = {
      data: null,
      status: null,
      message: null
    }

    const visitRecord = await CurrentVisit.findAll({where: {fin: request.fin}});

    if(!visitRecord){
      result.message = `Visit Record with FIN No ${request.fin} does not exist.`
      result.status = 404;
      return result;
    }

    visitRecord.clinicID = request.clinicID;
    visitRecord.fin = request.fin;
    visitRecord.issueMC = request.issueMC;
    visitRecord.mcID = request.mcID;
    visitRecord.nextOfKinID = request.nextOfKinID;
    visitRecord.currentDiagnosis = request.currentDiagnosis;

    await visitRecord.save();

    result.data = visitRecord;
    result.status = 200;
    result.message = `Visit Record for FIN No ${request.fin} has been successfully updated.`
    return result;
  }
}