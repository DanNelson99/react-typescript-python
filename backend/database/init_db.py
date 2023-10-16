import sqlite3
from data.workspace import create_workspace_data

connection = sqlite3.connect('./database.db')

with open('database/schema/schema.sql') as f:
    connection.executescript(f.read())

connection.commit()
connection.close()


create_workspace_data()
