import React from 'react';
import Title from './components/Title';
import GetWeather from './components/GetWeather';
import GetForecast from './components/GetForcast';

class App extends React.Component{

  render(){
    return(
      <div>
        <Title />
        <GetWeather />
        <GetForecast />
      </div>
    )
  }
}
export default App;
