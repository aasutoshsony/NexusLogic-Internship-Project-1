import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';




const Navbar = () => {

    const [menu,setMenu] = useState("home");


    // const [menuOpen, setMenuOpen] = useState(false);

 
  return ( 
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        {/* <Link to ='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href= '#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Services</a>
        <a href= '#footer' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>About Us</a>
        <a href= '#footer' onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>Contact us</a> */}

      <li onClick={()=> {setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>} </li>
      {/* <li onClick={()=> {setMenu("menu")}}><Link style={{textDecoration:'none'}} to='#food-display'>Services</Link>{menu==="menu"?<hr/>:<></>} </li> */}
      <a href='#food-display' onClick={()=> {setMenu("menu")}}>Services{menu==="menu"?<hr/>:<></>} </a>
      <li onClick={()=> {setMenu("mobile-app")}}><Link style={{textDecoration:'none'}} to='About'>About Us</Link>{menu==="mobile-app"?<hr/>:<></>} </li>
      <li onClick={()=> {setMenu("contact")}}><Link style={{textDecoration:'none'}} to='Contact'>Contact Us</Link>{menu==="contact"?<hr/>:<></>} </li>


      </ul>
      <div className="navbar-right">
      {/* <button>Sign in</button> */}
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
            </div>
                <button>Sign in</button>
            </div>
        </div>
    
  )  
}

export default Navbar









