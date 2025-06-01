import { FaWind } from "react-icons/fa6";
import { FaDroplet } from "react-icons/fa6";


let currentWeather = ({temp, wind, humidity,desc}) =>{
  return(
    <div className="current">
      <span className="temp">{temp}°</span>
      <span className="desc">{desc}</span>
      <div className="conditions">
        <div className="condition">
          <div className="attribute">
            <FaWind size={28}/>
            Wind
          </div>
          <div className="value">
            {wind} kmph
          </div>
        </div>
        <div className="condition">
          <div className="attribute">
            <FaDroplet size={28}/>
            Humidity
          </div>
          <div className="value">
            {humidity} %
          </div>
        </div>
      </div>
    </div>
  )
}

export default currentWeather;