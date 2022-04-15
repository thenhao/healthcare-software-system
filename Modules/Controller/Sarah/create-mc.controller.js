//As a Clinic Assistant, I am able to create a MC for the person by using his FIN

//Import McService
const CreateMcService = require('../../Services/Sarah/create-mc.service.js');

//Import Joi
const Joi = require('joi');

//For post request
class CreateMcController {
    async createMc(req, res) {
        const {fin, clinicID, mcStartDate, mcEndDate, status} = req.body;

        const schema = Joi.object().keys({
            fin: Joi.string().trim().required(),
            clinicID: Joi.number().required(),
            mcStartDate: Joi.date().required(),
            mcEndDate: Joi.date().required(),
            status: Joi.string().trim().required()
        });

        const validation = schema.validate(req.body);
        if (validation) {
            const result = await CreateMcService.createMc(fin, clinicID, mcStartDate, mcEndDate, status);
            res.json({data:result.data, status: result.status, message:result.message})
        } else if (!validation) {
            res.status(400).json({message: result.message})
        }
    }
}

module.exports = CreateMcController;