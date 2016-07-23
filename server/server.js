/**
 * Module dependencies.
 */
var express = require('express')
   , routes = require('./routes/index')
   , recipeApi = require('./routes/recipeApi')
   , appUserApi = require('./routes/appUserApi')
   , categoryApi = require('./routes/categoryApi')
   , ingredientApi = require('./routes/ingredientApi')
   , DB = require('./accessDb/mainADB')
   , bodyParser = require('body-parser')
   , path = require('path');
 // , protectJSON = require('./lib/protectJSON');

var app = module.exports = express();

// Configuration

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//let the server permission to use this files
app.use(express.static(path.join(__dirname , '../public')));

// app.use(express.methodOverride());
//app.use(app.router);

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

//AppUserApi
app.get('/api/dataservice/GetAppUsers', appUserApi.getAllAppUsers);
app.get('/api/dataservice/GetAppUser/:email/:password', appUserApi.getAppUser);
app.post('/api/dataservice/PostAppUser', appUserApi.createAppUser);
app.put('/api/dataservice/EditAppUser', appUserApi.editAppUser);
app.delete('/api/dataservice/DeleteAppUser/:email', appUserApi.deleteAppUser);

//Category
app.get('/api/dataservice/GetAllCategories', categoryApi.getAllCategories);
app.post('/api/dataservice/CreateCategory', categoryApi.createCategory);
app.delete('/api/dataservice/DeleteCategory/:id', categoryApi.deleteCategory);
app.put('/api/dataservice/EditCategory', categoryApi.editCategory);

//Recipe
app.get('/api/dataservice/GetAllRecipes', recipeApi.getAllRecipes);
app.get('/api/dataservice/GetRecipesByAppUser/:email', recipeApi.getRecipesByAppUser);
app.get('/api/dataservice/GetRecipesByCategory/:id', recipeApi.getRecipesByCategory);
app.delete('/api/dataservice/DeleteRecipesByAppUser/:email', recipeApi.deleteRecipesByAppUser); //? get all the recipes number or the user
app.post('/api/dataservice/CreateRecipe', recipeApi.createRecipe);
app.put('/api/dataservice/EditRecipe', recipeApi.editRecipe);
// TODO - add 
// app.put('/api/dataservice/GetRecipe/:id', recipeApi.getRecipe);

//Ingredient
app.get('/api/dataservice/GetIngredientsByAppUser/:email', ingredientApi.getIngredientsByAppUser);
app.post('/api/dataservice/CreateIngredient', ingredientApi.createIngredient);
app.put('/api/dataservice/EditIngredient', ingredientApi.editIngredient);
app.delete('/api/dataservice/DeleteIngredientsByAppUser/:email', ingredientApi.deleteIngredientsByAppUser); //? get all the recipes number or the user
app.delete('/api/dataservice/DeleteIngredient/:id', ingredientApi.deleteIngredient);

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
app.all('/*', function(request, response){
 console.log("serverrr    ");// + __dirname + '/../public/index.html');
  //response.sendFile(path.resolve('../public/index.html'));
    response.sendFile(path.join(__dirname , '../public/index.html'));
});
