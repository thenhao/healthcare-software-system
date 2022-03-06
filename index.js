const Clinic = require('./Modules/ORM/clinic.model');
const Company = require('./Modules/ORM/company.model');
const EmployeeRecord = require('./Modules/ORM/empRecord.model');
const MC = require('./Modules/ORM/mc.model');
const MedRecord = require('./Modules/ORM/medRecord.model');
const Person = require('./Modules/ORM/person.model');

Clinic.sync();
Company.sync();
EmployeeRecord.sync();
MC.sync();
MedRecord.sync();
Person.sync();

const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json("Test");
})

//routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});