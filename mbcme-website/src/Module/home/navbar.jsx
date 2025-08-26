import '../../css/style.css';
import logo from '../../sources/logo.jpg';

export default function Navbar() {
  return (

<div className="max-w-100 w-100 h-10 navbar bg-base-100 shadow-sm">

  <div className="ml-24 h-100 w-100 navbar-start">
    Logo
  </div>
  <div className="navbar-center lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Kontakt</a></li>
      <li><strong>Home</strong></li>
      <li><a>Jobangebote</a></li>
    </ul>
  </div>
  <div className="navbar-end mr-24">
    <a className="btn">Produkte</a>
  </div>
  </div>

  );
};