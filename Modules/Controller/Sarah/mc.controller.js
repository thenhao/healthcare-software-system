//As a Clinic Assistant, I am able to create a MC for the person by using his FIN
const mcService = require('../Services/Sarah/mc.service');
const db = require('../ORM/mc');

class McController {
    constructor() {
        try {
            const createMc = await Mc.create({
                mcId:req.body.mcId, 
                fin:req.body.fin, 
                clinicId:req.body.clinicId, 
                mcStartDate:req.body.mcStartDate, 
                mcEndDate:req.body.mcEndDate, 
                status:req.body.status,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt
            });
            return res.status(201).send(createMc);
        } catch(error) {
            res.status(500).json("Unable to create MC");
        }
    }
}

module.exports = McController;

/*
router.post('/', async(req, res) => {
    try {
        const newMc = new Mc(req.body)
        await newMc.save();
        res.json({Mc: newMc})
    } catch(error) {
        console.error(error);
    }
}
*/