const {MedRecord} = require("../../ORM/medRecord.model");

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
            
            try{
                return await MedRecord.create(data);  
            }catch(error){
                throw error;
            }              
        }
    
    }