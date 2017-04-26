import React, { Component } from 'react';
import places from './constants/Places';

class PlaceNav extends Component {

  onClick(text){
    //console.log(this);//not needed

    this.props.onPlaceClick(text)
  }

  renderPlace(){
      var elements = [];

      for (var place in places){
      //  console.log(place);

        //place(place).text
        const {text} = places[place];

        elements.push(
          <h2 onClick={this.onClick.bind(this, text)}>
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
