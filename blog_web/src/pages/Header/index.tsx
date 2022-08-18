import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

const Header : React.FC = () => {
  const [active, setActive] = useState("nav_menu")
  const [toggleIcon,setToggleIcon] = useState("nav_toggler")
  const navToggle = () => {
    active === 'nav_menu' ? setActive("nav_menu nav_active") : setActive("nav_menu");
    toggleIcon === 'nav_toggler' ? setToggleIcon("nav_toggler toggle") : setToggleIcon("nav_toggler")
  }
  return (
    <React.Fragment>
           <nav className='nav'>
        <p className='blog-header'>
          <h1 className='text-Blog'>Blog Gilang</h1>
          <img src="./Search.png" alt="" width={30} height={30} className='.nav__brand'/>
        </p>
             <ul className={active}>
                <li className="nav_item">
                  <NavLink to="/Pendaftaran" className="nav_link">
                    Pendaftaran
                  </NavLink>
                  </li>
                <li className="nav_item">
                 <NavLink to="/" className="nav_link">
                    Masuk
                </NavLink>
                  </li>
             </ul>
          <div className={toggleIcon} onClick={navToggle}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div> 
      </nav>
    </React.Fragment>
  )
}

export default Header