import { useState } from "react";
import { NavLink } from "react-router-dom";

import { CgMenuGridR } from "react-icons/cg";
const NavBar = () => {

    const navlink=<>
    
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/course'>Course</NavLink></li>
        <li><NavLink to='/subscribe'>Subscribe</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/testimoni'>Testimoni</NavLink></li>
    </>


    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (button) => {
      setActiveButton(button);
    };
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="text-2xl lg:hidden">
       <CgMenuGridR/>
      </div>
      <ul  tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navlink}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Skill<span className="text-[#CB8461]">Shoot</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navlink}
    </ul>
  </div>
  <div className="navbar-end  gap-2">
  <a
        className={`btn ${activeButton === 'login' ? 'bg-[#CB8461]' : ''}`}
        onClick={() => handleButtonClick('login')}
      >
        Login
      </a>
      <a
        className={`btn ${activeButton === 'register' ? 'bg-[#CB8461]' : ''}`}
        onClick={() => handleButtonClick('register')}
      >
        Register
      </a>
  </div>
</div>
        </div>
    );
};



export default NavBar;