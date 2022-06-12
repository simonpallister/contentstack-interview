import logo from './logo.svg';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WeatherTable from './components/WeatherTable';
import Footer from './components/Footer';
import Banner from './components/Banner'
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const Fetchdata = () => {
      fetch(
        `https://cdn.contentstack.io/v3/content_types/home/entries/bltcac919b92b832d92?environment=dev&include[]=menu&include_fallback=true`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            api_key: "bltb4126083ff1865f7",
            access_token: "csff43e17b65e174807982ac2e",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data.entry);
          setLoading(false);
        });
    };

    const FetchWeather = () => {
    fetch(
      'https://mjgh1cx0le.execute-api.us-west-1.amazonaws.com/default/weatherAPI',
      {
        method: "GET",
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setWeatherData(data);
      });
    }

    Fetchdata();
    FetchWeather();

  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  if (!data || !weatherData) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
        <Navigation props={data.menu}></Navigation>
        <Banner content={data.modal}></Banner>
        <Hero props={data.hero}></Hero>
        <WeatherTable weather={weatherData.weather}></WeatherTable>
        <Footer></Footer>
    </div>
  );
}

export default App;
