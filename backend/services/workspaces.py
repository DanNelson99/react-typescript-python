from database.connection import Connection
from utilities.jsonConverters import convert_json, underscore_to_camel

import sqlite3

def fetch_workspaces():
    with Connection() as conn:
        conn.row_factory = sqlite3.Row
        workspaces_query = conn.execute("SELECT * FROM workspaces").fetchall()

        workspaces = []
        
        for workspace in workspaces_query:
            workspaces.append(convert_json(dict(workspace), underscore_to_camel))
            
        return workspaces
 