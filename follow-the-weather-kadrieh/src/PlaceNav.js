import React, { Component } from 'react';
import places from './constants/Places';

class PlaceNav extends Component {

  onClick(value){
    //console.log(this);//not needed

    this.props.onPlaceClick(value)
  }

  renderPlace(){
      var elements = [];

      for (var place in places){
      //  console.log(place);

        //place(place).text
        const {text, value} = places[place];

        elements.push(
          <h2 onClick={this.onClick.bind(this, value)}>
            {text}
          </h2>
        )
      }
      return elements;
  }
  render() {
    return(

      <div className="place-nav">
        {this.renderPlace()}
      </div>
    );
  }


}
export default PlaceNav;
