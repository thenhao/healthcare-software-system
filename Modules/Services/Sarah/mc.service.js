//As a Clinic Assistant, I am able to create a MC for the person by using his FIN
const {Mc} = require('../ORM');

module.exports = {
    //Create function inside object
    create: async(mcId) => {
        //Create mc object
        let result = {
            mcId: null, 
            fin: null, 
            clinicId: null, 
            mcStartDate: null, 
            mcEndDate: null, 
            status: null
        };
    const mc = await Mc.findbyPk(mcId);

    await mc.save();
    mc.data = mc;
    mc.status = 200;
    mc.message = "MC created successfully";

    return mc;
    }
}
module.exports = McService;