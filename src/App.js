import logo from './logo.svg';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WeatherTable from './components/WeatherTable';
import Footer from './components/Footer';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const Fetchdata = () => {
      fetch(
        `https://cdn.contentstack.io/v3/content_types/home/entries/blt0596923090254e3a?environment=dev&include[]=menu&include_fallback=true`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            api_key: "bltd455eb0bd3a0183f",
            access_token: "csa342d274dd6df092b2abb941",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data.entry);
          setLoading(false);
        });
    };
    Fetchdata();
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  if (!data) {
    return <div className="App">Loading...</div>;
  }

  console.log(data)

  return (
    <div className="App">
        <Navigation props={data.menu}></Navigation>
        <Hero props={data.hero}></Hero>
        <WeatherTable></WeatherTable>
        <Footer></Footer>
    </div>
  );
}

export default App;
