function WeatherTable({weather}) {

  console.log('weather',weather)
  return (
    <div className="weather-container">
      <table>
        <tbody>
          <tr>
            <th>
              <div className="table-header">Weather API Results</div>
            </th>
          </tr>
          <tr>
            <td colSpan="2">
              Weather in {weather?.location} at {weather?.time}
            </td>
          </tr>
          <tr>
            <td width="20px">
              <img src={weather?.icon_weather} width="120" height="120"/>
            </td>
            <td>
              <div>Current: {weather?.temperature_current}</div>
              <div>Low: {weather?.temperature_low}</div>
              <div>High: {weather?.temperature_high}</div>
              <div>Wind: {weather?.temperature_high}</div>
              <div>Humidity: {weather?.humidity}</div>
              <div>Wind: {weather?.wind}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default WeatherTable;
