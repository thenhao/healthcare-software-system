const Person = require("../Modules/ORM/person.model");
const EmployeeRecord = require("../Modules/ORM/empRecord.model.js");
const MC = require("../Modules/ORM/mc.model.js");
const { DataTypes, Model} = require("sequelize");
const sequelize = require('../Modules/ORM/setup.js');
const workerTest = require("../Modules/Services/Shaun/workerStatusUpdate.service");

afterEach(() => {
    jest.clearAllMocks();
  });

let isWorkingToday=true;
let fin="G4941042Q";
let mcStartDate="2022-12-05T16:00:00.000Z";

const testdataG ={
    personid:1,
    mcid:1,
    employeeid:1
}

const testdataN ={
    personid:0,
    personidNeverExist: 0,
    mcid:0,
    isWorkingToday: "",
    fin: "",
    mcStartDate: ""

}

const sampleUser1 = {
    employee_ID : 1,
    fin : "G4941042Q", 
    company_UEN: "20224343W",
    is_Working_Today : true,
    sick_leave_claimed : 2,
    sick_leave_remaining: 12,
    save:jest.fn()
};

const sampleUser2 = {
    employee_ID : 0,
    fin : "", 
    company_UEN: "20224343W",
    is_Working_Today : true,
    sick_leave_claimed : 2,
    sick_leave_remaining: 12,
    save:jest.fn()
};

describe(`Test for updating employee record`, () => {
   
    test (`update record test, fail return 404`, async () => {
        Person.findByPk = jest.fn().mockReturnValue(testdataG.personid);
        MC.findAll = jest.fn().mockReturnValue(testdataG.mcid);
        EmployeeRecord.findOne = jest.fn().mockReturnValue();
        const result =  await workerTest.updateEmployeeWorkStatus(testdataG.isWorkingToday, testdataG.fin, testdataG.mcStartDate);
        expect (result.status).toBe(404);
    })

    test (`update record test mc not found, fail return 404`, async () => {
        Person.findByPk = jest.fn().mockReturnValue(testdataG.personid);
        MC.findAll = jest.fn().mockReturnValue(testdataN.mcid);
        EmployeeRecord.findOne = jest.fn().mockReturnValue(sampleUser2);
        const result =  await workerTest.updateEmployeeWorkStatus(testdataG.isWorkingToday, testdataG.fin, testdataG.mcStartDate);
        expect (result.status).toBe(404);
    })

    test (`update record test person not found, fail return 404`, async () => {
        Person.findByPk = jest.fn().mockReturnValue(testdataN.personid);
        MC.findAll = jest.fn().mockReturnValue(testdataG.mcid);
        EmployeeRecord.findOne = jest.fn().mockReturnValue(sampleUser2);
        const result =  await workerTest.updateEmployeeWorkStatus(testdataG.isWorkingToday, testdataG.fin, testdataG.mcStartDate);
        expect (result.status).toBe(404);
    })

    test (`update record test invalid working today status input, fail return 404`, async () => {
        Person.findByPk = jest.fn().mockReturnValue(testdataN.personid);
        MC.findAll = jest.fn().mockReturnValue(testdataG.mcid);
        EmployeeRecord.findOne = jest.fn().mockReturnValue(sampleUser2);
        const result =  await workerTest.updateEmployeeWorkStatus(testdataN.isWorkingToday, testdataG.fin, testdataG.mcStartDate);
        expect (result.status).toBe(404);
    })

    test (`update record test invalid fin input , fail return 404`, async () => {
        Person.findByPk = jest.fn().mockReturnValue(testdataN.personid);
        MC.findAll = jest.fn().mockReturnValue(testdataG.mcid);
        EmployeeRecord.findOne = jest.fn().mockReturnValue(sampleUser2);
        const result =  await workerTest.updateEmployeeWorkStatus(testdataG.isWorkingToday, testdataN.fin, testdataG.mcStartDate);
        expect (result.status).toBe(404);
    })

    test (`update record test invalid mcStartDate input , fail return 404`, async () => {
        Person.findByPk = jest.fn().mockReturnValue(testdataN.personid);
        MC.findAll = jest.fn().mockReturnValue(testdataG.mcid);
        EmployeeRecord.findOne = jest.fn().mockReturnValue(sampleUser2);
        const result =  await workerTest.updateEmployeeWorkStatus(testdataG.isWorkingToday, testdataG.fin, testdataN.mcStartDate);
        expect (result.status).toBe(404);
    })

    test (`update record test, success return 200`, async () => {
        Person.findByPk = jest.fn().mockReturnValue(testdataG.personid);
        MC.findAll = jest.fn().mockReturnValue(testdataG.mcid);
        EmployeeRecord.findOne = jest.fn().mockReturnValue(sampleUser1);
        
        const result = await workerTest.updateEmployeeWorkStatus(isWorkingToday, fin, mcStartDate);
        expect (result.status).toBe(200);
    })

})