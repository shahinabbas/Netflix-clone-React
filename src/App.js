import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Row from './Components/Row/Row';
import Footer from './Components/Footer/Footer';
import { action, originals, trending, comedy, romance, horror } from './Urls';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row url={originals} title='Netflix Originals' />
      <Row url={trending} title='Trendings' isSmall />
      <Row url={action} title='Action' isSmall />
      <Row url={comedy} title='Comedy' isSmall />
      <Row url={romance} title='Romance' isSmall />
      <Row url={horror} title='Horrer' isSmall />
      <Footer />
    </div>
  );
}

export default App;
