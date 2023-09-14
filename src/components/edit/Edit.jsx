import React from 'react'
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const navigate=useNavigate();

  const goTo=()=>{
    navigate("/")
  }

  return (
    <div className="main">
    <div className="container ">
    <i class="uil uil-arrow-circle-left icon icon__back" onClick={()=>goTo()}></i>
      <h1 className="main__title">Editar registro</h1>
      <form className="form">
        <input className="input__form" type="text" name="name" placeholder="Nombre" />
        <input className="input__form" type="tel" name="phone" placeholder="Telefono" />
        <input  className="input__form"type="text" name="document" placeholder="Documento" />
        <div className="buttons__form">
          <button className="btn__success btn__form">Guardar</button>
          <button className="btn__danger btn__form" onClick={()=>goTo()}>Cancelar</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Edit