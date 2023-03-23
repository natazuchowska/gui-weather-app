import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import CurrentWeatherDets from './components/current-weather/current-weather-dets';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';
import Forecast from './components/forecast/forecast';
import Footer from './components/footer/footer';
import Explore from './Explore/Explore';
import Profile from './Profile/Profile';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null); // hooks to store and then update weather data
  const [forecast, setForecast] = useState(null);


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    // fetch dor data to the OpenWeatherMap API
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`); // fetch for the current weather

    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`); // fetch for the forecast for upcoming days

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse }); //set the currentWeather variable to the response received from server

        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));

  };

  // 'currentPage' stores the name of the component/element-group that is currently being rendered
  // - The value is used to determine which component to render via conditional rendering (see render() function)
  // - The setCurrentPage() function is passed to the Footer component, so that the Footer component can change the value of 'currentPage'
  const [currentPage, setCurrentPage] = useState('home')

  // Main elements to be rendered
  const renderHome = () => {
    return (
      <div className="image-section">
        <Search className="searchbar" onSearchChange={handleOnSearchChange} />
        {currentWeather ? <CurrentWeather data={currentWeather} /> : <div className='title-screen'>Welcome to <p className='app-name'>AgroWeather app</p></div>}
        {currentWeather && forecast && <Forecast data={forecast} />}
        {currentWeather && <CurrentWeatherDets data={currentWeather}></CurrentWeatherDets>}
      </div>
    )
  }

  // render for the Explore component 
  const renderExplore = () => {
    return (
      <div>
        {currentWeather && <Explore data={currentWeather}> </Explore>}
      </div>
    )
  }

  // render for the Profile component
  const renderProfile = () => {
    return (
      <Profile></Profile>
    )
  }

  // Function for conditional rendering, 
  // depending on the state of the state variable 'currentPage'  
  // a different component will be rendered.
  const render = () => {
    switch (currentPage) {
      case 'explore':
        return renderExplore();
      case 'profile':
        return renderProfile();
      case 'home':
        return renderHome();
      default:
        return renderHome();
    }
  }

  return (
    <div className='container'>
      {render()}
      {currentWeather && forecast && <Footer setPage={setCurrentPage}/>} {/* display the redirection menu only if weather data displayed */}
    </div>
  );
}
export default App;
