import { useState } from 'react';
import Modal from 'react-modal';
import { GrGoogle, GrKey, GrMailOption } from "react-icons/gr";
import { MdEmail, MdOutlineCancel, MdVpnKey } from "react-icons/md";
import './modal.css'
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startCreatingUserwithEmailPassword, startloginWithEmailPassword } from '../store/auth/thunks';
import { useModal } from '../hooks';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  const formdata = {
    email : '',
    password: '',
    displayName :'',
    telefono:'',
}

export const RegisterModal = () => {
    const onCloseModal = () =>{
        closeDateModal()
        
      }


      const {email, password,displayName,telefono, onInputChange,formState} = useForm(formdata)

      const dispatch = useDispatch()

    

    const onSave = () =>{
        dispatch(startCreatingUserwithEmailPassword(formState))

    }

      
      const onSubmit =(e) =>{
        e.preventDefault()

      }

      const { isDateModalOpen, closeDateModal } = useModal()
      

console.log('entro register');

    return(
      <div className="login_modal">
   <Modal
        isOpen={isDateModalOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
   >
        <div className="close_icon" onClick={onCloseModal} >
            <MdOutlineCancel />
        </div>
        <div className="container">
                <h1>Crear Cuenta</h1>
                <div className="box_form">
                    <form onSubmit={onSubmit}>
                        <div className="container_input">
                        <div className="box_input">
                            <MdEmail className='icon_input' />
                            <input
                            type="text" 
                            placeholder='Nick o nombre' 
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            />
                         </div>

                         <div className="box_input">
                            <MdEmail className='icon_input' />
                            <input
                            type="text" 
                            placeholder='Telefono' 
                            name='telefono'
                            value={telefono}
                            onChange={onInputChange}
                            />
                         </div>



                            <div className="box_input">
                                <MdEmail className='icon_input' />
                                <input
                                 type="email" 
                                 placeholder='email' 
                                 name='email'
                                 value={email}
                                 onChange={onInputChange}
                                 />
                            </div>
                            <div className="box_input">
                                <MdVpnKey  className='icon_input' />
                                <input 
                                type="password" 
                                placeholder='contraseña' 
                                name='password'
                                value={password}
                                onChange={onInputChange}
                                />
                            </div>
                        </div>
                        <div className="box_button">
                            <button 
                            className='btn_login primary'
                            onClick={onSave}
                            >Entrar</button>
                           {/*  <button className='btn_login light'> <GrGoogle /> Google </button> */}
                        </div>
                        <span className='crear_cuenta'>Crear Cuenta</span>
                    </form>
                </div>
        </div>
        
   </Modal>
   </div> 
   )
}
