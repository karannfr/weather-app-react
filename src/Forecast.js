import DailyForecast from "./DailyForecast";

const Forecast = ({ forecast, loading }) => {
  return (
    <div className="forecast">
      {!loading && forecast && forecast.list.slice(0, 5).map((item, i) => (
        <DailyForecast
          key={i}
          day={new Date(item.dt * 1000).toLocaleDateString('en-US', {
            weekday: 'long'
          })}
          temp={item.temp.day}
          desc={item.weather[0].description}
          icon={item.weather[0].icon}
        />
      ))}
    </div>
  );
};

export default Forecast;
