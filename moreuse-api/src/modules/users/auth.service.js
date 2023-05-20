const errorHandler = require('../../utils/errorHandler');
const User = require('./models/user.model');
const { USER_PASS_WRONG, SERVER_ERROR } = require('./utils/dict.errors');

const login = (email, password) => {
  try {
    //const div = a/1; //para generar error 500
    if (email==="sebas.guisao@gmail.com" && password==="1234"){
      return {
        token:"xxxxyyyyzzzz"
      }
    }
    throw errorHandler (USER_PASS_WRONG);
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR);
  }
}

const logout = (idUser) => {
  return {
    message: "user logout"
  }
}

const signup = async (userData) => {
  try {
    const user = User(userData);
    await user.save();
    return{
      message: "user created",
      user
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error);
  }
}

const info = (idUser) => {
  return {
    name:"Sebas Guisao",
    email:"Sebas.guisao@gmail.com",
    address:"Calle siempre viva",
    phone:"486521265"
  }
}

module.exports = {
  login,
  logout,
  info,
  signup
}
