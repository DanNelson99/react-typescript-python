from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

from endpoints import main_api as main_blueprint
app.register_blueprint(main_blueprint)

if __name__ == "__main__":
  app.run()