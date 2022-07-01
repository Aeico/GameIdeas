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
        'fields':'name,screenshots,cover,summary',
        'search':name
    }
    authdetails = {
        'Client-ID':'l0ejtj3vxzb0686st38daa6k9689it',
        'Authorization':'Bearer o6yglmjjfygddet6kq5icb2dlxzmgk'
    }
    game_fetch = requests.post(url, params=params, headers=authdetails).json()
    
    game_name = []
    game_summary = []
    game_screenshot = []
    for obj in game_fetch:
        if 'screenshots' and 'summary' in obj:
            try: 
                game_name.append(obj['name'])
                game_summary.append(obj['summary'])
                game_screenshot.append(obj['screenshots'][0])
            except:
                print('Game missing name, summary, or screenshot')
            
            
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
            try:
                imgIdString += (str(obj['screenshots'][0]))
            except:
                imgIdString += ('undefined')
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
            try: 
                if obj['game'] == game['id']:
                    new_image_fetch.append(obj)
            except:
                print('Game missing data')
                

    image_url = []
    for obj in new_image_fetch:
        image_url.append(obj['image_id'])
        
        
        
    url3 = 'https://api.igdb.com/v4/covers/'
    
    coverIdString = '('
    count = 0
    for obj in game_fetch:
        if count != len(game_fetch)-1:
            try:
                newString = (str(obj['cover'])+',')
            except KeyError:
                newString = str(str(0)+',')
            if newString != None:
                coverIdString += newString
                count += 1
        else:
            try:
                coverIdString += (str(obj['cover']))
            except:
                coverIdString += ('undefined')
            count += 1
    coverIdString += (')')
    
    payload = "fields *;\r\nwhere id = "+coverIdString+";"

    authdetails = {
        'Client-ID':'l0ejtj3vxzb0686st38daa6k9689it',
        'Authorization':'Bearer o6yglmjjfygddet6kq5icb2dlxzmgk'
        }
    cover_fetch = requests.post(url3, data=payload, headers=authdetails).json()
    
    new_cover_fetch = []
    
    for game in game_fetch:
        for obj in cover_fetch:
            try: 
                if obj['game'] == game['id']:
                    new_cover_fetch.append(obj)
            except:
                print('Game missing data')

    cover_url = []
    for obj in new_cover_fetch:
        cover_url.append(obj['image_id'])     

    return jsonify(game_name=game_name, screen_id=game_screenshot, url=image_url, cover=cover_url, summary=game_summary)

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