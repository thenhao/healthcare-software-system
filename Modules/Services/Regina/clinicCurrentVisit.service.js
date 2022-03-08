const CurrentVisit = require('../../ORM/currentVisit.model');
const Person = require('../../ORM/person.model');

module.exports = {

  createVisitRecord: async(request) => {
    let result = {
      data: null,
      status: null,
      message: null
    }
    
    const person = await Person.findByPk(request.FIN);

    if(!person){
      result.status = 404;
      result.message = `FIN No ${request.FIN} does not exist in the system.`
      return result;
    }

    const visitRecord = await CurrentVisit.create({
      clinicID: request.clinicID,
      FIN: request.FIN,
      issueMC: request.issueMC,
      mcID: request.mcID,
      nextOfKinID: request.nextOfKinID,
      currentDiagnosis: request.currentDiagnosis
    });

    result.data = visitRecord;
    result.status = 200;
    result.message = `Visit Record ${visitRecord.regNo} for FIN No ${request.FIN} has been successfully updated.`
    return result;
  }
}