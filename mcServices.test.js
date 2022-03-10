// const Person = require("./Modules/ORM/person.model");
// const Clinic = require("./Modules/ORM/clinic.model");
// const MC = require("./Modules/ORM/mc.model");
// const mcTest = require("./Modules/Services/Sarah/mc.service");

// (async () => {
//      await MC.destroy({ where: {} })
//  })();


// jest.setTimeout(30000);

// afterEach(() => {
//     jest.clearAllMocks();
//   });


// let fin='G4941042Q';
// let clinicID=1;
// let mcStartDate='2022-12-05T16:00:00.000Z';
// let mcEndDate='2022-12-07T16:00:00.000Z';
// let status='Not fit for work';

// const testdataG ={
//     personid:1,
//     clinicID:1
// }

// const testdataN ={
//     personid:0,
//     fin:0,
//     clinicID:0,
//     mcStartDate:"",
//     mcEndDate:"",
//     status:null,
//     personidNeverExist:0,
//     clinicidNeverExist:0
// }

// describe(`Test for create MC`, () => {
   
//     test (`create mc test, person does not exist, fail return 404`, async () => {
//         Person.findByPk = jest.fn().mockReturnValue();
//         Clinic.findByPk = jest.fn().mockReturnValue(testdataG.clinicID);
//         const result = await mcTest.createMC(fin, clinicID, mcStartDate, mcEndDate, status);
//         expect (result.status).toBe(404);
//     })

//     test (`create mc test, clinic does not exist, fail return 404`, async () => {
//         Person.findByPk = jest.fn().mockReturnValue(testdataG.personid);
//         Clinic.findByPk = jest.fn().mockReturnValue();
//         const result = await mcTest.createMC(fin, clinicID, mcStartDate, mcEndDate, status);
//         expect (result.status).toBe(404);
//     })

//     test (`create mc test, wrong fin, fail return 500`, async () => {
//         Person.findByPk = jest.fn().mockReturnValue(testdataG.personid);
//         Clinic.findByPk = jest.fn().mockReturnValue(testdataG.clinicID);
//         const result = await mcTest.createMC(testdataN.fin, clinicID, mcStartDate, mcEndDate, status);
//         expect (result.status).toBe(500);
//     })

//     test (`create mc test, wrong clinicID, fail return 500`, async () => {
//         Person.findByPk = jest.fn().mockReturnValue(testdataG.personid);
//         Clinic.findByPk = jest.fn().mockReturnValue(testdataG.clinicID);
//         const result = await mcTest.createMC(fin, testdataN.clinicID, mcStartDate, mcEndDate, status);
//         expect (result.status).toBe(500);
//     })

//     test (`create mc test, wrong mcStartDate, fail return 500`, async () => {
//         Person.findByPk = jest.fn().mockReturnValue(testdataG.personid);
//         Clinic.findByPk = jest.fn().mockReturnValue(testdataG.clinicID);
//         const result = await mcTest.createMC(fin, clinicID, testdataN.mcStartDate, mcEndDate, status);
//         expect (result.status).toBe(500);
//     })

//     test (`create mc test, wrong mcEndDate, fail return 500`, async () => {
//         Person.findByPk = jest.fn().mockReturnValue(testdataG.personid);
//         Clinic.findByPk = jest.fn().mockReturnValue(testdataG.clinicID);
//         const result = await mcTest.createMC(fin, clinicID, mcStartDate, testdataN.mcEndDate, status);
//         expect (result.status).toBe(500);
//     })

//     test (`create mc test, wrong status, fail return 500`, async () => {
//         Person.findByPk = jest.fn().mockReturnValue(testdataG.personid);
//         Clinic.findByPk = jest.fn().mockReturnValue(testdataG.clinicID);
//         const result = await mcTest.createMC(fin, clinicID, mcStartDate, mcEndDate, testdataN.status);
//         expect (result.status).toBe(500);
//     })

//     test (`create mc test, success return 200`, async () => {
//         Person.findByPk = jest.fn().mockReturnValue(testdataG.personid);
//         Clinic.findByPk = jest.fn().mockReturnValue(testdataG.clinicID);
//         const result = await mcTest.createMC(fin, clinicID, mcStartDate, mcEndDate, status);
//         expect (result.status).toBe(200);
//     })

// })