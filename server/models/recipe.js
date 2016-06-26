var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var SettingsSchema = new Schema({
    collectionName : {
        type : String, required: true, trim: true, default: 'recipes'
    },
    nextSeqNumber: {
        type: Number, default: 1
    }
});

var RecipeSchema = new Schema({
    title : {
        type : String, required: true, trim: true
    },
    content : {
        type : String, required: true, trim: true
    },
    image : {
        type : String, required: false, trim: true
    },
    likeAmount : {
        type : Number, required: true
    },
    id : {
        type : Number, required: true, unique: true
    },
    categories: [String]//,
   // author: Schema.appUser
});

RecipeSchema.index({ id: 1, type: 1 }); // schema level

// I make sure this is the last pre-save middleware (just in case)
var Settings = mongoose.model('settings', SettingsSchema);

RecipeSchema.pre('save', function(next) {
    var doc = this;
    // Calculate the next id on new Customers only.
    if (this.isNew) {
        Settings.findOneAndUpdate( {"collectionName": "recipes"}, { $inc: { nextSeqNumber: 1 } }, function (err, settings) {
            if (err) next(err);
            doc.id = settings.nextSeqNumber - 1; // substract 1 because I need the 'current' sequence number, not the next
            next();
        });
    } else {
        next();
    }
});

exports.RecipeSchema = RecipeSchema;
module.exports = mongoose.model('Recipe', RecipeSchema);
