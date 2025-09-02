import '../../css/style.css';
import logo from '../../sources/logo.jpg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (

<div className="  h-10 navbar bg-base-100 shadow-sm">

  <div className=" navbar-start">
    Logo
  </div>
  <div className="navbar-center ">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><strong>Kontakt</strong></li>
      <li><Link to='/career'>Jobangebote</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Produkte</a>
  </div>
  </div>
  );
};