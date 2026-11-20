# 💻 Remote Interview Platform

A full-stack Remote Interview Platform designed to simplify technical interviews through real-time video communication, collaborative coding, and interview management.

The platform allows users to conduct and participate in technical interviews remotely with features such as video calling, screen sharing, real-time chat, code collaboration, and interview session management.

## 🚀 Features

- **User Authentication:** Secure authentication and user management using Clerk.
- **Video Interview:** Conduct one-to-one video interviews with real-time audio and video communication.
- **Screen Sharing:** Share your screen during technical interviews.
- **Recording:** Record interview sessions for future reference.
- **Real-Time Chat:** Communicate with interview participants through integrated chat functionality.
- **Collaborative Code Editor:** Write and share code during technical interviews.
- **Practice Problems:** Access coding problems for technical interview preparation.
- **Interview Dashboard:** View interview sessions and live dashboard statistics.
- **Room Management:** Create, manage, and lock interview rooms.
- **Background Jobs:** Handle asynchronous tasks using Inngest.
- **Data Fetching:** Manage server state and API requests using TanStack Query.

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- TanStack Query
- DaisyUI

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication & Real-Time Communication
- Clerk – Authentication
- Stream – Video and Chat
- Inngest – Background Job Processing

### Deployment
- Vercel – Frontend
- Render – Backend

## 📂 Project Structure

```text
Remote-Interview-Platform/
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── package.json
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd Remote-Interview-Platform
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 5. Configure Environment Variables

Create `.env` files in the backend and frontend directories.

Configure the required credentials for:

- MongoDB
- Clerk Authentication
- Stream API
- Inngest
- Frontend and backend URLs

Never upload your `.env` files or secret API keys to GitHub.

### 6. Run the Application

Start the backend using the start script configured in its `package.json`.

Start the frontend using:

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

## 🎯 Project Objective

The objective of this project is to build a collaborative remote interview environment where interviewers and candidates can communicate, share code, and conduct technical interviews without requiring physical meetings.

It demonstrates practical full-stack development skills, real-time communication integration, authentication, API development, and frontend-backend integration.

## 🌟 Key Learning Outcomes

- Building full-stack applications using the MERN stack.
- Implementing authentication and protected application features.
- Integrating third-party APIs and SDKs.
- Working with real-time video and chat functionality.
- Managing application state and server-side data.
- Implementing collaborative interview workflows.
- Deploying frontend and backend applications.

## 👨‍💻 Author

**Rani Khatun**

- GitHub: [Rkhatun123](https://github.com/Rkhatun123)

---

⭐ If you find this project interesting, consider giving the repository a star!
