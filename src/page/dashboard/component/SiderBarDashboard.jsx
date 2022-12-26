import { Link } from 'react-router-dom'
import { FaUserPlus } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import  './siderbardashboard.css'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../../store/auth';

export const SiderBarDashboard = () => {

    const dispatch = useDispatch();

    const onLogout = () =>{
      dispatch(startLogout())
    }

  return (
   <div className="menu_box">
        
        <div className="menu">
        <h1>dashboard</h1>
            <ul>
                <li>
                    <Link to='/dashboard' className='link_dash'>
                        <FaUserPlus />
                        <span>Crear cuenta</span>
                    </Link>
                </li>
                <li>
                    <Link className='link_dash'>
                        <FaUserPlus />
                        <span>Crear cuenta</span>
                    </Link>
                </li>
                <li>
                    <Link className='link_dash'>
                        <FaUserPlus />
                        <span>Crear cuenta</span>
                    </Link>
                </li>
                <li>
                    <Link className='link_dash'>
                        <FaUserPlus />
                        <span>Crear cuenta</span>
                    </Link>
                </li>
                <li>
                    <Link className='link_dash' onClick={onLogout}>
                        <ImExit />
                        <span>Salir</span>
                    </Link>
                </li>
            </ul>
        </div>
    
   </div>
  )
}
