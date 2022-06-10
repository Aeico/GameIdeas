from flask import Flask,jsonify,json,request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/game/<name>")

def getGame(name):
    print(name)
    return jsonify(Thing=name)