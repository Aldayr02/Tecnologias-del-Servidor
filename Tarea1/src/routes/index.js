const router = require('express').Router();
const usersRoute = require('./../routes/users');



router.use('/users', usersRoute);

router.get('', (req, res) =>{
    res.send('Soy index de routes :)');
    
})

module.exports = router; 