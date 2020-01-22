import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "61e594f45884c7b36690c6780750ce47";

class App extends React.Component {
  
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  }


  render(){
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
};

export default App;