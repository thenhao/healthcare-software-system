const request = require('supertest');
const app = require("./Modules/Routes/index.js");
const sequelize = require('./Modules/ORM/setup.js');

let clinicToken = '';
beforeAll(async () => {
    const response = await request(app).post('/login').send({
        username:"def",
        password:"a1b2c3"
    })
    clinicToken = response.text;
    console.log(clinicToken);
});

let supervisorToken = '';
beforeAll(async () => {
    const response = await request(app).post('/login').send({
        username:"abc",
        password:"a1b2c3"
    })
    supervisorToken = response.text;
});

jest.setTimeout(30000);

describe('healthcare API', () => {
    it('should show all MC', async () => {
        const res = await request(app)
        .get('/viewmc')
        .set('Authorization', `Bearer ${supervisorToken}`);
        expect(res.statusCode).toEqual(200)
    }),    
    it('should show an employee MC', async () => {
        const res = await request(app)
        .get('/viewmc/1')
        .set('Authorization', `Bearer ${supervisorToken}`);
        expect(res.statusCode).toEqual(200)
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
            }).set('Authorization', `Bearer ${clinicToken}`);
        expect(res.statusCode).toEqual(200)
     }),
    it('should create a new Current Visit', async () => {
        const res = await request(app)
            .post('/createVisitRecord')
            .send({
                clinicID: 1,
                fin: 'G4941042Q',
                issueMC: true,
                mcID: 1,
                nextOfKinID: 1,
                currentDiagnosis: 'Upper respiratory tract infection'
            }).set('Authorization', `Bearer ${clinicToken}`);
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
            }).set('Authorization', `Bearer ${clinicToken}`);
        expect(res.statusCode).toEqual(200)
    }),
    it('should update a employee mc status', async () => {
    const res = await request(app)
        .put('/EmployeeWorkStatus')
        .send({
            isWorkingToday:true,
            fin:"G4941042Q",
            mcStartDate:"2022-12-05T16:00:00.000Z"
         }).set('Authorization', `Bearer ${supervisorToken}`);
    expect(res.statusCode).toEqual(200)
    //expect(res.body).toHaveProperty('user')
})    
    // it('should delete a user', async () => {
    //     const res = await request(app)
    //         .del('/api/users/3')
    //     expect(res.statusCode).toEqual(204)
    // })
})




