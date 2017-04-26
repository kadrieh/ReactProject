import React, { Component } from 'react';
import WeatherData from './WeatherData'

class WeatherContent extends Component {

  renderTableBody(currentData){
    return(
      <tbody>
      <tr>
        <td>{currentData.Current.temperature}</td>
        <td>{currentData.Today.temperature}</td>
        <td>{currentData.Tonight.temperature}</td>
        <td>{currentData.Tomorrow.temperature}</td>
      </tr>
      <tr>
        <td>{currentData.Current.summary}</td>
        <td>{currentData.Today.summary}</td>
        <td>{currentData.Tonight.summary}</td>
        <td>{currentData.Tomorrow.summary}</td>
      </tr>
      </tbody>
    )
  }

  renderTableHeaders(){
    return(
      <tr>
        <th>Current</th>
        <th>Today</th>
        <th>Tonight</th>
        <th>Tomorrow</th>
      </tr>
    )
  }

  render(){

      const { placeName } = this.props;

      const currentData = WeatherData[placeName];
      if(!currentData){
        return null;
      }
      return (
      <div className="weather-content">
      <h2>Weather in {placeName}</h2>

      <table>
        <thead>
        {this.renderTableHeaders()}
        </thead>
        <tbody>
          {this.renderTableBody(currentData)}
        </tbody>
      </table>

      </div>
    )
  }
}

export default WeatherContent;
