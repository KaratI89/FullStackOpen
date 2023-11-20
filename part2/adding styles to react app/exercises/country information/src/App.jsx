import {useState, useEffect} from 'react'
import axios from 'axios'
const api_key = import.meta.env.VITE_SOME_KEY

const CountryInfo = ({countries, showCountry, weatherForcast}) => {
  if(countries) {
  const number = countries.length
  if (number > 1 && number < 10) {
    return (
        countries.map((country)=> 
          <div key={country.cca2}>
            <p>
            {country.name.common}
            <button onClick={()=>showCountry(country)}>show</button>
            </p>
          </div>
        )
  )
  }
  else if (number >1) {
    return (
      <div>
        <p>{"Too many matches, specify another filter"}</p>
      </div>
    )
  }
  else if (number === 1 && weatherForcast) {
    return (
      <div>
        <h1>{countries[0].name.official}</h1>
        {`Capital: ${countries[0].capital}`}<br/>
        {`Area: ${countries[0].area} m2`}
        <p>{'Language:'}</p>
        <ul>{Object.keys(countries[0].languages).map((key) => <li key={key}>{countries[0].languages[key]}</li>)}</ul>
        <img src={countries[0].flags.png}/>
        <h3>{`Weathe in ${countries[0].capital}`}</h3>
        <img alt="not found" width={'150px'} src={`https://openweathermap.org/img/wn/${weatherForcast.weather[0].icon}@2x.png`} /><br/>
        {`temperature ${weatherForcast.main.temp} Celcius`}<br/>
        {`wind ${weatherForcast.wind.speed} m/s`}<br/>
      </div>
    )
  }
}
else{
  return(
  <div>
  <p>{'Please enter the country'}</p>
  </div>
  )
}
}

export const App = () => {
  const [countryName, setCountryName] = useState('')
  const [countries, setCountry] = useState(null)
  const [weatherData, setWeather] = useState(null)
  const [countryList, setCountryList] = useState(null)

  const handleCountryNameChange = (event) => {
    setCountryName(event.target.value)
  }

  useEffect(() => {
    if (countries) {
      const countriesFilter = countries.filter(country=> country.name.common.toLowerCase().includes(countryName.toLowerCase()))
      setCountryList(countriesFilter)
      getWeatherForcast(countriesFilter)
    }
    else {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => setCountry(response.data))
    }
  }, [countryName])

const show = (country) => setCountryName(country.name.common)
  
//функция вызывает непрерывно сама себя при рендеринге, нужен механизм единоразового вызова при выборке фильтра одной страны
const getWeatherForcast = (country) =>{
    if (country.length === 1) {
      const request = axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country[0].capitalInfo.latlng[0]}&lon=${country[0].capitalInfo.latlng[1]}&appid=${api_key}&units=metric`)
      request.then(response=> setWeather(response.data))
    }
} 

return (
    <div>
      country: <input value={countryName} onChange={handleCountryNameChange} />
      <CountryInfo countries={countryList} showCountry={show} weatherForcast={weatherData} /> 
    </div>
  )
}

export default App
