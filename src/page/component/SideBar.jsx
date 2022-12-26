import { TbBuildingBank } from "react-icons/tb";
import { Link } from "react-router-dom";
import { IoBag, IoPerson } from "react-icons/io5";
import { BiHistory, BiTransfer } from "react-icons/bi";
import { ImExit } from "react-icons/im";
import  './siderbar.css'
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth";

export const SideBar = () => {
  const { displayName } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  console.log(displayName);
  const onLogout = () =>{
    dispatch(startLogout())
  }

  return (
    <div className="sidebar">
        <div className="side_top">
        
            <div className="box_logo">  
                <TbBuildingBank className="img_logo"/>
                <h3><span>D</span>offot <span>D</span>eFi</h3>
                <p>{displayName}</p>
            </div>            
        </div>

        <div className="box_menu">
              <ul className="spr">
                <li >
                  <Link to='' > 
                    <div className="box_link">
                        <IoPerson className="icon"/>
                        <p>Cuenta</p>
                    </div> 
                  </Link>
                </li>
                <li>
                  <Link to=''> 
                    <div className="box_link">
                        <IoBag className="icon"/>
                        <p>Portafolio</p>
                    </div> 
                  </Link>
                </li>
                <li>
                  <Link to=''> 
                    <div className="box_link">
                        <BiTransfer className="icon"/>
                        <p>Transferir</p>
                    </div> 
                  </Link>
                </li>
                <li>
                  <Link to=''> 
                    <div className="box_link">
                        <BiHistory className="icon"/>
                        <p>Historial</p>
                    </div> 
                  </Link>
                </li>
                <li>
                  <Link to='/home'> 
                    <div className="box_link " onClick={onLogout}>
                        <ImExit className="icon"/>
                        <p>Salir</p>
                    </div> 
                  </Link>
                </li> 
              </ul>
            </div>
           { /* <Link to=''> 
            <div className="box_link exit">
                <ImExit className="icon"/>
                <p>Salir</p>
            </div> 
          </Link> */}

            
            
    </div>
   
  )
}
