import "./current-weather.css";

const CurrentWeatherDets = ({ data }) => {
    return (
        <div className="details">
            <div className="row">
                <div className="column">
                    
                    <span className="parameter-label"><img alt="redirection" className='feels-img' src="./icons/thermometer.png"></img> Feels like </span>
                    <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                </div>
                <div className="column">
                    <span className="parameter-label"> <img alt="redirection" className='wind-img' src="./icons/wind.png"></img>  Wind </span>
                    <span className="parameter-value">{data.wind.speed}m/s</span>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <span className="parameter-label"><img alt="redirection" className='humidity-img' src="./icons/humidity.png"></img>  Humidity </span>
                    <span className="parameter-value">{data.main.humidity}%</span>
                </div>
                <div className="column">
                    <span className="parameter-label"><img alt="redirection" className='pressure-img' src="./icons/barometer.png"></img> Pressure </span>
                    <span className="parameter-value">{data.main.pressure}hPa</span>
                </div>
            </div>
        </div>
    );
}
export default CurrentWeatherDets;