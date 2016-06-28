/**
 * Module dependencies.
 */
var express = require('express')
   , routes = require('./routes/index')
   , api = require('./routes/api')
   , DB = require('./accessDB')//.AccessDB;
   , bodyParser = require('body-parser');

 // , protectJSON = require('./lib/protectJSON');

var app = module.exports = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//let the server permission to use this files
app.use(express.static(__dirname + '/../public'));


//app.use(express.methodOverride());
//app.use(app.router);
// var DB = require('./accessDB');

// Configuration

//app.configure(function(){
  // app.use(protectJSON);
  // app.set('views', __dirname + '/views');
  // app.set('view engine', 'jade');
  // app.use(express.cookieParser()); //*
  // app.use(express.session({ secret: 'gopalapuram' })); //*
 // app.use(express.bodyParser());
  // app.use(express.methodOverride());
  // app.use(express.static(__dirname + '/../'));
  // app.use(app.router);
// });

var conn = 'mongodb://localhost:27017/recipeSite';
var db;
db = new DB.startup(conn);
//
// app.configure('development', function(){
//   app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
// });
//
// app.configure('production', function(){
//   app.use(express.errorHandler());
// });
//
// function csrf(req, res, next) {
//   res.locals.token = req.session._csrf;
//   next();
// }
//
// Routes

// app.get('/', routes.index);

// JSON API

app.get('/api/dataservice/AppUsers', api.appUsers);
app.get('/api/dataservice/AppUser/:email', api.appUser);
app.post('/api/dataservice/PostAppUser', api.addAppUser);
app.put('/api/dataservice/EditAppUser/:email', api.editAppUser);
app.delete('/api/dataservice/DeleteAppUser/:email', api.deleteAppUser);
//
// app.get('/api/dataservice/States', api.states);
//
// app.get('/api/dataservice/CustomersSummary', api.customersSummary);
// app.get('/api/dataservice/CustomerById/:id', api.customer);
// app.get('/api/dataservice/CheckUnique/:email', api.checkemail);


// redirect all others to the index (HTML5 history)
// app.get('*', routes.index);

// Start server

app.listen(8080, function(){
  console.log("CustMgr Express server listening on port %d in %s mode");//, this.address().port, app.settings.env);
});



// app.get('/', function(request, response){
//   response.sendFile('../index.html');
//
// });
app.get('/', function(request, response){
  response.sendFile(__dirname + '/../public/index.html');

});


// db = db.getSiblingDB('recipeSite')

// db.appUsers.remove({});
// var c = {'userName': "Gal Cohen"// nameGenderHost[0]
//   , 'password': "1234"// nameGenderHost[1]
//   , 'email': "galcohen92@gmail.com"//nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3]
//   , 'isAdmin': true// addresses[i]
//   , 'gender': "M"//cityState[0]
//
// };
//
// db.appUsers.insert(c);