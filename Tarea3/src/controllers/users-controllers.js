const userModel = require('../models/user-model');
const User = require('../models/user-model');
const ResponseStatus = require('../utils/response-status');

class UserController {

    getUsers(req, res){
        userModel.find()
        .then((response) => {
            res.send(response);
        })
        .catch((e) => {
            res.status(ResponseStatus.BAD_REQUEST).send("Something wrong in getUsers");
        });
    }
    
    getUserById(req, res){
        const userId = req.params.id;
        
        userModel.findById(userId)
        .then((response) => {
            res.send(response);
        }).catch((e) => {
            res.status(ResponseStatus.BAD_REQUEST).send("Something wrong in getUsers");
        });
    }
    
    postUser(req, res){
       const data = {
        email: req.body.email,
        password: req.body.password
       }

       userModel.create(data)
       .then((response) => {
            res.send(response);
       })
       .catch((e) => {
            res.status(ResponseStatus.BAD_REQUEST).send("Something wrong postUser");
       });

    }

    putUserId(req, res){
        const user = new User();
        const userId = req.params.id;
        
        user.uploadPut(userId)
        .then((response) => {
            // console.log(userId);
            res.send(response);
        }).catch((e) => {
            
            res.status(ResponseStatus.BAD_REQUEST).send('Somenthing went wrong, catch in putUserId');
            
        });
    }
    
    delete(req, res){
        const userId = req.params.id;

        userModel.deleteOne({_id: userId})
        .then((response) => {
            res.send(response);
        })
        .catch((e) => {
            res.status(ResponseStatus.BAD_REQUEST).send("Something wrong in delete");
        });
    }
}

module.exports = new UserController();