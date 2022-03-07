const MedRecord = require('../../ORM/medRecord.model');

module.exports = {

  updateRecord: async(request) => {
    let result = {
      data: null,
      status: null,
      message: null
    }

    const medicalRecord = await MedRecord.findByPK(request.regNo);

    if(!medicalRecord){
      result.message = `Medical Record with RegNo ${request.regNo} does not exist.`
      result.status = 404;
      return result;
    }

    medicalRecord.issueMC = request.issueMC;
    medicalRecord.mcID = request.mcID;
    medicalRecord.medicalHistory = request.medicalHistory;
    medicalRecord.visitHistory = request.visitHistory;

    await medicalRecord.save();

    result.data = medicalRecord;
    result.status = 200;
    result.message = `Medical Record ${request.regNo} has been successfully updated.`
    return result;
  }
}