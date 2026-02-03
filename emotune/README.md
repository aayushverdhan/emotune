# 🎵 EmoTune

**AI-Powered Music Recommendation Based on Facial Emotion Detection**

EmoTune is an intelligent web application that analyzes your facial expressions in real-time to recommend personalized music playlists that match your current mood. Using advanced machine learning models, it detects emotions and curates the perfect soundtrack for your feelings.

## ✨ Features

- **Real-time Emotion Detection**: Uses face-api.js with TensorFlow models to analyze facial expressions
- **Smart Music Recommendations**: Curated playlists based on detected emotions (happy, sad, angry, surprised, etc.)
- **Responsive Design**: Modern UI built with React and Tailwind CSS
- **Dark/Light Theme**: Toggle between themes for comfortable viewing
- **History Tracking**: View your emotion detection history and past recommendations
- **Therapy Mode**: Specialized playlists for emotional wellness and relaxation
- **Progressive Web App**: Installable on mobile and desktop devices

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS, Framer Motion
- **AI/ML**: face-api.js, TensorFlow.js
- **Backend**: Supabase
- **Build Tool**: Create React App
- **Icons**: Heroicons
- **Animations**: Lottie React

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Modern web browser with camera access
- Supabase account (for backend services)

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/emotune.git
   cd emotune
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   Add your Supabase credentials to `.env`:
   ```
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📱 Usage

1. **Grant Camera Permission**: Allow camera access when prompted
2. **Emotion Scan**: Click the scan button to analyze your facial expression
3. **Get Recommendations**: Receive personalized music playlists based on your detected emotion
4. **Explore**: Browse through different moods and discover new music
5. **History**: Check your emotion detection history in the History section

## 🏗️ Project Structure

```
emotune/
├── public/
│   ├── models/              # TensorFlow.js models for face detection
│   └── ...
├── src/
│   ├── components/          # Reusable React components
│   ├── context/            # React Context providers
│   ├── data/               # Static data and configurations
│   ├── pages/              # Main application pages
│   ├── utils/              # Utility functions
│   └── ...
├── package.json
└── README.md
```

## 🎯 Key Components

- **CameraPreview**: Real-time camera feed with emotion detection overlay
- **Navbar**: Navigation component with theme toggle
- **AppContext**: Global state management for user data and preferences
- **ThemeContext**: Dark/light theme management

## 🔧 Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [face-api.js](https://github.com/justadudewhohacks/face-api.js) for facial recognition
- [Supabase](https://supabase.com) for backend services
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Heroicons](https://heroicons.com) for beautiful icons


---

**Made with ❤️ by Aayush Verdhan(https://github.com/aayushverdhan)**
