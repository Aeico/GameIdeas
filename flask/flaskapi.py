from flask import Flask,jsonify,json,request
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/game/<name>")

def getGame(name):

    url = "https://api.igdb.com/v4/games"
    params = {
        'fields':'*',
        'search':name
    }
    authdetails = {
        'Client-ID':'l0ejtj3vxzb0686st38daa6k9689it',
        'Authorization':'Bearer o6yglmjjfygddet6kq5icb2dlxzmgk'
        }
    game_fetch = requests.post(url, params=params, headers=authdetails).json()
    print(game_fetch)
    
    game_names = []
    for obj in game_fetch:
        game_names.append(obj['name'])
        
    game_names 

    return jsonify(game_name=game_names)
