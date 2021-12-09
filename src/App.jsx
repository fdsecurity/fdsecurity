import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './thewhitehat.png';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <img src={Logo} alt="Logo" className="logo"/>
        </header>
      <ItemListContainer greeting="Bienvenido a White Hat, Asesoria en Seguridad Informática"/>
      <Footer/>
    </div>
  );
}

export default App;
