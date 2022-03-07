//As a Clinic Assistant, I am able to create a MC for the person by using his FIN

//Import McService
const mcService = require('../../Services/Sarah/mc.service.js');

//For post request
class McController {
    async createMC(req, res) {
        
        const {mcID, fin, clinicID, mcStartDate, mcEndDate, status} = req.body;
        if (!mcID || !fin || !clinicID || !mcStartDate || !mcEndDate || !status) {
            return res.status(400).send({message: "Incorrect request data"})
        }

        try {
            let newMC = await mcService.createMC({
                mcID, 
                fin, 
                clinicID, 
                mcStartDate, 
                mcEndDate, 
                status
            });
            return res.json({data:newMC.data, status: newMC.status, message:newMC.message});
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
*/