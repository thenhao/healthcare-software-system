const MedRecord = require("../../ORM/fullMedicalRecord.model");
const Person = require("../../ORM/person.model.js");

module.exports = {

  /*
        Argument (data) must contain the following attributes:
        {
            "clinicID": 1,
            "FIN": "F0123100T",
            "medicalHistory": "g6PD",
            "currentDiagnosis": "Pharyngitis",            
            "nextOfKinName": "next of kin",
            "nextOfKinContact": 123123,
        }
        This attribute will be auto generated:
        - "recordID"
        - "visitHistory"
    */
        createNewPatient: async (data) => {
            data.visitHistory = new Date();
            
            const person = await Person.findByPk(request.FIN);

            if(!person){
              result.status = 404;
              result.message = `FIN No ${request.FIN} does not exist in the system.`
              return result;
            }
            
            try{
                return await MedRecord.create(data);  
            }catch(error){
                throw error;
            }              
        }
    
    }