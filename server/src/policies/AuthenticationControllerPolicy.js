const Joi = require('joi') // Joi is used to validate user input

module.exports = {
    //Middleware - Joi Validation
    register (req, res, next){
        //Joi schema
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(
              // this says it has to contain letters a to z, numbers 1 to 9 and a max of 32 characters, min of 8
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        });
        //Using Joi schema to validate user data
        // the validate function that is housed within Joi, it takes one paramater: the data thats entered from teh user. validate will cross refernce that data agianst the schema we created above. Either that info will be loaded into "value" or it will spit an error
        const {error, value} = schema.validate(req.body);
        
        //If there is a error
        if(error){
            //Switch statement checks what error occurred and send back a message to the user about the error
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `${error}The password failed to match the requirements:
                        <br>
                        1. It must contain ONLY the following characters: lowercase, uppercase, numbers
                        <br>
                        2. Must be between 8 and 32 characters
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }
        }else{
          // next calls the next bit of middleware
            next()
        }
    }
}
