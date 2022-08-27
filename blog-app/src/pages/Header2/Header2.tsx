import React , { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../Header/index.scss'
const Header2 = () => {
  const [active, setActive] = useState("nav_menu2")
  const [toggleIcon,setToggleIcon] = useState("nav_toggler")
  const navToggle = () => {
    active === 'nav_menu2' ? setActive("nav_menu2 nav_active") : setActive("nav_menu2");
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
              <NavLink to="/HalamanUtama" className="nav_link">Halaman utama</NavLink>
              </li>
            <li className="nav_item">
                <NavLink to="#" className="nav_link">Halaman Lain</NavLink>
              <ul>
                <li><NavLink to="/Jogging">Jogging</NavLink></li>
                <li><NavLink to="/Olahraga">olahraga</NavLink></li>
                <li><NavLink to="/PushUp">pushup</NavLink></li>
                <li><NavLink to="/Bulutangkis">Bulu Tangkis</NavLink></li>
                <li><NavLink to="/SepakBola">Sepak bola</NavLink></li>
              </ul>
            </li>
            <li className="nav_item">
             <NavLink to="/Kontak" className="nav_link">Kontak</NavLink>
              </li>
              <li className="nav_item">
             <NavLink to="/" className="nav_link">Keluar</NavLink>
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

export default Header2