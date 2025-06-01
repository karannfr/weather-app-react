let dailyForecast = ({day,temp,desc,icon}) => {
  return(
    <div className="daily">
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <div className="information">
        <div className="day-temp"><span>{day}</span><span>{temp}°</span></div>
        <div className="description">{desc}</div>
      </div>
    </div>
  )
}
export default dailyForecast