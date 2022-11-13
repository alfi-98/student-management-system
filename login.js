const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nodelogin'
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



app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});
app.get('/MyDashboard', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/MyDashboard.html'));
});

app.get('/Home', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/Home.html'));
});
app.get('/MyClassroom', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/MyClassroom.html'));
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
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});


app.listen(4000);