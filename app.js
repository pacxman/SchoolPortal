const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const fileUpload = require('express-fileupload')
const mysql = require('mysql')
var uuid = require('uuid')
const routes = require('./routes')
var nodemailer = require('nodemailer');
var request = require('request');
app.use(express.static("./public"));
app.set('view engine', 'ejs')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(fileUpload());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bahati",
    database: "student_portal"
});
db.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
})

global.db = db;
global.nodemailer = nodemailer;
global.request = request;
global.app = app;

app.get('/', routes.portal);
app.get('/portal/', routes.portal);
app.post('/portal/', routes.portal);
app.post('/', routes.portal);
app.get('/upload/', routes.upload);
app.post('/mailer/', routes.mailer);
app.post('/apply', routes.apply);
app.get('/document', routes.document);
app.get('/student/:id', routes.student);
app.get('/admin/view/users/:admin', routes.getUsers);
app.get('/admin/view/users/', routes.getUsers);
app.get('/admin/view/logs', routes.logs);
app.post('/admin/users/manage', routes.alterusers);
app.post('/admin/cards/', routes.scards);
app.post('/altering/app/', routes.alterapp);
app.post('/altering/dropout/', routes.alterDrop);
app.post('/altering/card/', routes.altercard);
app.post('/drop', routes.drop);
app.get('/drop', routes.drop);
app.get('/admin/apps', (req, res)=>{
    res.render('applications');
});
app.get('/admin/drops', (req, res)=>{
    res.render('drops');
});
app.get('/admin/studentcards', (req, res)=>{
    res.render('cards');
});
app.post('/admin/view/apps/', routes.appsReview);
app.post('/applications/:cat', routes.applications);
app.post('/dropouts/:act', routes.getDrops);
app.post('/admin/view/drop', routes.getDrop);
app.post('/request/studentcard/', routes.studentcard);
app.post('/course/assessment', routes.assessment);
app.post('/appli/', routes.appli);
app.post('/getcode/', routes.getcode);
app.post('/app/', routes.app);
app.get('/apply', (req, res) => {
    res.render('index');
});
app.get('/appli', (req, res) => {
    res.render('app');
});
app.get('/dropout', (req, res) => {
    res.render('drop');
});
app.get('*', (req, res) => {
    res.status(404).render('404');
});

const PORT = process.env.PORT || 9090;
sr = app.listen(PORT, "192.168.1.68", () => console.log(`Server is running at port ${PORT}`));

global.sr = sr;