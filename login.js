const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');


const bodyParser = require('body-parser');
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nodelogin'
});
connection.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database Connected!');
}); 

const app = express();

app.use(session({
	secret: 'secretpass',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'styles')));
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});
app.get('/dashboard', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/dashboard.js'));
});
app.get('/MyDashboard', function(request, response) {
	// Render login template
	response.render(path.join(__dirname + '/MyDashboard.ejs'), {name: request.session.username});
});

app.get('/Home', function(request, response) {
	// Render login template
	response.render(path.join(__dirname + '/Home.ejs'), {name: request.session.username});
});
app.get('/MyClassroom', function(request, response) {
	// Render login template

	response.render(path.join(__dirname + '/MyClassroom.ejs'), {name: request.session.username, id: request.session.student_id, section: request.session.section, marks: request.session.marks, grade: request.session.grade});
});
app.get('/Reports', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/Reports.html'));
});
app.get('/StudentDatabase', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/StudentDatabase.html'));
});

app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	let student_id = request.body.student_id;
	let section = request.body.section;
	let marks = request.body.marks;
	let grade = request.body.grade;
	let email = request.body.email;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (error) throw error;
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				
				// Redirect to home page
				response.redirect('/Home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}	
			response.end();
		});
		connection.query('SELECT subject_eng.student_id, subject_eng.section ,subject_eng.marks, subject_eng.Grade FROM subject_eng INNER JOIN accounts ON subject_eng.id = accounts.id', function(error, results, fields){
			if (error) throw error;
			
				request.session.student_id = results[0].student_id;
				request.session.section= results[0].section;
				request.session.marks= results[0].marks;
				request.session.grade= results[0].Grade;
			
				console.log(request.session.student_id, request.session.section, request.session.marks)


		});		
		
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});


//CRUD



app.listen(4000);