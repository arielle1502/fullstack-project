const {User} = require('../models');
const { response } = require('express');

module.exports = {
async register(req, res){
    try{
      // create will enter data into a database
     const user = await User.create(req.body)
     res.send(user.toJSON())
    }catch (err){
      res.status(400).send({
        error:"This email account is already in use"
      })
      
    }
  }
}