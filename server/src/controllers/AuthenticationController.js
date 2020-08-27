const {User} = require('../models');
const { response } = require('express');

module.exports = {
async register(req, res){
    try{
      // create() will enter data into a database
     const user = await User.create(req.body)
     res.send(user.toJSON())
    }catch (err){
      res.status(400).send({
        error:"This email account is already in use"
      })
      
    }
  },
  async login(req, res){
    try{
     const {email, password} = req.body;
    //  go in the db and look for an email that matches that email store inside of user
     const user = await User.findOne({
       where: {
         email: email
       }
     })
    //  if the user doesnt exist in db then we send back a message
      if(!user){
        res.status(401).send(
          {error: "The login information is incorrect"}
        )
      }
      // if the password equals the pw in the db then isPasswordvalid will be set to true, adn if it doesnt match the isPasswrodValid will be set to false
      const isPasswordValid = password == user.password
      if(!isPasswordValid){
        res.status(401).send(
          {error: "The login information is incorrect"}
        )
      }
      // if it is all correct then well take the data in the database, convert it to json, store it in a variable and send it back to them
      const userJSON = user.toJSON();
      res.send({
        user: userJSON
      })

    }catch (err){
      res.status(400).send({
        error:"This email account is already in use"
      })
      
    }
  }
}