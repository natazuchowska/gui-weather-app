import "./current-weather.css";

const CurrentWeather = ({ data }) => {
    return (
        <>
            <div className="sun-times">
                <div className="rise">Sunrise<p className="time">{new Date(data.sys.sunrise * 1000).getHours()}:{new Date(data.sys.sunrise * 1000).getMinutes()}</p></div>
                <div className="set">Sunset<p className="time">{new Date(data.sys.sunset * 1000).getHours()}:{new Date(data.sys.sunrise * 1000).getMinutes()}</p></div>
            </div>
            <div className="weather">
                <div className="top">
                    <div>
                        <img alt="weather" className="weather-icon" src={`../../../icons/${data.weather[0].icon.substring(0,data.weather[0].icon.length-1)}.png`}></img> {/*chooses the correct icon from the icons folder based on the weather desc */}
                        <p className="weather-desc">{data.weather[0].description}</p>
                    </div>
                    <p className="temperature">{Math.round(data.main.temp)}°C</p>
                </div>
                <div className="bottom">
                    <p className="city">{data.city}</p>
                </div>
            </div>
        </>
    );
}
export default CurrentWeather;