//As a Clinic Assistant, I am able to create a MC for the person by using his FIN
const {Mc} = require('../Models');

module.exports = {
    //Create function inside object
    create: async(mcId) => {
        //Create mc object
        let mc = {
            mcId: null, 
            fin: "", 
            clinicId: null, 
            mcStartDate: "", 
            mcEndDate: "", 
            status: ""
        };

    await mc.save();
    mc.data = mc;
    mc.status = 200;
    mc.message = "MC created successfully";

    return mc;
    }
}
module.exports = McService;