import React from 'react';
import './App.css';
import Push from "./components/Push";
import Pull from "./components/Pull";
import Legs from "./components/Legs";
import { Container } from "react-bootstrap";

import { GlobalProvider } from "./context/State";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <GlobalProvider>
      <Container className="text-center">
        <h1 className="font-weight-bold">Push Pull Legs Workout Generator</h1>
        <br />

        <div className="description">
          <p>You can generate a Push Pull or Leg day workout routine.</p>
        </div>

        <div>
          <Push />
          <br/>
          
         <Pull />
          <br/> 
          
          <Legs />
          <br/>
        </div>
      </Container>
    </GlobalProvider>
  );
}

export default App;
