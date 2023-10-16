from flask import Blueprint

main_api = Blueprint('main_api', __name__)

# endpoints for blue print
from . import workspaces