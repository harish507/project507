var express = require('express');
var app= express();
var router = express.Router();
var bcrypt = require('bcrypt');
var cors = require('cors');
var mongoose = require('mongoose');	
var path=require('path');
var bodyParser = require('body-parser');
/* GET home page. */
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


router.get('/login',function(req,res) {
	res.sendFile(path.resolve('views/login.html'));
});
/*router.get('/reg',function(req,res) {
	res.sendFile(path.resolve('views/reg.html'));
});*/

/*router.get('/delete',function(req,res) {
	res.sendFile(path.resolve('views/delete.html'));
});*/


/*var mss = mongoose.model('cafedata',{
    username : String,
	password : String,
	email : String,
	phone: String,
	role: String
});
*/
//schema
const UserSchema = mongoose.Schema ({
  username: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
    role: {
    type: String,
    required: true
  }
});

const cafe = module.exports = mongoose.model('cafe', UserSchema);

module.exports.getUserById = function(id, callback) {
  cafe.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
  const query = {username: username}
  cafe.findOne(query, callback);
}
/*router.post('/reg', (req, res, next) => {
  //res.setHeader('Content-Type', 'text/html');
  let newUser = new cafedata ({
    username: req.body.username,
	password: req.body.password,
    email: req.body.email,
    phone: req.body.phone,
    role: req.body.role
  });
  console.log(newUser);
    cafedata.addUser(newUser, (err, user) => {
    if(err) {
      console.log({success: false, msg: 'Failed to register user'});
      res.json({success: false, msg: 'Failed to register user'});
      res.json({success: false, msg: 'Failed to register user'});
    } else {
            console.log({success: true, msg: 'registered in User and Alluser Collection'});
            res.json({success: true, msg: 'registered in User and Alluser Collection'});
          }
        });
  });*/
router.post('/reg',function(req,res){
	 
	
	//var salt = bcrypt.genSaltSync(10);
//var hash = bcrypt.hashSync(req.body.pwd, salt);
// Store hash in your password DB.


	var newUser={
	username : req.body.username,
	password  :req.body.password,
	email : req.body.email,
	phone : req.body.phone,
	role : "user"

	}
    cafe.create(newUser,function(err,data){
		  /* if(err){
			   console.log('error in saving user data: '+err);
			   throw err;
			   res.send('failed');
		   }
		   if(data){
			   console.log(data);
			   console.log('user Registration Successfull');
		   res.send('success');}*/
		   if(err) {
         console.log({success: false, msg: 'Failed to register user'});
         res.json({success: false, msg: 'Failed to register user'});
    } else {
            console.log({success: true, msg: 'registered in User and Alluser Collection'});
            res.json({'status':'your registration successfull'});
          }
		   
		   });
  
});

router.post('/del',function(req,res,next){
	var obj ={

		username : req.body.username
	}
	cafe.remove({ username: obj.username}, function(err, user) {
		
        if(err) 
		{
			throw err;
            return res.json({success: false, msg: 'Error Occured While removing'});
        }
		else if(user==null||user==[])
		{
			return res.json({success: false,msg:'user name not valid' });
		}
		else
			{
				return res.json({success: true, msg: 'deleted successfully'});
			}
		  
});

    
	console.log(obj.username);
});






//login authentication


	
router.post('/users',function(req,res) {
  var obj={
	   username : req.body.username,
	   password : req.body.password
	}
      
	 cafe.findOne({username: req.body.username},function(err,data){
	     console.log(data);
		if(err) 
		{
			throw err;
            return res.json({success: false, msg: 'Error Occured While Login'});
        }
		else if(data==null||data==[])
		{
			return res.json({success: false,msg:'user name not valid' });
		}
		        /*else if(data.role=="user")
		{
         return res.json({success: true});		
		}*/	
		else
		{
			if(req.body.password==data.password){
				//return res.json({success:true, msg: 'login success'});
				console.log(obj.role);
				if(data.role=="admin"){
				  return res.json({success: true,role:"admin", msg: 'login success'});
				 }
				else if(data.role=="user")
				{	
				return res.json({success: true,role:"user", msg: 'login success'});
				}
				}
		    else
			{
				return res.json({success: false, msg: 'Wrong Password'});
			}			
		}
      });
});

router.get('/user', (req, res, next) => {
  cafe.find({},function(err,userdata){
    if(err)
    {
      console.log(err);
    }
    else{
    console.log(userdata);
    res.json(userdata);
  }
  });
});
// Authenticate
/*router.post('/user', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  cafe.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    /*cafe.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
		else{
        res.json({
          success: true,
          token: 'Bearer '+token,
          user: 
          {
            username: user.username,
            password: user.password
          }
        })
      } /*else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });*/


















	
module.exports = router;
