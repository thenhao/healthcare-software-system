//As a Clinic Assistant, I am able to create a MC for the person by using his FIN
//Import McService
const mcService = require('../Services/Sarah/mc.service');

//For post/mc/create request
class McController {
    async create(req, res, next) {
        //Validation
        if (typeof req.body.mcId !== "number" ||
            typeof req.body.fin !== "string" ||
            typeof req.body.clinicId !== "number" ||
            typeof req.body.mcStartDate !== "date" ||
            typeof req.body.mcEndDate !== "date" ||
            typeof req.body.status !== "string") 
            {
                res.status(400).json({message: "Incorrect request data format"})
            }

        //Use service layer
        const mc = await mcService.create(
            req.body.mcId, 
            req.body.fin, 
            req.body.clinicId, 
            req.body.mcStartDate, 
            req.body.mcEndDate, 
            req.body.status
        )
        res.status(result.status)

        //Return mc from service
        return res.json({data:result.data})

    }
}

module.exports = McController;