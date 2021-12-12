import Logo from '../../assets/thewhitehat.png';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <header>
      <NavBar/>
      <h1>The White Hat<img src={Logo} alt="Logo" className="logo"/></h1>
    </header>
  )
}

export default Header;
