import React, { Component } from 'react';
import sun from './sun.png';
import Common from './constants/Common';
import WeatherContent from './WeatherContent';
import PlaceNav from './PlaceNav';
import './App.css';

const App = React.createClass( {

  getInitialState(){
    return{
      selectedPlace:''
    }
  },

  onPlaceClick(text){
    console.log(this);

    this.setState({
      selectedPlace: text
    })
  },

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={sun} className="App-logo" alt="logo" />
          <h2>{Common.APP_TITLE}</h2>
        </div>

        < PlaceNav onPlaceClick={this.onPlaceClick.bind(this)} />

        <WeatherContent placeName={this.state.selectedPlace}/>



      </div>
    );
  }
})

export default App;
