const routes = require('express').Router();
const db = require('./db-server/dbserver')

routes.get('/staffs',(req, res) => {
    db.getStaffList()
    .then((value)=>{
        res.send(value);
    })
});

routes.get('/staffs/:id',(req, res) => {
    db.getStaffDetails(+req.params["id"])
    .then((value)=>{
        res.send(value);
    })
});

routes.get('/reference',(req, res) => {
    db.getReference()
    .then((value)=>{
        res.send(value);
    })
});

routes.get('/alumni-list',(req, res) => {
    db.getAlumniList()
    .then((value)=>{
        res.send(value);
    })
});

routes.get('/alumni-list/:year',(req, res) => {
    db.getAlumniList(req.params['year'])
    .then((value)=>{
        res.send(value);
    })
});

routes.post('/check-alumni',(req, res) => {
    db.checkAlumni(req.body)
    .then((value)=>{
        res.send(value);
    })
});

routes.post('/register-alumni',(req, res) => {
    db.registerAlumni(req.body)
    .then((value)=>{
        res.send(value);
    })
});

routes.get('/publications-list',(req, res) => {
    db.getPubList()
    .then((value)=>{
        res.send(value);
    })
});

routes.get('/publications-list/:year',(req, res) => {
    db.getPubList(req.params['year'])
    .then((value)=>{
        res.send(value);
    })
});

routes.get('/projects',(req, res) => {
    db.getProjectsList()
    .then((value)=>{
        res.send(value);
    })
});

routes.get('/students/:type',(req, res) => {
    db.getStudentList(req.params['type'], null)
    .then((value)=>{
        res.send(value);
    })
});

routes.get('/students/:type/:year',(req, res) => {
    db.getStudentList(req.params['type'], req.params['year'])
    .then((value)=>{
        res.send(value);
    })
});

module.exports = routes;