import './forecast.css';

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const Forecast = ({ data }) => {

    const dayOfWeek = new Date().getDay();
    const days_forecast = DAYS_OF_WEEK.slice(dayOfWeek, DAYS_OF_WEEK.length).concat(DAYS_OF_WEEK.slice(0, dayOfWeek));

    console.log(days_forecast);

    return (
        <>
            <div className="forecast-items" >
                {data.list.splice(0, 7).map((item, id) => (
                    <div key={id}>
                        <div className="daily-item">
                            <label className="day">{days_forecast[id]}</label>
                            {/* <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}></img>  */}
                            <p className="desc">{item.weather[0].description}</p>
                            <p className="temp">{Math.round(item.main.temp)}°C</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Forecast;