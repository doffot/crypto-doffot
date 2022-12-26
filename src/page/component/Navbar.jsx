import { useState } from "react";
import { IoClose, IoMenu, IoWallet } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginModal } from "../../components/LoginModal";
import { useModal } from "../../hooks";
import { startGoogleSignIn } from "../../store/auth";
import { LoginPage } from "../LoginPage";
import './navbar.css';

export const Navbar = () => {


    const { openDateModal } = useModal()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [click, setClick] = useState(false)

    const handleClick =()=>setClick(!click)

    const onClick = () =>{
        openDateModal()
        
    }

  return (
    <div className='navbar'>
            
    
        <div className="box_left">
            <div className="box_logo">
                <h3><span>D</span>offot <span>D</span>eFi</h3>
            </div>
        </div>
        <div className="box_center">
            <nav>
                <ul className={ click ? 'nav_menu active' : 'nav_menu'}>
                    <li>
                        <NavLink >Home</NavLink>
                    </li>
                    <li>
                        <NavLink>Top Criptos</NavLink>
                    </li>
                    <li>
                        <NavLink>Ahorre</NavLink>
                    </li>
                    <li>
                        <NavLink>Contactos</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
       <div className="box_right">
            <div className="btn_primary" onClick={onClick}>
                <IoWallet className="icon"/>
                <span> Cuenta</span>
            </div>
       </div>
       <div className="menu_movil" onClick={handleClick}>
       {click ? (<IoClose />) :(<IoMenu />)}
        
       </div>
    </div>
  )
}
