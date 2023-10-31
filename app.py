from flask import Flask,url_for,render_template
import requests
from flask import redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)