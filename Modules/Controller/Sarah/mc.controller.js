//As a Clinic Assistant, I am able to create a MC for the person by using his FIN

//Import McService
const mcService = require('../../Services/Sarah/mc.service.js');

//Import Joi
const Joi = require('joi');

//For post request
class McController {
    async createMC(req, res) {
        const schema = Joi.object().keys({
            fin: Joi.string().trim().required(),
            clinicID: Joi.number().required(),
            mcStartDate: Joi.date().format("DD/MM/YYYY").required(),
            mcEndDate: Joi.date().format("DD/MM/YYYY").required(),
            status: Joi.string().trim().required()
        });
        Joi.validate(req.body, schema, (error, result) => {
            if (error) {
                console.log(error)
                res.status(400).json({message: "Incorrect request data"})
            }
            console.log(result)
            res.json({data:result.data, status: result.status, message:result.message});
        })
    }
}

module.exports = McController;

/*
const {fin, clinicID, mcStartDate, mcEndDate, status} = req.body;
if(typeof fin !== "string" || 
            typeof clinicID !== "number" || 
            typeof mcStartDate !== "string" || 
            typeof mcEndDate !== "string" || 
            typeof status !== "string"
        )
        {
             res.status(400);
             return res.json({message: "Incorrect request data"})
        }
        
        try {
            const result = await mcService.createMC(fin, clinicID, mcStartDate, mcEndDate, status);
            res.status(result.status);
            return res.json({data:result.data, status: result.status, message:result.message});
        } catch(error) {
            console.log(error.message);
            res.status(500).send({message: "An error has occurred."})
        }
*/