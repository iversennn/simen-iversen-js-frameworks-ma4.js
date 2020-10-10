import React from 'react';
import Home from './components/home/Home';
import './sass/App.scss';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <h1>Noroff MA4</h1>
      <Home/>
    </Container>
  );
}

export default App;
