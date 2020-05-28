// OPERATIONAL ERRORS
class AppErrors extends Error {
  constructor( message , statusCode ) {
    super(message)

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error' ;
    this.isOperational = true ;

    // Not pollution -> Error chain
    Error.captureStackTrace( this , this.constructor );
  }
}

module.exports = AppErrors;
