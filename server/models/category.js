var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectCounter = require('./objectCounter');


var CategorySchema = new Schema({
    name : {
        type : String, required: true, trim: true, unique: true 
    },
    id : {
        type : Number, index: { unique: true }
    },
    image : {
        // data : Buffer, ContentType: String
        type: String, required: true
    }//,
    // recipes: [
    //     {type: Schema.ObjectId , ref: 'Recipe'}
    // ]
});

// CategorySchema.pre('save', function(next) {
//     var doc = this;
//     // Calculate the next id on new Customers only.
//     if (this.isNew) {
//         ObjectCounter.findOneAndUpdate( {collectionName: "categories"}, { $inc: { nextSeqNumber: 1 } }, function (err, settings) {
//             if (err) next(err);
//             doc.id = settings.nextSeqNumber; // substract 1 because I need the 'current' sequence number, not the next
//             next();
//         });
//     } else {
//         next();
//     }
// });
var count;

exports.updateCounter = function () {
    ObjectCounter.findOneAndUpdate( {collectionName: "categories"}, { $inc: { nextSeqNumber: 1 } }, function (err, retCount) {count = retCount.nextSeqNumber})
};

exports.counter = function (callback) {
    if(count == undefined) {
        ObjectCounter.find({"collectionName": "categories"}, {}, function(err, settings) {
            count = settings[0].nextSeqNumber;
            callback(err, count);
        });
    }
    else
    {
        callback(null, count);
    }
};


//CategorySchema.index({ name: 1, type: 1 }); // schema level
// //not include the objects that been deleted
// CategorySchema.pre('remove', function(next) {
//     this.model('Recipe').remove({ recipes: this.id }, next);
// });

//exports.CategorySchema = CategorySchema;
exports.schema = mongoose.model('Category', CategorySchema);
