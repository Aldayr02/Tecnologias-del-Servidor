const User = require('./../models/user-model');
const ResponseStatus = require('./../utils/response-status');

class UserController {

    getUsers(req, res){
        const user = new User();

        user.find()
        .then((response) => {
            // console.log()
            res.send(response);
        })
        .catch((e) => {
            res.status(ResponseStatus.BAD_REQUEST).send('Somenthing went wrong, catch in getUsers');
        });
    }
    
    getUserById(req, res){
        const user = new User();
        const userId = req.params.id;
        
        user.findById(userId)
        .then((response) => {
            res.send(response);
        }).catch((e) => {
            
            res.status(ResponseStatus.BAD_REQUEST).send('Somenthing went wrong, catch in getUsersById');
            
        });
    }
    
    postUser(req, res){
        const user = new User();
        
        user.upload()
        .then((response) => {
            res.status(ResponseStatus.CREATED).send(response);
        }).catch((e) => {
            res.status(ResponseStatus.BAD_REQUEST).send('Somenthing went wrong, catch in postUser');
            
        })
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
        const user = new User()
        const userId = req.params.id;

        user.remove(userId)
        .then((response) => {
            res.send(response);
        }).catch((e) => {
            res.status(ResponseStatus.BAD_REQUEST).send('Somenthing went wrong, catch in delete');
        });
    }
}

module.exports = new UserController();