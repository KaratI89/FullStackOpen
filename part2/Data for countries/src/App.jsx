import {useState, useEffect} from 'react'
import axios from 'axios'
import { CountryInfo } from './Components/CountryInfo'
const api_key = import.meta.env.VITE_SOME_KEY

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
//
export default App
