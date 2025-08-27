import '../../css/style.css';
import logo from '../../sources/logo.jpg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (

<div className="max-w-100 w-100 h-10 navbar bg-base-100 shadow-sm">

  <div className=" h-100 w-100 navbar-start">
    <img src={logo} className="w-60 object-center"/>
  </div>
  <div className="  h-10 navbar bg-base-100 shadow-sm">
  <div className="navbar-center ">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/contact'>Kontakt</Link></li>
      <li><strong>Jobangebote</strong></li>
      <li><Link to='/'>Home</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Produkte</a>
  </div>
  </div>
  </div>

  );
};