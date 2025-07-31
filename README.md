# 🚀 DevMate

**DevMate** is an AI-powered smart assistant that helps developers generate, explain, convert, and debug code snippets for multiple languages. Built with Node.js, it offers a simple frontend and a backend to handle AI queries and responses.

---

![DevMate Screenshot](./Screenshot(444).png)

## 📌 Features

- 🧑‍💻 **Generate Code:** Instantly create code snippets in your chosen language.
- 📚 **Explain Concepts:** Get clear explanations of any coding concept.
- 🔄 **Convert Code:** Convert code between different languages.
- 🐞 **Debug Code:** Identify and fix bugs.
- ⏱️ **Analyze Complexity:** Get time and space complexity analysis.
- 🤖 **Ask Anything:** Use AI to answer your coding doubts.

---

## 🔗 Live Link:  https://ms12code.github.io/DevMate/

---

## 🗂️ Project Structure

```

DevMate/
├── backend/                 # Backend server logic
│   ├── app.js               # Main server file (entry point)
│   ├── generate.js          # Handles code generation logic
│   ├── codeDB.json          # Stores example code snippets or data
│   ├── test/                # Tests for backend logic
│   ├── node_modules/        # Node.js dependencies
│   ├── package.json         # Node.js project metadata
│   ├── package-lock.json    # Exact version lock file
│   ├── .env                 # Environment variables (API keys etc.)
│   └── .qodo/               # (Optional) Qodo config directory if used
│
├── index.html               # Main HTML page (frontend UI)
├── style.css                # CSS stylesheet for styling the UI
├── script.js                # Client-side JavaScript for interactions
├── .gitignore               # Git ignore file
└── README.md                # Project documentation


```
---

## ⚙️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js (custom server logic, no framework) 
- **AI:** SambaNova API
- **Environment Variables:** Managed using `.env`

---

## 🚀 Getting Started

### 1️⃣ Clone the repository


git clone https://github.com/MS12code/DevMate.git
cd DevMate


### 2️⃣ Install dependencies

npm install

### 3️⃣ Set up .env

OPENAI_API_KEY=your_api_key_here
PORT=3000

### 4️⃣ Run the backend

node backend/app.js

## 📌 Future Enhancements

Deploy to a cloud platform (e.g., Vercel, Heroku)

Add authentication & user profiles

Improve UI/UX design

Add more AI features

## 🤝 Contributing
Pull requests and suggestions are welcome!
Please open an issue first to discuss any changes.

Made with 💜 by Medha Sharma and Aayush Gupta.
