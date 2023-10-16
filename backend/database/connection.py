import sqlite3

def get_db_connection():
    conn = sqlite3.connect("./database.db")
    return conn
    

class Connection:
    def __init__(self):
        self.__connection = None

    def __enter__(self):
        self.__connection = get_db_connection()
        return self.__connection

    def __exit__(self, exec_type, exec_value, traceback):
        if exec_type is None:
            self.__connection.close()
        else:
            self.__connection.rollback()
            self.__connection.close()
