import './registeraccount.css'
import { useForm } from "../../../hooks";
import { useDispatch } from "react-redux";
import { startCreatingUserwithEmailPassword } from "../../../store/auth";
import { ImExit } from "react-icons/im";
import { FaSave, FaUserPlus } from "react-icons/fa";
import { SiderBarDashboard } from './SiderBarDashboard'
import avatar from '../../../assets/avatar.png'

const formdata = {
    email : '',
    password: '',
    displayName :'',
    telefono:'',
}

export const RegisterAccount = () => {


    const dispatch = useDispatch()

    const { email, password, displayName, telefono, onInputChange, formState } = useForm(formdata);

    const onSubmit = (e) =>{
        e.preventDefault()
    }

    const onSave = () =>{
        dispatch(startCreatingUserwithEmailPassword(formState))

    }

  return (
    <div className="register_account">
    <SiderBarDashboard />
    <div className="register_box">
        <div className="box_title">
            <FaUserPlus className="icon_1" />
            <h3>Crear Cuenta</h3>
        </div>
        <form onSubmit={onSubmit}>
        <div className="box_form">
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <div className="box_inputs">
            <div className="register_input">
                <span>Nombre o Nick</span>
                <input 
                type="text"
                name="displayName"
                value={displayName}
                onChange={onInputChange} 
                />
            </div>

            <div className="register_input">
                <span>Email</span>
                <input 
                type="email" 
                name="email"
                value={email}
                onChange={onInputChange} 
                />
            </div>
           
            <div className="register_input">
                <span>password</span>
                <input 
                type="password" 
                name="password"
                value={password}
                onChange={onInputChange} 
                />
            </div>
            <div className="register_input">
                <span>Telefono</span>
                <input 
                type="text" 
                name="telefono"
                value={telefono}
                onChange={onInputChange} 
                />
            </div>
            </div> 
            <button className="box_save" onClick={onSave} >
                <div className="btn_save">
                    <FaSave className="icon_save"/>
                    <span>Guardar</span>
                </div>
            </button>
            </div> 
        </form>
    </div>
</div>
  )
}
