import { IoPersonRemoveSharp } from 'react-icons/io5'
import './contenido.css'
import imagen1 from '../../assets/doffotdefi1.png'

export const Contenido = () => {
  return (
    <div className="contenido">
        <div className="container">
            <div className="left">
                <p>Ahorre en Criptomoneda</p>
                <h1>Invierta en Criptomonedas, unase a nuestro fondo </h1>
                <p>Compre, Venda y ahorre en Criptos</p>
                <div className="btn_primary">
                    <span>Solicitar Cuenta</span>
                </div>
            </div>

            <div className="right">
                <div className="box_img">
                    <img src={imagen1} alt="" />
                </div>
            </div>
        </div>
    </div>
    
  )
}
