//As a Clinic Assistant, I am able to create a MC for the person by using his FIN
//Connect to database
const db = require('../ORM/mc.model');
const MC = db.ORM.mc.model;

//Import McService
const mcService = require('../Services/Sarah/mc.service');


//For post/mc/create request
class McController {
    async create(req, res) {
        
        const {mcID, fin, clinicID, mcStartDate, mcEndDate, status} = req.body;
        if (!mcID || !fin || !clinicID || !mcStartDate || !mcEndDate || !status) {
            return res.status(400).send({{message: "Incorrect request data"})
        }

        try {
            let newMC = await MC.create({
                mcID, fin, clinicID, mcStartDate, mcEndDate, status
            });
            return res.send(newMC);
        } catch(error) {
            res.status(500).send({message: "An error has occurred."})
        }

    }
}

module.exports = McController;

/*
//Validation
        if (typeof req.body.mcID !== "number" ||
            typeof req.body.fin !== "string" ||
            typeof req.body.clinicID !== "number" ||
            typeof req.body.mcStartDate !== "date" ||
            typeof req.body.mcEndDate !== "date" ||
            typeof req.body.status !== "string") 
            {
                res.status(400).json({message: "Incorrect request data"})
            }


const mc = await mcService.create(
    req.body.mcID, 
    req.body.fin, 
    req.body.clinicID, 
    req.body.mcStartDate, 
    req.body.mcEndDate, 
    req.body.status
)
res.status(result.status)

//Return mc from service
return res.json({data:result.data})

module.exports = {
    create(req, res) {
        return MC.create({
            mcID : req.body.mcID, 
            fin : req.body.fin, 
            clinicID : req.body.clinicID, 
            mcStartDate : req.body.mcStartDate, 
            mcEndDate : req.body.mcEndDate, 
            status : req.body.status
        })
        .then((MC) => res.status(201).send(MC))
        .catch((error) => res.status(400).send(error))
    }
}
*/