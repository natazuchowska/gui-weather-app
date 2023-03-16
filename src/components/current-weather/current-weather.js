import "./current-weather.css";

const CurrentWeather = ({data}) => {
    return (
        <>
        <div className="sun-times">
            <div className="rise">sunrise<p>{data.dt}</p></div>
            <div className="set">sunset<p>{data.sys.sunset}</p></div>
        </div>
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-desc">  {data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src="../../../icons/clouds-2-256.png"></img> 
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details"> 
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like </span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind </span>
                        <span className="parameter-value">{data.wind.speed}m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity </span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure </span>
                        <span className="parameter-value">{data.main.pressure}hPa</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default CurrentWeather;