from flask import Flask

import sqlite3

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('./database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/")
def index():
    conn = get_db_connection()
    posts = conn.execute('SELECT * FROM posts').fetchall()
    conn.close()

    for post in posts:
        print(dict(post))
    return "Hello World!"
# def hello():
#   return "Hello World!"

if __name__ == "__main__":
  app.run()