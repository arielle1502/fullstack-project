const {User} = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config')

function jwtSignUser(user){
  const tokenExpireTime = 60 * 60 * 24 * 7;
  // sign is inside of jwt and takes three arguements, fusrt is the payload(user info) and the second is a secret password, the third is the expiry time
  return jwt.sign(user, config.auth.jwtSecret, {expiresIn: tokenExpireTime});
}

module.exports = {
async register(req, res){
    try{
      // create() will enter data into a database
     const user = await User.create(req.body)
     const userJson = user.toJSON();
     res.send({
       user: userJSON,
       token: jwtSignUser(userJSON)
     })
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
      const isPasswordValid = await user.comparePassword(password)
      if(!isPasswordValid){
        res.status(401).send(
          {error: "The login information is incorrect"}
        )
      }
      // if it is all correct then well take the data in the database, convert it to json, store it in a variable and send it back to them
      const userJSON = user.toJSON();
      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })

    }catch (err){
      res.status(400).send({
        error:"This email account is already in use"
      })
      
    }
  }
}