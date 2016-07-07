var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var AppUserSchema = new Schema({
    userName : {
        type : String, required: true, trim: true
    },
    password : {
        type : String, required: true, trim: true
    },
    email : {
        type : String, required: true, trim: true, index: { unique: true }
    },
    isAdmin: {
        type : Boolean, required: true
    },
    gender : {
        type: String, required: true, trim: true
    }//,
    // recipes: [
    //     {type: Number , ref: 'Recipe'}
    // ],
    // ingredients: [
    //     {type: Schema.ObjectId , ref: 'Ingredient'}
    // ]
});

//AppUserSchema.index({ email: 1, type: 1 }); // schema level
//not include the objects that been deleted
// AppUserSchema.pre('remove', function(next) {
//     this.model('Ingredient').remove({ ingredients: this.id }, next);
//     this.model('Recipe').remove({ recipes: this.id }, next);
// });

exports.AppUserSchema = AppUserSchema;
module.exports = mongoose.model('AppUser', AppUserSchema);
