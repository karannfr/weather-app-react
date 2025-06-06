import Header from './Header.js';
import CurrentWeather from './CurrentWeather.js'
import Forecast from './Forecast.js';
import { useState, useEffect } from 'react';
import Loading from './Loading.js';

function App() {
  const openWeatherApi = process.env.REACT_APP_OPEN_WEATHER_API;
  const [coords,setCoords] = useState(null);
  const [weather,setWeather] = useState(null);
  const [forecast,setForecast] = useState(null);
  const [error,setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search,setSearch] = useState(null);
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

    useEffect(() => {
    if (coords) {
      getDetails();
    }
    }, [coords]);

  let getDetails = async () =>{
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${openWeatherApi}&units=metric`);
    let data = await response.json();
    setWeather(data);
    response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${coords.latitude}&lon=${coords.longitude}&appid=${openWeatherApi}&units=metric`);
    data = await response.json();
    setForecast(data);
    setLoading(false);
  } 

  let handleSearch = () => {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${openWeatherApi}`).then(
      (response) => {
        return response.json()
      }).then((data) => {
        setCoords({
          latitude: data[0].lat,
          longitude: data[0].lon
        })
      })
  }
  
  return (
  <div className="App">
    {loading ? (
      <Loading />
    ) : (
      <>
        <Header 
          place={weather.name}
          date={new Date(weather.dt * 1000).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
          })}
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        <main>
          <CurrentWeather 
            temp={weather.main.temp}
            wind={weather.wind.speed}
            humidity={weather.main.humidity}
            desc={weather.weather[0].description}
          />
          <img className='image' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
          <Forecast 
            forecast={forecast}
            loading={loading}
          />
        </main>
      </>
    )}
  </div>
);

}

export default App;
