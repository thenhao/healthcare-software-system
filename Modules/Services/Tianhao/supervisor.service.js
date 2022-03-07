const EmployeeRecord = require("../../ORM/empRecord.model.js");
const Person = require("../../ORM/person.model.js");
const MC = require("../../ORM/mc.model.js");

/*checks:
-employee record find fin
-see if it equals person table fin (exists or not)
-findall where the fin exist in the MC */

module.exports = {
    findSpecificEmployee: async(employeeId) =>{
        //The result object is where we will put the result to be sent to the client
        let result = {
            message:null,
            status: null,
            data: null
        }

        //Look for the vehicle and driver in the database
        const employeeRecord = await EmployeeRecord.findByPk(employeeId);
        const person = await Person.findByPk(employeeRecord.FIN);
        const mc = await MC.findAll({where:{FIN:person.FIN}});

        //What we want:
        //1. check if employee record and person exists
        //2. If yes, proceed with finding mc
        //3. If no, return error message.
        
        //check if employee, person and mc exists
        if(!employeeRecord){
            result.message = `Employee ID ${employeeId} is not found`;
            result.status = 404;
            return result;
        }

        if(!person){
            result.message = `No such person with FIN ${employeeRecord.FIN} found`;
            result.status = 404;
            return result;
        }

        if(!mc){
            result.message = `No MC for ${employeeRecord.FIN} found`;
            result.status = 404;
            return result;
        }

        result.data = mc;
        result.status = 200;
        result.message = `MC retrieval for employee with ID:${employeeId} successful `;
        return result;
    },

    findAll: async()=>{
        let result = {
            message:null,
            status: null,
            data: null
        }
        
        //const vehicle = await Vehicle.findAll({include: Driver});

        const mc = await MC.findAll({include: Person});

        //What we want:
        //1. check all mc exists
        //2. If yes, proceed with finding mc
        //3. If no, return error message.
        
        //check if mc exists

        if(!mc){
            result.message = `No MC records found`;
            result.status = 404;
            return result;
        }

        result.data = mc;
        result.status = 200;
        result.message = `MC retrieval for all employees successful `;
        return result;
    }
}