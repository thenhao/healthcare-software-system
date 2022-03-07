//As a Clinic Assistant, I am able to create a MC for the person by using his FIN
//Import McService
const mcService = require('../Services/Sarah/mc.service');
const Mc = require('../ORM/mc.model');
//const res = require('express/lib/response');

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

module.exports = {
    create(req, res) {
        return Mc.create({
            mcId : req.body.mcId, 
            fin : req.body.fin, 
            clinicId : req.body.clinicId, 
            mcStartDate : req.body.mcStartDate, 
            mcEndDate : req.body.mcEndDate, 
            status : req.body.status
        })
        .then((mc) => res.status(201).send(mc))
        .catch((error) => res.status(400).send(error))
    }
}

module.exports = {
    create: async(req, res) => {
        return mcService.create(req.body, req.mc['id']);
    }
}