import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import TextResult from './components/TextResult';
import Progressbar from './components/Progressbar';
import AddressInputForm from './components/AddressInputForm';
import MapResult from './components/MapResult';

class App extends Component {
  constructor() {
    super();

    this._getRestaurant = this._getRestaurant.bind(this);
    // this.getGeoUserAddress = this.getGeoUserAddress.bind(this);

      this.state = {
        showProgressbar:  false,
        showResults: false
      };


  }


  _getRestaurant(location) {

    this.setState({
      showProgressbar: !this.state.showProgressbar,
      showResults: !this.state.showResults
    });


    var lat =location.lat;//data from google api
    var lng = location.lng;
    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
      params: {
        key: 'AIzaSyCyYN3NAc4dMKq7PqupmsXkMd__yNYaT5s',
        location: `${lat} ${lng}`,
        radius: 1000,
        type: 'restaurant',

      }
    }).then(function(response){
      console.log(response);
    });
  } // när vi har fått tillbaka resultatet så är laddningen klar och då sätter

  render() {
      return (
          <div className="App">
              <Header/>
              <AddressInputForm getRestaurant={this._getRestaurant}/>
              <Progressbar showProgressbar={this.state.showProgressbar}/>
              {/* showResults blir props i själva componenten (progressbar, jag har döpt dom här, skickar med ett värde )*/}
              <TextResult/>
              <MapResult/>
              <Footer/>

          </div>
      );
  }
}



export default App;
