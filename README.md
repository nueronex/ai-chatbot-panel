# 🤖 AI-Integrated Customer Support Chatbot Panel

A sleek, interactive chatbot panel built with a Python Flask backend and a modern dark-themed frontend. This chatbot leverages OpenAI's powerful language model to handle real-time customer queries, providing smart, accurate, and human-like responses.

---

## 🚀 Live Demo

> ⚡ Localhost: `http://127.0.0.1:5000/`

---

## 🧠 Features

- 💬 Real-time chatbot interaction
- 🎨 Modern dark-themed UI (Black & Blue aesthetic)
- 🔌 RESTful API for smooth communication
- 🛡️ CORS-enabled backend
- 🔐 Easily scalable and customizable

---

## 🛠️ Tech Stack

### 🔧 Backend
- Python 3.11+
- Flask
- OpenAI Python SDK (>=1.0.0)
- Flask-CORS

### 🎨 Frontend
- HTML5
- CSS3 (Dark-themed styling)
- JavaScript (Fetch API)

---

## 📁 Project Structure

├── app.py # Flask backend for chatbot API
├── templates/
│ └── index.html # Frontend user interface
├── static/
│ └── style.css # Styling for frontend (black & blue theme)
└── README.md # Project documentation

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/nueronex/mental_health_monitoring
cd mental_health_monitoring
2. Set up the virtual environment (optional)
bash
Copy
Edit
python -m venv venv
venv\Scripts\activate     # Windows
source venv/bin/activate  # macOS/Linux
3. Install dependencies
bash
Copy
Edit
pip install flask flask-cors openai python-dotenv
4. Add .env file
Create a .env file in the root directory and add your OpenAI API key:

env
Copy
Edit
OPENAI_API_KEY=your_openai_api_key_here
5. Run the Flask server
bash
Copy
Edit
python app.py
Server runs at: http://127.0.0.1:5000

📡 API Endpoint
POST /chat
Sends a user message and receives a chatbot reply.

Example Request:
bash
Copy
Edit
curl -X POST http://127.0.0.1:5000/chat \
  -H "Content-Type: application/json" \
  -d '{ "message": "Hello" }'
🌐 Frontend Preview
Open your browser and go to: http://127.0.0.1:5000

Interact with the chatbot in a fun, modern black & blue themed interface.

👨‍💻 Developed By
Team Nueronex

A project that merges conversational AI with elegant frontend design for delightful customer interactions.

📄 License
This project is open-source and free to use under the MIT License.

🙌 Contributions
Pull requests and feature suggestions are welcome!

javascript
Copy
Edit
