const request = require('supertest');
const app = require("./Modules/Routes/index.js");
const sequelize = require('./Modules/ORM/setup.js');

// async function sequelizeConnect(){
//     try{
//         await sequelize.authenticate();
//         console.log('DB successfully connected !');
//         return true;
//     }catch(error){
//         console.log("DB error is:", error);
//         return false;
//     }
// }

// sequelizeConnect();

// test("It should response the GET method",  async () => {
//     await request(app).get("/viewmc").expect(200);
// });

// test("It should response the GET method",  async () => {
//     await request(app)
//     .get("/")
//     .expect(200);
// });
jest.setTimeout(30000);
describe('healthcare API', () => {
    it('should show all MC', async () => {
        const res = await request(app).get('/viewmc')
        expect(res.statusCode).toEqual(200)
        //expect(res.body).toHaveProperty('users')
    }),    
    it('should show an employee MC', async () => {
        const res = await request(app).get('/viewmc/1')
        expect(res.statusCode).toEqual(200)
        //expect(res.body).toHaveProperty('user')
    }),  
    it('should create a new MC', async () => {
        const res = await request(app)
            .post('/createMC')
            .send({
                fin: 'G4941042Q',
                clinicID: 1,
                mcStartDate: '2022-12-05T16:00:00.000Z',
                   mcEndDate: '2022-12-07T16:00:00.000Z',
                status: 'Not fit for work'
            })
        expect(res.statusCode).toEqual(200)
    }),
    it('should create a new Current Visit', async () => {
        const res = await request(app)
            .post('/createVisitRecord')
            .send({
                clinicID: 1,
                FIN: 'G4941042Q',
                issueMC: true,
                mcID: 1,
                nextOfKinID: 1,
                currentDiagnosis: 'Upper respiratory tract infection'
            })
        expect(res.statusCode).toEqual(200)
    }),
    it('should create a Full Medical Record', async () => {
        const res = await request(app)
            .post('/newrecord')
            .send({
                clinicID: 1,
                FIN: 'G4941042Q',
                medicalHistory: true,
                visitHistory: '2022-12-05T16:00:00.000Z',
                nextOfKinID: 1
            })
        expect(res.statusCode).toEqual(200)
    }),
    it('should update a employee mc status', async () => {
    const res = await request(app)
        .put('/employeerecord/1')
        .send({
            isWorkingToday: true   
        })
    expect(res.statusCode).toEqual(200)
    //expect(res.body).toHaveProperty('user')
})    
    // it('should delete a user', async () => {
    //     const res = await request(app)
    //         .del('/api/users/3')
    //     expect(res.statusCode).toEqual(204)
    // })
})

//const baseUrl = "https://healthcaresoftwaresystem.el.r.appspot.com/"
// const baseUrl = "localhost:3200/"



