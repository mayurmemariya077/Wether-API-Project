

🌤️ Weather App

A simple Weather App built using HTML, CSS, and JavaScript.
It uses the Open-Meteo API to fetch current weather information without requiring an API key. 🌍☁️

🚀 Live Project

🔗 Live Demo:
https://codepen.io/editor/mayurmemariya077/pen/01a0c775-7f78-7551-b2e4-153950c020ea

🌐 Open the live project and search for any city to check its current weather.

🎥 Project Explanation

📺 Explanation Video:
YOUR_EXPLANATION_VIDEO_LINK

🎬 In this video, the complete project structure, API integration, JavaScript logic, and working of the Weather App are explained.

✨ Features
🔎 Search weather by city name
🌡️ Displays current temperature
💧 Displays humidity
💨 Displays wind speed
⚡ Uses JavaScript async/await
🌐 Uses fetch() to get API data
🚨 Handles invalid city names and errors
📱 Responsive design
🔑 No API key required for the API usage in this project
🛠️ Technologies Used
Technology	Purpose
🌐 HTML	Website structure
🎨 CSS	Styling and responsive design
⚡ JavaScript	API handling and DOM manipulation
☁️ Open-Meteo API	Weather data
📂 Project Structure
Weather-App/
│
├── 📄 index.html
├── 🎨 style.css
└── ⚡ script.js
🔄 How It Works
👤 Enter City Name
        ↓
🔎 Search Button
        ↓
🌍 Geocoding API
        ↓
📍 Get Latitude & Longitude
        ↓
☁️ Weather API
        ↓
🌡️ Temperature
💧 Humidity
💨 Wind Speed
        ↓
🖥️ Display Weather

The Geocoding API searches for the city and returns its location coordinates; those coordinates are then used with the Weather Forecast API to retrieve weather information.

🌐 API Used
📍 Geocoding API

Used to convert the city name into latitude and longitude.

https://geocoding-api.open-meteo.com/v1/search
☁️ Weather Forecast API

Used to get weather information using latitude and longitude.

https://api.open-meteo.com/v1/forecast

Open-Meteo's forecast endpoint accepts latitude/longitude and weather variables such as temperature, relative humidity, and wind speed.

💻 JavaScript Concepts

This project demonstrates:

addEventListener()
async / await
fetch()
try / catch
if / else
JSON data
DOM Manipulation
Template Literals
encodeURIComponent()
API Error Handling
🚀 How to Run
📁 Create a project folder.
📄 Add index.html.
🎨 Add style.css.
⚡ Add script.js.
🔗 Keep all three files in the same folder.
🌐 Open the project in a browser.
🔎 Enter a city name.
☁️ Click Search.
🎯 Example

Search:

Ahmedabad

The app displays:

🌆 Ahmedabad

🌡️ 30°C
💧 Humidity: 60%
💨 Wind Speed: 12 km/h
🧠 What I Learned

Through this project, I learned how to:

🌐 Work with APIs
⚡ Use async/await
📡 Fetch external data using fetch()
📦 Read JSON responses
🔄 Handle asynchronous operations
🎯 Manipulate HTML using JavaScript
🚨 Handle API errors
📱 Create a responsive UI
👨‍💻 Author

Mayur Memariya

⭐ If you like this project, feel free to use and improve it!
