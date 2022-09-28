import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/counter';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer greeting={"Hola!"}></ItemListContainer>
      <Counter />
    </div>
  );
}

export default App;
