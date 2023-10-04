import React from 'react'
import {useNavigate } from 'react-router-dom';
import { useContextUsears } from '../../context/ProviderUsers';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContextMessage } from '../../context/ProviderMessage';
import MessageAction from '../messageAction/MessageAction';

const Edit = () => {
  const navigate=useNavigate();
  const {userSelected}=useContextUsears();
  const {setMessage,setIsOpen,setNeedButtons}=useContextMessage();

  const [userEdited,setUserEdited]=useState(null);

  const goTo=()=>{
    navigate("/");
  }

  const handlerInputFormEdit=(e)=>{
    setUserEdited({...userEdited,[e.target.name]: e.target.value});
  }

  const editUserRequest = async (e) => {
    e.preventDefault();
      try {
        const request=await fetch(process.env.REACT_APP_URL_BASE+"/edit/"+userEdited.identity,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(userEdited)
        });
        const responseData=await request.json();
        if(!responseData.response){
          setMessage({text:responseData.message,type:"error"});
          setNeedButtons(false);
          setIsOpen(true);
          goTo();
        }else{
          setMessage({text:responseData.message,type:"ok"});
          setNeedButtons(false);
          setIsOpen(true);
        }
      } catch (error) {
        console.log(error);
        setMessage({text:"Error al editar al usuario",type:"error"});
        setNeedButtons(false);
        setIsOpen(true);
      }
  }

  useEffect(()=>{
    if(userSelected === null){
      goTo();
    }
    setUserEdited(userSelected);
  },[ ]);

  return (
    <div className="main">
    <div className="container ">
    <i class="uil uil-angle-left-b icon icon__back" onClick={()=>goTo()}></i>
      <h1 className="main__title">Editar registro</h1>
      <form className="form">
        <div>
          <label htmlFor="name">Nombre</label>
          <input id='name' value={userEdited?.name}  onInput={(e)=>handlerInputFormEdit(e)} className="input__form" type="text" name="name" placeholder="Nombre" />
        </div>

        <div>
          <label htmlFor="phone">Teléfono</label>
          <input id="phone" value={userEdited?.phone} onInput={(e)=>handlerInputFormEdit(e)} className="input__form" type="tel" name="phone" placeholder="Telefono" />
        </div>
        
        <div>
          <label htmlFor="identity">Identidad</label>
          <input id="identity" value={userEdited?.identity} readOnly  onInput={(e)=>handlerInputFormEdit(e)} className="input__form"type="text" name="identity" placeholder="Documento" />
        </div>

        <div className="buttons__form">
          <button className="btn__danger btn__form" onClick={()=>goTo()}>Cancelar</button>
          <button className="btn__success btn__form" onClick={(e)=>editUserRequest(e)}>Guardar</button>
        </div>
      </form>
    </div>
    <MessageAction/>
  </div>
  )
}

export default Edit