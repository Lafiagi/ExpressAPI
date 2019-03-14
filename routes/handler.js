let data_structures = require('../models/db');

data_structures.unread_messages = data_structures.messages.slice(0, data_structures.messages.length);
data_structures.unread_messages.forEach(message => {
	message["status"] = "Unread"
	
});

data_structures.read_messages.forEach(message => {
	message["status"] = "Read"
	
});
module.exports.deleteOne = function(req, res){
	let deleted ="";
data_structures.messages.forEach(element => {
	  if(parseInt(req.params.id) === element.id){
		deleted = data_structures.messages.splice(data_structures.messages.indexOf(element),1)
	res.status(200).json(
	{
		"status" : 200 ,
		"data" : [deleted]
	  })
	}
	});
	res.status(404).json({"Message" : "Not found", "status" : 404})
  }


  module.exports.getSent = function(req, res){
	res.status(200).json(
	{
		"status" : 200 ,
		"data" : data_structures.sent
	  })
  }




  module.exports.getAllMessages = function(req, res) {
	//data_structures.messages.push({createdOn : new Date(), subject : "Hello Dear", message : "Hello this is message number " + data_structures.messages.length, status : "Sent", parentMessageId : data_structures.messages.length + 1,id : 2+ 1,fname : req.body.fname, lname : req.body.lname, email : req.body.email, phone : req.body.phone, password : req.body.password});
	res.status(200).json({"status" : 200,"data": data_structures.messages}
	  )
  }





  module.exports.login = function(req, res){
	data_structures.users.forEach(element => {
			if(req.params.fname === element.id && req.params.password === element.password){

				res.status(200).json({ 
					"data" : [{"token" : "aknajsna-asnj-nsmansm-jsjkajs-ahd64jfhHG7832KFM5"}],
					"status" : 200 })

			}
		res.status(401).json({status : 401, error : "Authentication Failed!"})
	})
}


	module.exports.register = function(req, res){
		data_structures.users.push({id : data_structures.users.length + 1,fname : req.body.fname, lname : req.body.lname, email : req.body.email, phone : req.body.phone, password : req.body.password});
		res.status(200).json({ 
			"data" : [{"token" : "aknajsna-asnj-nsmansm-jsjkajs-uauuaahsi891i981h28981u82"}],
			"status" : 200 }
			)
		}

	module.exports.welcome = function(req, res){
			res.status(200).send("Welcome to EPIC Mail App")
	}

	module.exports.users = function(req, res){
		res.status(200).json(data_structures.users)
}



module.exports.sendMessage = function(req, res){
	data_structures.messages.push(
		{
		"id" : data_structures.messages.length +1 ,
    "​createdOn" : new Date() ,
    "​subject" : req.body.subject ,
    "message": req.body.message ,
    "parentMessageId" : 1,
    "​status" : "Recieved",
    }
	);
	res.status(200).json(data_structures.messages)
}



module.exports.getOneMessage = function(req, res){
data_structures.messages.forEach(message => {
	  if(parseInt(req.params.id) === message.id){
			data_structures.read_messages.push(data_structures.unread_messages.splice(data_structures.unread_messages.indexOf(message),1))
			message["status"] = "Unread"
			res.status(200).json(
			{
				"status" : 200 ,
				"data" : message
				})
			}
	});
	
	res.status(404).json({"Message" : "Not found", "status" : 404})
  }

	module.exports.unread = function(req, res){
		if(data_structures.unread_messages.length > 0){
				res.status(200).json(
					{
						"status" : 200 ,
						"data" : data_structures.unread_messages
						})
					}
			res.status(404).json({"Message" : "No Unread Messages "})
			}
			

module.exports.user = function(req, res){
	data_structures.users.forEach(element => {
			if(parseInt(req.params.id) === element.id){

				res.status(200).json(element)

			}
		res.status(401).json({status : 401, error : "Authentication Failed!"})
	})
}



module.exports.read = function(req, res){
	if(data_structures.read_messages.length > 0){
				res.status(200).json(
					{
						"status" : 200 ,
						"data" : data_structures.read_messages
						})
					}
			res.status(404).json({"Message" : "No read Messages "})
}





module.exports.oneRead = function(req, res){
	data_structures.read_messages.forEach(element => {
			if(parseInt(req.params.id) === element.id){
				res.status(200).json(
				{
					"status" : 200 ,
					"data" : element
					})
				}
		});
		res.status(404).json({status: 404, "error" : "This Message doesn't exist"})
	}




	module.exports.oneUnread= function(req, res){
		data_structures.unread_messages.forEach(message => {
				if(parseInt(req.params.id) === message.id){
					message["status"] = "Unread"
					res.status(200).json(
					{
						"status" : 200 ,
						"data" : message
						})
					}
			});
			res.status(404).json({status: 404, "error" : "This Message doesn't exist"})
		}