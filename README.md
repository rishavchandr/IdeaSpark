# 💡 IdeaSpark

An AI-powered Startup Idea Validator. Submit your startup idea and instantly receive an AI-generated validation report covering market potential, feasibility, risks, and recommendations.

---

## 🚀 Features

- 📝 Submit startup ideas via a clean web interface
- 🤖 AI-generated validation reports
- 📊 Covers market analysis, feasibility, risks & suggestions
- ⚡ Full-stack architecture with separate frontend and backend

---

## 🛠️ Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Frontend  | HTML, CSS, JavaScript   |
| Backend   | Node.js (JavaScript)    |
| AI        | GEMINIAI API Integration|

---
## 🏗️ Initialize the Project from Scratch

### 1. Create the Project Structure
```bash
mkdir IdeaSpark
cd IdeaSpark
```

---

### 2. Initialize the Backend
```bash
mkdir backend
cd backend
npm init -y
npm install express cors dotenv
cd ..
```

---

### 3. Initialize the Frontend (React + Vite)
```bash
npm create vite@latest frontend -- --template react
cd frontend
npm install
cd ..
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js >= 16
- npm >= 8
- An API key for your AI provider (e.g., OpenAI, Gemini)

---

### 1. Clone the Repository
```bash
git clone https://github.com/rishavchandr/IdeaSpark.git
cd IdeaSpark
```

---

### 2. Setup the Backend
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:
```env
PORT=5000
AI_API_KEY=your_ai_api_key_here
```

Start the backend server:
```bash
node index.js
```

The backend will run at `http://localhost:5000`

---

### 3. Setup the Frontend
```bash
cd frontend
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 🔑 Environment Variables

| Variable     | Required | Description                        |
|--------------|----------|------------------------------------|
| `PORT`       | No       | Port for the backend server (default: 5000) |
| `AI_API_KEY` | Yes      | API key for AI validation engine   |

> **Note:** Never commit your `.env` file. Add it to `.gitignore`.

---

## 📖 Usage

1. Open the app in your browser
2. Enter your startup idea in the input form
3. Click **Analyse**
4. Receive an AI-generated report with:
   - Market potential analysis
   - Feasibility score
   - Risk assessment
   - Actionable recommendations
   - Customers
   - Competitors
   - Tech-Stack
---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---