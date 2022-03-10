const request = require('supertest');
const app = require("../Modules/Routes/index.js");
const sequelize = require('../Modules/ORM/setup.js');
//ORM/Databse
const Clinic = require('../Modules/ORM/clinic.model');
const Company = require('../Modules/ORM/company.model');
const EmployeeRecord = require('../Modules/ORM/empRecord.model');
const MC = require('../Modules/ORM/mc.model');
const CurrentVisit = require('../Modules/ORM/currentVisit.model');
const Person = require('../Modules/ORM/person.model');
const NextOfKin = require("../Modules/ORM/nextOfKin.model");
const FullMedicalRecord = require("../Modules/ORM/fullMedicalRecord.model");
const User = require("../Modules/ORM/user.model.js");


(async () => {
     await FullMedicalRecord.destroy({where: {}})
     await CurrentVisit.destroy({where: {}})
     await MC.destroy({ where: {} })
 })();

let clinicToken = '';
let clinicFakeToken = "abc";
beforeAll(async () => {
    const response = await request(app).post('/login').send({
        username:"def",
        password:"a1b2c3"
    })
    clinicToken = response.text;
    console.log(clinicToken);
});

let supervisorToken = '';
let supFakeToken = "abc";
beforeAll(async () => {
    const response = await request(app).post('/login').send({
        username:"abc",
        password:"a1b2c3"
    })
    supervisorToken = response.text;
});

let mcReg = 0;

jest.setTimeout(30000);

describe('healthcare API', () => {
    it('login with token, supervisor token, wrong username should return status 404', async () => {
        const res = await request(app).post('/login').send({
            username:"ab",
            password:"a1b2c3"
        })
        expect(res.statusCode).toEqual(404)
    }),
    it('login with token, clinic token, wrong username should return status 404', async () => {
        const res = await request(app).post('/login').send({
            username:"de",
            password:"a1b2c3"
        })
        expect(res.statusCode).toEqual(404)
    }),
    it('login with token, supervisor token, wrong password should return status 404', async () => {
        const res = await request(app).post('/login').send({
            username:"abc",
            password:"a12c3"
        })
        expect(res.statusCode).toEqual(401)
    }),
    it('login with token, clinic token, wrong credentials should return status 404', async () => {
        const res = await request(app).post('/login').send({
            username:"def",
            password:"a12c3"
        })
        expect(res.statusCode).toEqual(401)
    }),
    it('login with token, supervisor token, should return status 200', async () => {
        const res = await request(app).post('/login').send({
            username:"abc",
            password:"a1b2c3"
        })
        expect(res.statusCode).toEqual(200)
    }),
    it('login with token, clinic token, should return status 200', async () => {
        const res = await request(app).post('/login').send({
            username:"def",
            password:"a1b2c3"
        })
        expect(res.statusCode).toEqual(200)
    }),
    it('view mc test, wrong url, should return status 404', async () => {
        const res = await request(app)
        .get('/viewm')
        .set('Authorization', `Bearer ${supervisorToken}`);
        expect(res.statusCode).toEqual(404)
    }),
    it('view mc test, correct url, wrong token should return status 404', async () => {
        const res = await request(app)
        .get('/viewmc')
        .set('Authorization', `Bearer ${supFakeToken}`);
        expect(res.statusCode).toEqual(401)
    }),
    it('view mc test, should show all MC, should return status 200', async () => {
        const res = await request(app)
        .get('/viewmc')
        .set('Authorization', `Bearer ${supervisorToken}`);
        expect(res.statusCode).toEqual(200)
    }),
    it('view mc for an employee test, should show all MC related to specific employee, correct token,should return status 404', async () => {
        const res = await request(app)
        .get('/viewmc/0')
        .set('Authorization', `Bearer ${supervisorToken}`);
        expect(res.statusCode).toEqual(404)
    }), 
    it('view mc for an employee test, should show all MC related to specific employee, correct token, no id but / behind, should return status 200', async () => {
        const res = await request(app)
        .get('/viewmc/')
        .set('Authorization', `Bearer ${supervisorToken}`);
        expect(res.statusCode).toEqual(200)
    }),   
    it('view mc for an employee test, should show all MC related to specific employee, correct token, correct id , should return status 200', async () => {
        const res = await request(app)
        .get('/viewmc/1')
        .set('Authorization', `Bearer ${supervisorToken}`);
        expect(res.statusCode).toEqual(200)
    }),
    it('view mc for an employee test, should show all MC related to specific employee, wrong token, correct id , should return status 404', async () => {
        const res = await request(app)
        .get('/viewmc/1')
        .set('Authorization', `Bearer ${supFakeToken}`);
        expect(res.statusCode).toEqual(401)
    }),
    it('Create MC test, should create a new MC, wrong token, should return status 401', async () => {
        const res = await request(app)
            .post('/createMC')
            .send({
                fin: 'G4941042Q',
                clinicID: 1,
                mcStartDate: '2022-12-05T16:00:00.000Z',
                mcEndDate: '2022-12-07T16:00:00.000Z',
                status: 'Not fit for work'
            }).set('Authorization', `Bearer ${clinicFakeToken}`);
        expect(res.statusCode).toEqual(401)
     }),
    it('Create MC test, should create a new MC, correct token, should return status 200', async () => {
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
        mcReg = res.body.data.mcId;
     }),
     it('Create current visit test,wrong token, should return status 401', async () => {
        const res = await request(app)
            .post('/createVisitRecord')
            .send({
                clinicID: 1,
                fin: 'G4941042Q',
                issueMC: true,
                mcID: mcReg,
                nextOfKinID: 1,
                currentDiagnosis: 'Upper respiratory tract infection'
            }).set('Authorization', `Bearer ${clinicFakeToken}`);
        expect(res.statusCode).toEqual(401)
     }),
     it('Create current visit test,correct token, should return status 200', async () => {
        const res = await request(app)
            .post('/createVisitRecord')
            .send({
                clinicID: 1,
                fin: 'G4941042Q',
                issueMC: true,
                mcID: mcReg,
                nextOfKinID: 1,
                currentDiagnosis: 'Upper respiratory tract infection'
            }).set('Authorization', `Bearer ${clinicToken}`);
        expect(res.statusCode).toEqual(200)
     }),
     it('Create a full medical record test,wrong token, should return status 401', async () => {
        const res = await request(app)
            .post('/newrecord')
            .send({
                clinicID: 1,
                FIN: 'G4941042Q',
                medicalHistory: true,
                visitHistory: '2022-12-05T16:00:00.000Z',
                nextOfKinID: 1
            }).set('Authorization', `Bearer ${clinicFakeToken}`);
        expect(res.statusCode).toEqual(401)
    }), 
    it('Create a full medical record test,correct token, should return status 200', async () => {
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
    it('Update a employee mc status test, wrong token, should return status 401', async () => {
        const res = await request(app)
            .put('/EmployeeWorkStatus')
            .send({
                isWorkingToday:true,
                fin:"G4941042Q",
                mcStartDate:"2022-12-05T16:00:00.000Z"
             }).set('Authorization', `Bearer ${supFakeToken}`);
        expect(res.statusCode).toEqual(401)
    }),
    it('Update a employee mc status test, correct token, should return status 200', async () => {
    const res = await request(app)
        .put('/EmployeeWorkStatus')
        .send({
            isWorkingToday:true,
            fin:"G4941042Q",
            mcStartDate:"2022-12-05T16:00:00.000Z"
         }).set('Authorization', `Bearer ${supervisorToken}`);
    expect(res.statusCode).toEqual(200)
    })
  
    // it('should delete a user', async () => {
    //     const res = await request(app)
    //         .del('/api/users/3')
    //     expect(res.statusCode).toEqual(204)
    // })
 })




