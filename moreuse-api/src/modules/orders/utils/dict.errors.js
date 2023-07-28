const dictErrors =  {
  ORDER_NOT_FOUND: {
    status:404,
    message:"order not found"
  },
  SERVER_ERROR:{
    status: 500,
    message:"server internal error"
  }
}

module.exports = dictErrors;
