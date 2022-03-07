//As a Clinic Assistant, I am able to create a MC for the person by using his FIN
const Person = require("../../ORM/person.model.js");
const MedicalRecord = require("../../ORM/clinic.model.js");

module.exports = {
    //Create function inside object
    createMC: async() => {
        //Create mc object
        let result = {
            message:null,
            status: null,
            data: null
        }
    
        const medicalRecord = await MedicalRecord.findByPk(medicalRecord.regNo);
        
        if(!medicalRecord){
            result.message = `Medical record with registration number ${medicalRecord.regNo} was not found.`;
            result.status = 404;
            return result;
        }

        const person = await Person.findByPk(medicalRecord.FIN);

        if(!person){
            result.message = `Person with FIN ${medicalRecord.FIN} found`;
            result.status = 404;
            return result;
        }
    
        const MC = await MC.create({
            mcID : req.body.mcID, 
            fin : req.body.fin, 
            clinicID : req.body.clinicID, 
            mcStartDate : req.body.mcStartDate, 
            mcEndDate : req.body.mcEndDate, 
            status : req.body.status
        })
        .then((MC) => res.status(201).json(MC))
        .catch((error) => res.status(400).send(error))
    }
}