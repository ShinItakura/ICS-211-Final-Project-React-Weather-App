import React from 'react';
import Title from './components/Title';
import GetWeather from './components/GetWeather';

class App extends React.Component{

  render(){
    return(
      <div>
        <Title />
        <GetWeather />
      </div>
    )
  }
}
export default App;
