import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home greetings="WhiteHat, Seguridad de la Informacion y Comunicaciones"/>}/>
          <Route  
            path="/all" 
            element={<ItemListContainer greetings="WhiteHat, Seguridad de la Informacion y Comunicaciones"/>}/>
          <Route  
            path="/category/:idCategory" 
            element={<ItemListContainer/>}/>
          <Route  
            path="/details/:idProd"
            element={<ItemDetailContainer/>}/>
          <Route  
            path="/cart" 
            element={<Cart/>}/>
            <Route  
            path="*" 
            element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
