import "./current-weather.css";

const CurrentWeatherDets = ({ data }) => {
    return (
        <div className="details">
            <div className="row">
                <div className="column">
                    <span className="parameter-label">Feels like </span>
                    <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                </div>
                <div className="column">
                    <span className="parameter-label">Wind </span>
                    <span className="parameter-value">{data.wind.speed}m/s</span>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <span className="parameter-label">Humidity </span>
                    <span className="parameter-value">{data.main.humidity}%</span>
                </div>
                <div className="column">
                    <span className="parameter-label">Pressure </span>
                    <span className="parameter-value">{data.main.pressure}hPa</span>
                </div>
            </div>
        </div>
    );
}
export default CurrentWeatherDets;