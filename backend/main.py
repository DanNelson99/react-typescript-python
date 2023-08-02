from flask import Flask, jsonify
from flask_cors import CORS

import sqlite3

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = sqlite3.connect("./database.db")
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/", methods=["GET"])
def index():
    conn = get_db_connection()
    posts = conn.execute("SELECT * FROM posts").fetchall()
    conn.close()

    for post in posts:
        print(dict(post))
    return jsonify({})


if __name__ == "__main__":
  app.run()