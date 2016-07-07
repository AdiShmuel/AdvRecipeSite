var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectCounter = require('./objectCounter');


var RecipeSchema = new Schema({
    title : {
        type : String, required: true, trim: true
    },
    content : {
        type : String, required: true, trim: true
    },
    image : {
        //type : String, required: false, trim: true
        data : Buffer, ContentType: String//, required: true
    },
    likeAmount : {
        type : Number, required: true
    },
    id : {
        type : Number, index: { unique: true }, required: true
    },
    categories: [
        {type: Number , ref: 'Category'}
    ],
    user:{type: String , ref: 'AppUser'}
});

var count;

exports.updateCounter = function () {
    ObjectCounter.findOneAndUpdate( {collectionName: "recipes"}, { $inc: { nextSeqNumber: 1 } }, function (err, retCount) {count = retCount.nextSeqNumber + 1})
};

exports.counter = function (callback) {
    if(count == undefined) {
        ObjectCounter.find({"collectionName": "recipes"}, {}, function (err, settings) {
            count = settings[0].nextSeqNumber;
            callback(err, count);
        });
    }
    else {
        callback(null, count); //becuase getting always the last count before increase by 1
    }
};


//exports.RecipeSchema = RecipeSchema;
exports.scehma = mongoose.model('Recipe', RecipeSchema);
