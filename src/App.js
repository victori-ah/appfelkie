import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/counter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer greeting={"Productos"}></ItemListContainer>
      <Counter />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
