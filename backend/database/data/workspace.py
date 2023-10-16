import sqlite3

def create_workspace_data():
        connection = sqlite3.connect('./database.db')
   
        cur = connection.cursor()

        cur.execute("INSERT INTO workspaces (title, description) VALUES (?, ?)",
                    ('Lumber Products', 'This maps routes from forest to lumber store.')
                    )

        cur.execute("INSERT INTO workspaces (title, description) VALUES (?, ?)",
                    ('Vegatables', 'This maps routes form field to grocery store.')
                    )

        connection.commit()
        connection.close()
        