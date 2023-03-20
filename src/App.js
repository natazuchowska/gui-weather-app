import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import CurrentWeatherDets from './components/current-weather/current-weather-dets';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';
import Forecast from './components/forecast/forecast';
import Footer from './components/footer/footer';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null); // hooks to store and then update weather data
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`); // fetch for the current weather

    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`); // fetch for the forecast for upcoming days

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async(response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({city: searchData.label , ...weatherResponse}); //set the currentWeather variable to the response received from server
        setForecast({city: searchData.label , ...forecastResponse});
      })
      .catch((err) => console.log(err));

  };

  //test to see if the variables are actually receiving and storing data from the api request
  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <div className="image-section">
        <Search className="searchbar" onSearchChange={handleOnSearchChange}/>
        {currentWeather? <CurrentWeather data={currentWeather}/> : <p className='title-screen'>Welcome to <p className='app-name'>AgroWeather app</p></p>} 
        {forecast && <Forecast data={forecast}/>}
        {currentWeather && <CurrentWeatherDets data={currentWeather}></CurrentWeatherDets>}
      </div>
      <Footer />
    </div>
  );
}
export default App;
