const CurrentVisit = require('../../ORM/currentVisit.model');

module.exports = {

  createVisitRecord: async(request) => {
    let result = {
      data: null,
      status: null,
      message: null
    }

    const visitRecord = await CurrentVisit.create({
      clinicID: request.clinicID,
      fin: request.fin,
      issueMC: request.issueMC,
      mcID: request.mcID,
      nextOfKinID: request.nextOfKinID,
      currentDiagnosis: request.currentDiagnosis
    });

    await visitRecord.save();

    result.data = visitRecord;
    result.status = 200;
    result.message = `Visit Record for FIN No ${request.fin} has been successfully updated.`
    return result;
  }
}