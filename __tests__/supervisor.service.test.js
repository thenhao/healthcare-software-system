
const Person = require("../Modules/ORM/person.model");
const EmployeeRecord = require("../Modules/ORM/empRecord.model.js");
const MC = require("../Modules/ORM/mc.model.js");
const viewmcTest = require("../Modules/Services/Tianhao/supervisor.service");

jest.mock("../Modules/ORM/person.model");
jest.mock("../Modules/ORM/empRecord.model.js", ()=>{
    return {
        findByPk:jest.fn()
    }
});
jest.mock("../Modules/ORM/mc.model.js", ()=>({}));
jest.mock("../Modules/ORM/company.model.js");


afterEach(() => {
    jest.clearAllMocks();    
  });


const testdataG ={
    employeeId:1,
    fin:'G4941042Q',
    clinicid:1
}

const testdataN ={
    employeeId:0,
    fin:123456,
    personidNeverExist: 0
}

describe("Test supervisor.service findSpecificEmployee function", ()=>{
    beforeEach(() => {
        jest.clearAllMocks();     
      });

    it("should return 404 when employeeRecord is not found", async ()=>{
        const mockId = 1;
        const spyEmployeeRecord = jest.spyOn(EmployeeRecord, "findByPk");
        spyEmployeeRecord.mockResolvedValue(null);
        // EmployeeRecord.findByPk = jest.fn().mockResolvedValue(null);
        const result = await viewmcTest.findSpecificEmployee(mockId);
        expect(result.status).toBe(404);
        expect(spyEmployeeRecord).toHaveBeenCalledTimes(1);
    })

    it("should return 404 when person is not found", async ()=>{

        // Prepare
        const mockId = 1;
        const mockReturnEmployeeRecord = {
            FIN:"123"
        }
        const spyEmployeeRecord = jest.spyOn(EmployeeRecord, "findByPk");
        spyEmployeeRecord.mockResolvedValue(mockReturnEmployeeRecord);

        const spyPerson = jest.spyOn(Person, "findByPk");
        spyPerson.mockResolvedValue(null);

        // Test
        const result = await viewmcTest.findSpecificEmployee(mockId);

        // Expect
        expect(result.status).toBe(404);
        expect(spyEmployeeRecord).toHaveBeenCalledTimes(1);
        expect(spyPerson).toHaveBeenCalledTimes(1);
    })

    it("should return 200 when MC is found", ()=>{
        throw new Error("Not implemented");

    })
})

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