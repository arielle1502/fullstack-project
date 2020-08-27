const { DataTypes } = require("sequelize")
const bcrypt = require('bcrypt')

async function hashPassword(user){
  if (!user.changed('password')){
    return;
  }
  // salt adds an extra passwrod to teh end of our passwrods, adn we set teh amount of characters
  const salt = await bcrypt.genSalt(10)
  // hash is housed inside of bcrypt, which will hash the users passwrod and we'll get a long string of numbers and letters and stoer it in hashPasswrodValue
  const hashPasswordValue = await bcrypt.hash(user.password, salt);
  // then we set the password in the user object to the new hashed passwrod
  user.setDataValue('password', hashPasswordValue)

}

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
    
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    },
    {
    hooks: {
    beforeCreate: hashPassword,
    beforeUpdate: hashPassword,
    beforeSave: hashPassword,
    }
    }
    )
    User.prototype.comparePassword = async function (password) {
    try {
    const validPassword = await bcrypt.compare(password, this.password);
    return validPassword;
    } catch (error) {
    console.log("Wrong password");
    }
    }
    
    return User
    
    }