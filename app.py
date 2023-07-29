from flask import Flask, jsonify
import random

app = Flask(__name__)

# Sample list of songs and artists (replace with actual web scraping)
songs = [
    {"title": "Song 1", "artist": "Artist 1"},
    {"title": "Song 2", "artist": "Artist 2"},
    {"title": "Song 3", "artist": "Artist 3"},
    # Add more songs and artists here
]

@app.route("/random-song", methods=["GET"])
def get_random_song():
    random_song = random.choice(songs)
    return jsonify(random_song)

if __name__ == "__main__":
    app.run(debug=True)
