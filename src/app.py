from dotenv import load_dotenv

import os
import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS

# --- Load environment variables ---
load_dotenv()  

# --- Initialization ---
app = Flask(__name__)
# CORS(app)  # This enables Cross-Origin Resource Sharing
CORS(app, resources={r"/*": {"origins": "*"}})

try:
    genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
except KeyError:
    print("Error: GOOGLE_API_KEY environment variable not set.")
    exit()

# --- Gemini Model Configuration ---
# Create the model
generation_config = {
    "temperature": 0.7,
    "top_p": 0.9,
    "top_k": 1,
    "max_output_tokens": 2048,
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
)

@app.route('/')
def home():
    return 'Chatbot Flask server is running!'

# --- API Route ---
@app.route('/chat', methods=['POST'])
def chat():
    try:
        user_message = request.json['message']
        
        # Give the model context about its role
        prompt = f"""
         You are the virtual assistant for Maulik Mhatre’s personal portfolio website. Your role is to help visitors navigate and learn more about the site’s sections: Home, About, Projects, Skills, and Contact.

Respond in a friendly, professional, and approachable tone. Keep responses concise but informative. Your job is to:
- Welcome users and guide them through the site.
- Offer a short but personalized description of each section.
- Encourage users to scroll down or click tabs when appropriate.

Here’s how you should describe each section:

- **Home**: A warm welcome with a brief intro about Maulik Mhatre and what this website offers.
- **About**: Information about Maulik’s background, education, career goals, and personal interests.
- **Projects**: Showcase of selected projects with a brief explanation of what each one does, the technologies used, and what Maulik contributed.
- **Skills**: Overview of Maulik’s technical skills — programming languages, tools, and frameworks he’s proficient with.
- **Contact**: Ways to connect with Maulik, including email, LinkedIn, or a contact form.

If a user greets you or says “hi,” respond with a warm welcome and mention how you can help them explore the site.
        
        User's question: {user_message}
        """

        # Generate a response using the Gemini model
        response = model.generate_content(prompt)
        bot_reply = response.text

        return jsonify({'reply': bot_reply})

    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({'error': 'Failed to process the request'}), 500

# --- Run the App ---

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)