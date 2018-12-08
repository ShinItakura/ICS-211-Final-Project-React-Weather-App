import React from 'react';
import Title from './components/Title';
import GetWeather from './components/GetWeather';
import GetForecast from './components/GetForcast';
import Footer from './components/Footer';

class App extends React.Component{

  render(){
    return(
      <div>
        <Title />
        <GetWeather />
        <GetForecast />
        <Footer />
      </div>
    )
  }
}
export default App;
