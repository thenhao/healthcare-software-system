const CurrentVisit = require('./Modules/ORM/currentVisit.model');
const FullMedicalRecord = require('./Modules/ORM/fullMedicalRecord.model');
const Person = require('./Modules/ORM/person.model');
const MC = require('./Modules/ORM/mc.model');
const Clinic = require('./Modules/ORM/clinic.model');
const NextOfKin = require('./Modules/ORM/nextOfKin.model');

const testMedRecordService = require('./Modules/Services/Jeffery/medRecord.service');
const testCurrentVisitService = require('./Modules/Services/Regina/clinicCurrentVisit.service');



afterEach(() => {
  jest.clearAllMocks();
});

//Jeffrey

describe('test Medical Record GET request', () => {

  test(`Test 1: It should return status 404, if no Medical Record found.`, async() => {
    FullMedicalRecord.findAll = jest.fn().mockReturnValue(null);
    const result = await testMedRecordService.findAll();
    expect (result.status).toBe(404);
  })

  test(`Test 2: It should return status 200, if Medical Record is found.`, async() => {
    FullMedicalRecord.findAll = jest.fn().mockReturnValue([]);
    const result = await testMedRecordService.findAll();
    expect (result.status).toBe(200);
  })
})

describe('test Medical Record POST request', () => {

  test(`Test 1: It should return status 404, if FIN No is not found.`, async() => {
    Person.findByPk = jest.fn().mockReturnValue(null);
    const result = await testMedRecordService.createNewMedRecord("");
    expect (result.status).toBe(404);
  })


  test(`Test 2: It should return status 404, if Clinic ID is not found.`, async() => {
    Person.findByPk = jest.fn().mockReturnValue({});
    Clinic.findByPk = jest.fn().mockReturnValue(null);
    const result = await testMedRecordService.createNewMedRecord("");
    expect (result.status).toBe(404);
  })

  test(`Test 3: It should return status 404, if Next Of Kin ID is not found.`, async() => {
    Person.findByPk = jest.fn().mockReturnValue({});
    Clinic.findByPk = jest.fn().mockReturnValue({});
    NextOfKin.findByPk = jest.fn().mockReturnValue(null);
    const result = await testMedRecordService.createNewMedRecord("");
    expect (result.status).toBe(404);
  })

  test(`Test 4: It should return status 200, if Medical Record has been created.`, async() => {
    Person.findByPk = jest.fn().mockReturnValue({});
    Clinic.findByPk = jest.fn().mockReturnValue({});
    NextOfKin.findByPk = jest.fn().mockReturnValue({});
    FullMedicalRecord.create = jest.fn().mockReturnValue({save: jest.fn(()=>{})});
    const result = await testMedRecordService.createNewMedRecord("");
    expect (result.status).toBe(200);
  })

});

//Regina

describe('test Current Visit POST request', () => {

  test(`Test 1: It should return status 404, if no FIN found.`, async() => {
    Person.findByPk = jest.fn().mockReturnValue(null);
    const result = await testCurrentVisitService.createVisitRecord("");
    expect (result.status).toBe(404);
  })


  test(`Test 2: It should return status 404, if no MC ID is found.`, async() => {
    Person.findByPk = jest.fn().mockReturnValue({});
    MC.findByPk = jest.fn().mockReturnValue(null);
    const result = await testCurrentVisitService.createVisitRecord("");
    expect (result.status).toBe(404);
  })


  test(`Test 3: It should return status 404, if no Clinic ID is found.`, async() => {
    Person.findByPk = jest.fn().mockReturnValue({});
    MC.findByPk = jest.fn().mockReturnValue({});
    Clinic.findByPk = jest.fn().mockReturnValue(null);
    const result = await testCurrentVisitService.createVisitRecord("");
    expect (result.status).toBe(404);
  })

  test(`Test 4: It should return status 404, if no Next Of Kin ID is found.`, async() => {
    Person.findByPk = jest.fn().mockReturnValue({});
    MC.findByPk = jest.fn().mockReturnValue({});
    Clinic.findByPk = jest.fn().mockReturnValue({});
    NextOfKin.findByPk = jest.fn().mockReturnValue(null);
    const result = await testCurrentVisitService.createVisitRecord("");
    expect (result.status).toBe(404);
  })

  test(`Test 5: It should return status 200, if Medical Record has been created.`, async() => {
    Person.findByPk = jest.fn().mockReturnValue({});
    MC.findByPk = jest.fn().mockReturnValue({});
    Clinic.findByPk = jest.fn().mockReturnValue({});
    NextOfKin.findByPk = jest.fn().mockReturnValue({});
    CurrentVisit.create = jest.fn().mockReturnValue({});
    const result = await testCurrentVisitService.createVisitRecord("");
    expect (result.status).toBe(200);
  })

});