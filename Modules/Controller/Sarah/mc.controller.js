//As a Clinic Assistant, I am able to create a MC for the person by using his FIN

//Import McService
const mcService = require('../../Services/Sarah/mc.service.js');

//For post request
class McController {
    async createMC(req, res) {
        
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
    }
}

module.exports = McController;