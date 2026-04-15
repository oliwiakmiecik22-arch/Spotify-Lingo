# Spotify-Lingo 🎵📚

Spotify-Lingo is a small language-learning mini game inspired by Spotify.

The application allows users to search songs, listen to previews, and practice language skills by filling in missing words from song lyrics.

---

# Features

• Search songs using the Jamendo API  
• Play a preview of a song  
• Mini game: fill the missing word in lyrics  
• Learn languages through music  

---

# Project Structure

Spotify-Lingo
│
├── client  
│   React (Vite) frontend
│
├── server  
│   Node.js + Express backend  
│   Handles Jamendo API requests
│
└── README.md

---

# Requirements

Before running the project make sure you have installed:

Node.js (v18 or newer recommended)  
Git  

You also need a Jamendo Developer Client ID.

---

# Get Jamendo Client ID

Create a free Jamendo API key here:

https://developer.jamendo.com

After creating an application you will receive a **Client ID**.

This key will be used in the backend `.env` file.

IMPORTANT: API keys should NEVER be pushed to GitHub.

---

# Setup Guide (Step by Step)

Follow these steps to run the project locally.

---

# 1 Clone the Repository

Open a terminal and run:

git clone https://github.com/Oliwia-ui/Spotify-Lingo.git

cd Spotify-Lingo

---

# 2 Setup Backend (Server)

Go into the server folder:

cd server

Install dependencies:

npm install

---

# Create .env file

Inside the server folder create a file called:

.env

Add this inside the file:

JAMENDO_CLIENT_ID=YOUR_CLIENT_ID_HERE  
PORT=3001

Replace YOUR_CLIENT_ID_HERE with your Jamendo client ID.

---

# Start Backend Server

Run:

npm start

You should see something similar to:

Server running on http://localhost:3001

You can test the backend by opening in browser:

http://localhost:3001

---

# 3 Setup Frontend (React Client)

Open a new terminal window.

Navigate to the client folder:

cd Spotify-Lingo/client

Install dependencies:

npm install

Run the development server:

npm run dev

You should see something like:

Local: http://localhost:5173

---

# 4 Open the App in Browser

Open this link in your browser:

http://localhost:5173

Make sure both servers are running:

Backend  
http://localhost:3001

Frontend  
http://localhost:5173

---

# How the App Works

1 User searches for a song  
2 Backend requests songs from the Jamendo API  
3 Songs are returned to the React frontend  
4 User can play the preview audio  
5 The game hides a word in lyrics and the user guesses it  

---

# Team Git Workflow

This project uses a simple Git workflow for team collaboration.

Main branches:

main → stable version  
dev → development branch  

Team members work on feature branches.

---

# Create a Feature Branch

git checkout dev  
git pull  
git checkout -b feature/my-feature-name

Example feature names:

feature/lyrics-game  
feature/search-ui  
feature/song-player  

---

# Commit Changes

git add .  
git commit -m "Describe your change"

---

# Push Branch

git push -u origin feature/my-feature-name

---

# Create Pull Request

On GitHub open a Pull Request:

feature/my-feature-name → dev

After review the feature is merged into dev.

Lead developer merges:

dev → main

---

# Important Rules

Do NOT commit these files:

.env  
node_modules  

These files are ignored by Git.

---

# Troubleshooting

Backend not working

Check if backend is running:

http://localhost:3001

If not run again:

cd server  
npm start

---

Jamendo API errors

Make sure .env contains:

JAMENDO_CLIENT_ID=your_client_id

Restart the backend after editing .env.

---

Frontend cannot connect to backend

Make sure both are running:

Frontend → http://localhost:5173  
Backend → http://localhost:3001  

---

# Technologies Used

Frontend

React  
Vite  
JavaScript  
CSS  

Backend

Node.js  
Express  
Jamendo API  

---

# Authors

Spotify-Lingo Team

Lead Developer  
Oliwia-ui
