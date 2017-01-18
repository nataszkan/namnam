import React, { Component } from 'react';
import './App.css';
import './css/style.css';


import Header from './components/Header';
import Progressbar from './components/Progressbar';
import Footer from './components/Footer';
import TextResult from './components/TextResult';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Progressbar/>
                <TextResult/>
                <Footer/>
            </div>
        );
    }
}

export default App;
