// const Person = require("./Modules/ORM/person.model");
// const EmployeeRecord = require("./Modules/ORM/empRecord.model.js");
// const MC = require("./Modules/ORM/mc.model.js");
// const viewmcTest = require("./Modules/Services/Tianhao/supervisor.service");

// afterEach(() => {
//     jest.clearAllMocks();
//   });


// const testdataG ={
//     employeeId:1,
//     fin:'G4941042Q',
//     clinicid:1
// }

// const testdataN ={
//     employeeId:0,
//     fin:123456,
//     personidNeverExist: 0
// }

// describe(`Test for create MC`, () => {
   
//      test (`view mc for 1 employee test, fail return 404`, async () => {
//         EmployeeRecord.findByPk = jest.fn().mockReturnValue(testdataN.employeeId);
//         Person.findByPk = jest.fn().mockReturnValue(testdataN.personidNeverExist);
//         MC.findAll = jest.fn().mockReturnValue(testdataN.fin);
//         const result = await viewmcTest.findSpecificEmployee(testdataN.employeeId);
//         expect (result.status).toBe(404);
//     })

//     test (`view mc for 1 employee test, employee dont exist, fail return 404`, async () => {
//         EmployeeRecord.findByPk = jest.fn().mockReturnValue(testdataN.employeeId);
//         Person.findByPk = jest.fn().mockReturnValue(testdataG.fin);
//         MC.findAll = jest.fn().mockReturnValue(testdataG.fin);
//         const result = await viewmcTest.findSpecificEmployee(testdataN.employeeId);
//         expect (result.status).toBe(404);
//     })

//     test (`view mc for 1 employee test, person dont exist, fail return 404`, async () => {
//         EmployeeRecord.findByPk = jest.fn().mockReturnValue(testdataG.employeeId);
//         Person.findByPk = jest.fn().mockReturnValue(testdataN.personidNeverExist);
//         MC.findAll = jest.fn().mockReturnValue(testdataG.fin);
//         const result = await viewmcTest.findSpecificEmployee(testdataG.employeeId);
//         expect (result.status).toBe(404);
//     })

//     test (`view mc for 1 employee test, no mc found, fail return 404`, async () => {
//         EmployeeRecord.findByPk = jest.fn().mockReturnValue(testdataG.employeeId);
//         Person.findByPk = jest.fn().mockReturnValue(testdataG.fin);
//         MC.findAll = jest.fn().mockReturnValue();
//         const result = await viewmcTest.findSpecificEmployee(testdataG.employeeId);
//         expect (result.status).toBe(404);
//     })

//     test (`view mc for 1 employee test, success return 200`, async () => {
//         EmployeeRecord.findByPk = jest.fn().mockReturnValue(testdataG.employeeId);
//         Person.findByPk = jest.fn().mockReturnValue(testdataG.fin);
//         MC.findAll = jest.fn().mockReturnValue(testdataG.fin);
//         const result = await viewmcTest.findSpecificEmployee(testdataG.employeeId);
//         expect (result.status).toBe(200);
//     })

//     test (`view all mc test, success return 200`, async () => {
//         MC.findAll = jest.fn().mockReturnValue([]);
//         const result = await viewmcTest.findAll();
//         expect (result.status).toBe(200);
//     })

//     test (`view all mc test, fail return 404`, async () => {
//         MC.findAll = jest.fn().mockReturnValue();
//         const result = await viewmcTest.findAll();
//         expect (result.status).toBe(404);
//     })

// })