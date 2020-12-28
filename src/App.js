import './App.css';
import React from 'react';
import SearchBox from './components/SearchBox';
import SearchResult from './components/SearchResult';
import { Container } from 'react-bootstrap';
import { UserProvider } from './UserContext';

function App() {

  return (
    <UserProvider>
    <Container>
    <h1>GitHub-API Search User</h1>
    <SearchBox />
    <SearchResult />
    </Container>
    </UserProvider>
  );
}

export default App;
