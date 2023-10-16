from enum import Enum

class ApiErrors(Enum):
    INVALID_PARAMETER_VALUES = "Invalid parameter values"
    OPERATION_NOT_ALLOWED = "Operation not allowed"
    BAD_REQUEST = "Bad Request"
    NOT_FOUND = "Requested resource does not exist or is not accessible for requesting user"
    MISSING_REQUIRED_FIELDS = "Missing required fields: %s"
    INVALID_PARAMETER_VALUE = "Invalid %s value"
    WRONG_WORKSPACE = "Wrong workspace"
    NOT_AUTHORIZED = "User is not authorized"

def value_error_logging(ex, logger):
     
    logger.error('--------------')
    logger.error(ex.args[0])
    logger.exception(ex)
    logger.error('--------------')
   
    if ex.args[0] == ApiErrors.BAD_REQUEST:
        return ApiErrors.BAD_REQUEST.value, 400
    elif ex.args[0] == ApiErrors.NOT_AUTHORIZED:
        return ApiErrors.NOT_AUTHORIZED.value, 401
    elif ex.args[0] == ApiErrors.WRONG_WORKSPACE:
        return ApiErrors.WRONG_WORKSPACE.value, 403
    elif ex.args[0] == ApiErrors.OPERATION_NOT_ALLOWED:
        return ApiErrors.OPERATION_NOT_ALLOWED.value, 403
    elif ex.args[0] == ApiErrors.NOT_FOUND:
        return ApiErrors.NOT_FOUND.value, 404
    else:
        if hasattr(ex.args[0], 'value'):
            return ex.args[0].value, 400 
        else:
            return ex.args[0], 400  
        
def error_logging(ex, logger):
     
    logger.error('--------------')
    logger.error(type(ex))
    logger.error(ex.args[0])
    logger.exception(ex)
    logger.error('--------------')
   
    return ApiErrors.BAD_REQUEST.value, 400