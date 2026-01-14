import "./Header.scss"
import logo from '../../helper/logo.png'; 
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
    <img src={logo} alt="" width="100px" />
    <Navbar/>
    </div>

  );
};

export default Header;
