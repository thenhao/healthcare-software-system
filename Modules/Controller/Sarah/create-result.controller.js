//As a Clinic Assistant, I am able to create a test result for the person by using his FIN

//Import McService
const CreateResultService = require('../../Services/Sarah/create-result.service.js');

//Import Joi
const Joi = require('joi');

//For post request
class CreateResultController {
    async createResult(req, res) {
        const {test, outcome} = req.body;

        const schema = Joi.object().keys({
            test: Joi.string().trim().required(),
            outcome: Joi.string().trim().required()
        });

        const validation = schema.validate(req.body);
        if (validation) {
            const result = await CreateResultService.createResult(test, outcome);
            res.json({data:result.data, status: result.status, message:result.message})
        } else if (!validation) {
            res.status(400).json({message: result.message})
        }
    }
}

module.exports = CreateResultController;