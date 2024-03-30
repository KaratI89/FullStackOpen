export const CountryInfo = ({ countries, showCountry, weatherForcast }) => {
  if (countries) {
    const number = countries.length;
    if (number > 1 && number < 10) {
      return (
        countries.map((country) => <div key={country.cca2}>
          <p>
            {country.name.common}
            <button onClick={() => showCountry(country)}>show</button>
          </p>
        </div>
        )
      );
    }
    else if (number > 1) {
      return (
        <div>
          <p>{"Too many matches, specify another filter"}</p>
        </div>
      );
    }
    else if (number === 1 && weatherForcast) {
      return (
        <div>
          <h1>{countries[0].name.official}</h1>
          {`Capital: ${countries[0].capital}`}<br />
          {`Area: ${countries[0].area} m2`}
          <p>{'Language:'}</p>
          <ul>{Object.keys(countries[0].languages).map((key) => <li key={key}>{countries[0].languages[key]}</li>)}</ul>
          <img src={countries[0].flags.png} />
          <h3>{`Weathe in ${countries[0].capital}`}</h3>
          <img alt="not found" width={'150px'} src={`https://openweathermap.org/img/wn/${weatherForcast.weather[0].icon}@2x.png`} /><br />
          {`temperature ${weatherForcast.main.temp} Celcius`}<br />
          {`wind ${weatherForcast.wind.speed} m/s`}<br />
        </div>
      );
    }
  }
  else {
    return (
      <div>
        <p>{'Please enter the country'}</p>
      </div>
    );
  }
};
