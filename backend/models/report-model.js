const mongo  = require('mongoose');
const uniqueVali = require('mongoose-unique-validator');

const reportSchema = new mongo.Schema({
   email: {type:String, required :true},
   body: {type:String,required:true}
});

module.exports = new mongo.model('Report',reportSchema);