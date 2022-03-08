const CurrentVisit = require('../../ORM/currentVisit.model');
const Clinic = require('../../ORM/clinic.model');
const MC = require('../../ORM/mc.model');
const Person = require('../../ORM/person.model');
const NextOfKin = require('../../ORM/nextOfKin.model');

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

    const mcID = await MC.findByPk(request.mcID);

    if(!mcID){
      result.status = 404;
      result.message = `MC ID ${request.mcID} does not exist in the system.`
      return result;
    }

    const clinicID = Clinic.findByPk(request.clinicID);

    if(!clinicID){
      result.status = 404;
      result.message = `Clinic ID ${request.clinicID} does not exist in the system.`
      return result;
    }

    const nextOfKinID = NextOfKin.findByPk(request.nextOfKinID);

    if(!nextOfKinID){
      result.status = 404;
      result.message = `Next Of Kin ID ${request.nextOfKinID} does not exist in the system.`
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
  },

  findVisitRecord: async(request) => {
    let result = {
      data: null,
      status: null,
      message: null
    }

    const findRecord = await CurrentVisit.findAll({where: {FIN: request.FIN}});
    
    result.data = findRecord;
    result.status = 200;
    result.message = `Visit Record retrieval for FIN No ${request.FIN} is successful.`
  },

  updateVisitRecord: async(request) => {
    let result = {
      data: null,
      status: null,
      message: null
    }

    const updateRecord = await CurrentVisit.findAll({where: {regNo: request.regNo, FIN: request.FIN}});
    result.data = updateRecord;
    result.status = 200;
    result.message = `Visit Record ${request.regNo} update for FIN No ${request.FIN} is successful.`
  }
}