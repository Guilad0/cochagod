class ValidationError extends Error {
    constructor(message, errors = []) {
      super(message);
      this.name = "ValidationError";
      this.errors = errors;
      this.statusCode = 400;
    }
  }
  
  class NotFoundError extends Error {
    constructor(resource) {
      super(`${resource || 'Recurso'} no encontrado`);
      this.name = "NotFoundError";
      this.statusCode = 404;
    }
  }
  
  module.exports = {
    ValidationError,
    NotFoundError
  };