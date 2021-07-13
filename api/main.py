import os
import requests
from flask import Flask, request
from dotenv import load_dotenv

load_dotenv()

UNSPLASH_URL=os.environ.get('UNSPLASH_URL')
UNSPLASH_KEY=os.environ.get('UNSPLASH_KEY')

if not UNSPLASH_KEY:
  raise EnvironmentError('Please create .env file and insert there UNSPLASH_KEY.')

app =  Flask(__name__)

@app.route('/new-image')
def new_image():
  word = request.args.get('query')

  headers = {
    'Accept-Version': 'v1',
    'Authorization': f'Client-ID {UNSPLASH_KEY}'
  }
  params = {
    'query': word
  }
  response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
  data = response.json()
  return {'data': data}


if __name__ == '__main__':
  app.run(host="0.0.0.0", port=5050)