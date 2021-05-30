'use strict';

//Dependencies
const ErrorHandler	= require( 'event_request/server/components/error/error_handler' );
const errorHandler	= new ErrorHandler();

// errorHandler.addNamespace( 'app' );

module.exports	= errorHandler;
