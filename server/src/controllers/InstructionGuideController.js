//Imports
const {InstructionGuide} = require('../models') //Sequelize Model for User
const {Op} = require('../models')

module.exports = {
//Routes
//Gets All Instruction Guides from the database
  async getInstructionGuides (req, res) {
    try{
    let instructionGuides = null;
    const search = req.query.search

    if(search){
      instructionGuides = await InstructionGuide.findAll({
        // this is a sequelize query string; unique to sequelize
        where: {
          [Op.or]: [
          { 'title': {[Op.like]: `%${search}%` } },
           { 'category': {[Op.like]: `%${search}%` } }, 
           { 'author': {[Op.like]: `%${search}%` } }, 
           { 'equipment': {[Op.like]: `%${search}%` } }
          ]
        }
      })
    }else {
      instructionGuides = await InstructionGuide.findAll({limit:10});
    }
    res.send(instructionGuides);
  } catch (err) {
    res.status(500).send({
       error: 'An error has occurred trying to get an Instruction Guides'
    })
  }
  },
async postInstructionGuides (req, res) {
  try {
        const instructionGuide = await InstructionGuide.create(req.body)
        res.send(instructionGuide);
  } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'An error has occurred trying to post a new Instruction Guide'
        })
    }
  },
  async getInstructionGuideById(req, res){
    try {
      const instructionGuide = await InstructionGuide.findOne({
        where: {id: req.params.instructionGuideId}
    })
      res.send(instructionGuide);
    } catch (err) {
      res.status(500).send({
         error: 'An error has occurred trying to get an Instruction Guides'
      })
    }
  },
  async putInstructionGuideById(req, res){
    try {
      const instructionGuide = await InstructionGuide.update(req.body, {
        where: {id: req.params.instructionGuideId}
    })
      res.send(instructionGuide);
    } catch (err) {
      res.status(500).send({
         error: 'An error has occurred trying to update an Instruction Guides'
      })
    }
  }
}