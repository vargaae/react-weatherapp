 <div align="center">
  <img alt="Application image" src="https://nordicapis.com/wp-content/uploads/How-to-Build-an-API-Driven-Weather-App.png" />
</div>
  <div align="center">
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Redux-black?style=for-the-badge&logoColor=white&logo=redux&color=764ABC" alt="redux" />
    <img src="https://img.shields.io/badge/-Styled-black?style=for-the-badge&logoColor=white&logo=styled&color=06B6D4" alt="styled" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

# WEATHER APP

## React Weather App

<div align="center">
  <img alt="Application image" src="https://vargaae.hu/images/projects/weather-app-git.png" width="700" />
</div>
React Weather App replaces a weather station, the user can search for cities with an autocomplete field to check the current weather, temprature, sunrise and sunset. User can save the cities and it stores the last saved city, so it stays after refreshing the app.
You can check out the deployed application [here](https://react-weatherapp-bstudio.onrender.com)
->deployed on Render

## 🛠 Front End:

- 🚀React APP -> Redux for State Management + Redux-Persist for Persistance,
- React 18.2
- Redux (+Redux Toolkit, Redux-Persist)
- SASS
- styled components
- TailwindCSS
- plugins(slider, icons,...)

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. Clone this repo
2. Run `npm install`
3. Connect to OPENWEATHER and GEO API-> You must add your own API key in the services/geoApi.js file to connect to the API-s.

you can grab GEO DB Cities Subscription and API key here: https://rapidapi.com/wirefreethought/api/geodb-cities.

You can grab OPENWEATHER API key [here](https://home.openweathermap.org/api_keys)
, you can grab GEO DB Cities Subscription and API key [here](https://rapidapi.com/wirefreethought/api/geodb-cities/)

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_APP_OPENWEATHER_API_TOKEN=
VITE_APP_OPENWEATHER_API_URL=https://api.openweathermap.org
VITE_APP_GEOAPI_TOKEN=
VITE_APP_GEOAPI_API_URL=wft-geo-db.p.rapidapi.com
```

1. **Running the Project**

```bash
npm run preview
```

Open [http://localhost:4173](http://localhost:4173) in your browser to view the project.
