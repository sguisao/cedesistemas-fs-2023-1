const errorHandler = (errorData, extra = {}) => {
  const  response = {...extra,message: errorData.message}
  return {
    status:errorData.status,
    response,
    handled: true //Error manejado por nosotros
  }
}

module.exports = errorHandler;
