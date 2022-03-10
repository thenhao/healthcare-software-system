const registerService = require('../../Services/Authorization/register.service');

class RegisterController {
  
  async register(req, res){

    if(typeof req.body.role !== 'string' || typeof req.body.username !== 'string' || typeof req.body.password !== 'string'){
      res.status(400);
      return res.send('Please input data.');
    }

    const result = await registerService.register(req.body);
    res.status(result.status);

    return res.json({data: result.data, status: result.status, message: result.message});
  }
}

module.exports = RegisterController;