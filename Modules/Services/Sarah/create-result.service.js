//As a Clinic Assistant, I am able to create a test result for the person by using his FIN
const Person = require("../../ORM/person.model.js");
const TestResult = require("../../ORM/result.model.js");
const Clinic = require("../../ORM/clinic.model.js");

module.exports = {
    //Create function inside object
    createResult: async(test, outcome) => {
        
        let result = {
            message:null,
            status: null,
            data: null
        }
    
        const person = await Person.findByPk(fin);
        
        if(!person){
            result.message = `Person with fin ${fin} was not found.`;
            result.status = 404;
            return result;
        }

        const clinic = await Clinic.findByPk(clinicID);

        if(!clinic){
            result.message = `Clinic with id ${clinicID} not found`;
            result.status = 404;
            return result;
        }
    
        try{
            //Create test result object
            const TestResult = await createResult.create({ 
                test: test, 
                outcome: outcome,
            });
    
            await TestResult.save();
            console.log('Test result is saved to the database');
            result.data = result;
            result.status = 200;
            result.message = "Test result creation successful";
            return result;

        } catch(error) {
            result.message = `Test result creation unsuccessful`;
            result.status = 500;
            return result;
        }
    }
}