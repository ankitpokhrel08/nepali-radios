from flask import Flask, jsonify, abort
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load JSON data from the file
def load_json_data():
    try:
        with open('data.json', encoding='utf-8') as json_file:
            data = json.load(json_file)  # Read the data from the JSON file
        return data
    except FileNotFoundError:
        abort(404, description="File not found")  # Return 404 if file not found
    except json.JSONDecodeError:
        abort(400, description="Error decoding JSON data")  # Return 400 if JSON is malformed

# API endpoint to serve the data
@app.route('/data', methods=['GET'])
def get_data():
    data = load_json_data()
    return jsonify(data)  # Return the data as a JSON response

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
