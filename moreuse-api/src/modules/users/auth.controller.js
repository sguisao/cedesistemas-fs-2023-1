const authService = require('./auth.service');

const login = async (req,res) => {
  try {
    const { email, password } = req.body;
    const response = await authService.login(email, password);
    res.status(200).json(response);
  } catch (error){
    res.status(error.status).json(error.response)
  }

}

const logout = (req,res) => {
  const {idUser} = req.payload;
  const response = authService.logout(idUser);
  res.status(200).json(response);
}

const signup = async (req,res) => {
  try {
    const user = req.body;
    const response = await authService.signup(user);
    res.status(200).json(response);
   } catch (error){
      res.status(error.status).json(error.response);
  }
}

const info = async (req,res) => {
  try {
    const {idUser} = req.payload;
    const response = await authService.info(idUser)
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response);
  }

}

module.exports = {
  login,
  logout,
  info,
  signup
}
