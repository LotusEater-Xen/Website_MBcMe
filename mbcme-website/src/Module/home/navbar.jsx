import '../../css/style.css';
import logo from '../../quellen/logo.jpg';

export default function Navbar() {
  return (

<div className="max-w-100 w-100 h-10 navbar bg-base-100 shadow-sm">

  <div className="ml-24 h-100 w-100 navbar-start">
    <img src={logo} className="w-60 object-center"/>
  </div>
  <div className="navbar-center lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li><strong>Item 2</strong></li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end mr-24">
    <a className="btn">Button</a>
  </div>
  </div>

  );
};