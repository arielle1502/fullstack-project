const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const InstructionGuideController = require('./controllers/InstructionGuideController')

module.exports = (app) => {

    // so the user enters in data, the first bit of middleware that runs is the policy, if that doesnt work it will spit an error, if its doesnt spit an error then it will move to the next middleware: authentication controller
    app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);

    app.post('/login', 
    AuthenticationController.login);

    app.get('/instructionGuides', InstructionGuideController.getInstructionGuides)
    app.post('/instructionGuides', InstructionGuideController.postInstructionGuides)
    app.get('/instructionGuides/:instructionGuideId', InstructionGuideController.getInstructionGuideById)
    app.put('/instructionGuides/:instructionGuideId', InstructionGuideController.putInstructionGuideById)
    
}