const loginService = require('../../Services/Authorization/login.service');

class LoginController {

  async login(req, res){

    if(typeof req.body.username !== 'string' || typeof req.body.password !== 'string'){
      res.status(400);
      return res.send('Please input data.');
    }

    const result = await loginService.login(req.body);
    res.status(result.status);

    return res.send(result.message);
  }
}

module.exports = LoginController;