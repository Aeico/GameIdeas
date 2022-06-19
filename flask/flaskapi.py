from flask import Flask,jsonify,json,request
import requests
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route("/game/<name>")
@cross_origin()

def getGame(name):

    url = "https://api.igdb.com/v4/games"
    params = {
        'fields':'name,screenshots',
        'search':name
    }
    authdetails = {
        'Client-ID':'l0ejtj3vxzb0686st38daa6k9689it',
        'Authorization':'Bearer o6yglmjjfygddet6kq5icb2dlxzmgk'
    }
    game_fetch = requests.post(url, params=params, headers=authdetails).json()
    
    game_name = []
    game_screenshot = []
    for obj in game_fetch:
        if 'screenshots' in obj:
            print(obj['name'] + '  AND  ' + str(obj['screenshots'][0]))
            game_name.append(obj['name'])
            game_screenshot.append(obj['screenshots'][0])
            
    url2 = "https://api.igdb.com/v4/screenshots"
    
    imgIdString = '('

    count = 0
    for obj in game_fetch:
        if count != len(game_fetch)-1:
            try:
                newString = (str(obj['screenshots'][0])+',')
            except KeyError:
                newString = str(str(0)+',')
            if newString != None:
                imgIdString += newString
                count += 1
        else:
            imgIdString += (str(obj['screenshots'][0]))
            count += 1
    imgIdString += (')')
    
    payload = "fields *;\r\nwhere id = "+imgIdString+";"

    authdetails = {
        'Client-ID':'l0ejtj3vxzb0686st38daa6k9689it',
        'Authorization':'Bearer o6yglmjjfygddet6kq5icb2dlxzmgk'
        }
    image_fetch = requests.post(url2, data=payload, headers=authdetails).json()
    
    new_image_fetch = []
    
    for game in game_fetch:
        for obj in image_fetch:
            if obj['game'] == game['id']:
                new_image_fetch.append(obj)

    image_url = []
    for obj in new_image_fetch:
        print(obj['image_id'])
        image_url.append(obj['image_id'])

    return jsonify(game_name=game_name, screen_id=game_screenshot, url=image_url)

""" CORS(app)
@app.route("/img/<id>")
@cross_origin()


def getImages(id):
   
    url = "https://api.igdb.com/v4/screenshot"
    params = {
        'fields':'*'
        #'where id':'(9067,7433,7434)'
    }
    print(id)

    authdetails = {
        'Client-ID':'l0ejtj3vxzb0686st38daa6k9689it',
        'Authorization':'Bearer o6yglmjjfygddet6kq5icb2dlxzmgk'
        }
    image_fetch = requests.post(url, body=params, headers=authdetails).json()
    print(image_fetch.status_code)

    image_url = []
    for obj in image_fetch:
        image_url.append(obj['image_id'])
    return jsonify(url=image_url) 
 """