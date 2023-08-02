# Setting up the project
Open a console window in the app's root directory.

Create a virtual environment with `python3.9 -m venv api-venv`.

Activate the virtual environment (`source api-venv/bin/activate` if you're in a bash shell).

Install requirements with `pip install -r requirements.txt`

# Running the project

Set the `FLASK_DEBUG` environment variable to 1 if debugging is wanted.

Set the `FLASK_APP` environment variable to main

`export FLASK_ENV=development`

`flask run -h localhost -p 4000`

# App runs on
http://localhost:4000/