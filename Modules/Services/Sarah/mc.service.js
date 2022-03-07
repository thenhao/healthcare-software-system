//As a Clinic Assistant, I am able to create a MC for the person by using his FIN
const {MC} = require('../ORM');

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
    const MC = await MC.findbyPk(mcId);

    await MC.save();
    MC.data = MC;
    MC.status = 200;
    MC.message = "MC created successfully";

    return MC;
    }
}
module.exports = McService;