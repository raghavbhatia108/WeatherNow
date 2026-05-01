<<<<<<< HEAD

# React-Major-Project

=======

# 🌤️ Weather App

A modern, responsive weather application built with React, Material-UI, and Vite. Get real-time weather information for any city worldwide with a beautiful and intuitive interface.

## ✨ Features

- **Real-time Weather Data**: Fetches current weather information using OpenWeatherMap API
- **Beautiful UI**: Modern Material-UI design with smooth animations and transitions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Weather Icons**: Dynamic weather icons based on conditions (sunny, rainy, snowy)
- **Comprehensive Data**: Displays temperature, humidity, feels-like temperature, min/max temps
- **Error Handling**: Robust error handling with user-friendly messages
- **Loading States**: Smooth loading indicators during API calls
- **Accessibility**: Built with accessibility best practices

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd weather-app
```

2. Install dependencies:

```bash
npm install
```

3. Get your OpenWeatherMap API key:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Get your free API key
   - Replace the `API_KEY` in `src/SearchBox.jsx` with your key

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📱 Usage

1. Enter a city name in the search box
2. Click the "Search" button or press Enter
3. View the current weather information including:
   - Current temperature
   - Weather description
   - Humidity level
   - Feels-like temperature
   - Minimum and maximum temperatures

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Tech Stack

- **React 18** - Modern React with hooks
- **Material-UI (MUI)** - Component library for consistent design
- **Vite** - Fast build tool and development server
- **OpenWeatherMap API** - Weather data provider
- **ESLint** - Code linting

## 🎨 Design Features

- Gradient background with glassmorphism effects
- Smooth fade-in animations
- Responsive grid layout for weather data
- Dynamic color coding based on temperature
- Professional typography and spacing
- Hover effects and transitions

## 🔧 Configuration

### API Key Setup

Replace the `API_KEY` constant in `src/SearchBox.jsx`:

```javascript
const API_KEY = "your-openweathermap-api-key-here";
```

### Theme Customization

The app uses Material-UI theme provider. Customize colors, typography, and component styles in `src/main.jsx`.

## 📦 Build & Deployment

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deployment

The built files in the `dist` folder can be deployed to any static hosting service like:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from [Material-UI Icons](https://mui.com/material-ui/material-icons/)
- Images from Pexels and other free stock photo sources
  > > > > > > > ef4b688 (Added)
