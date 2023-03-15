import "./current-weather.css";

const CurrenntWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Wroclaw</p>
                    <p className="weather-desc">Cloudy</p>
                </div>
                <img alt="weather" className="weather-icon" src="../../../icons/cloudy_FILL0_wght400_GRAD0_opsz48.png"></img>
            </div>
            <div className="bottom">
                <p className="temperature">20°C</p>
                <div className="details"> 
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like </span>
                        <span className="parameter-value">18°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind </span>
                        <span className="parameter-value">2 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity </span>
                        <span className="parameter-value">45%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure </span>
                        <span className="parameter-value">1080hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CurrenntWeather;