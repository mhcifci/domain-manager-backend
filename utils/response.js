const success = (res, data = null, message = 'Success') => {
    res.status(200).json({
      status: 200,
      message,
      data,
    });
  };
  
  const created = (res, data = null, message = 'Created') => {
    res.status(201).json({
      status: 201,
      message,
      data,
    });
  };
  
  const badRequest = (res, errors = null, message = 'Bad request') => {
    res.status(400).json({
      status: 400,
      message,
      errors,
    });
  };
  
  const unauthorized = (res, message = 'Unauthorized') => {
    res.status(401).json({
      status: 401,
      message,
    });
  };
  
  const forbidden = (res, message = 'Forbidden') => {
    res.status(403).json({
      status: 403,
      message,
    });
  };
  
  const notFound = (res, message = 'Not found') => {
    res.status(404).json({
      status: 404,
      message,
    });
  };
  
  const conflict = (res, errors = null, message = 'Conflict') => {
    res.status(409).json({
      status: 409,
      message,
      errors,
    });
  };
  
  const serverError = (res, error = null, message = 'Internal server error') => {
    console.error(error);
    res.status(500).json({
      status: 500,
      message,
      error,
    });
  };
  
  module.exports = {
    success,
    created,
    badRequest,
    unauthorized,
    forbidden,
    notFound,
    conflict,
    serverError,
  };
  