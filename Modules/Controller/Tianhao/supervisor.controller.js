//import the service
const supervisorService = require("../../Services/Tianhao/supervisor.service.js");

class SupervisorController{
    //for taking the post /protected/onboard request
    //for onboarding,we wawnt our json to be:
    //{"vehicleId":1, "driveraId":1}
    // onboard(req,res,next){
    //     if(typeof req.body.driverId !== "number" || typeof req.body.vehicleId !== "number"){
    //         res.status(400);
    //         return res.json({message:"Incorrect request data"});
    //     }

    //     return res.json({message:"request received"});
    // }

    async findSpecificEmployee(req, res, next){
        console.log(typeof req.params.employeeID);
        if(typeof parseInt(req.params.employeeID) !== "number"){
            res.status(400);
            return res.json({message:"Incorrect request data"})
        }
        //use the service layer
        const result = await supervisorService.findSpecificEmployee(req.params.employeeID);
        res.status(result.status);

        //return the result from the service
        return res.json({data:result.data, status: result.status, message:result.message});
    }

    async findAll(req, res, next){
        const result = await supervisorService.findAll();
        res.status(result.status);
        return res.json({data:result.data, status: result.status, message:result.message});
    }
}

module.exports = SupervisorController;