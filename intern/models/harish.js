 var mongoose = require('mongoose');
   
   
 var mss = mongoose.model('mss1',{
    username : String,
	password : String
	});
	
module.exports=mss;