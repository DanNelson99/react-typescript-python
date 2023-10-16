from flask import jsonify
from endpoints import main_api
from .errorHandling import error_logging, value_error_logging
from services.workspaces import fetch_workspaces

import logging

@main_api.route("/workspaces", methods=["GET"])
def get_workspaces():
    logger = logging.getLogger(__name__)
    
    try:
        workspaces = fetch_workspaces()
        return jsonify(workspaces)

    except ValueError as ex:
        value_error_logging(ex,logger)
    except Exception as ex:
        error_logging(ex,logger)
