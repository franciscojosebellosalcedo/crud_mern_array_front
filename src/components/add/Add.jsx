import { useNavigate } from "react-router-dom";
import "./add.css";
import { useState } from "react";
import { useContextMessage } from "../../context/ProviderMessage";
import MessageAction from "../messageAction/MessageAction";

const Add = () => {
  const navigate=useNavigate();
  const [newUser,setNewUser]=useState({
    name:"",
    identity:"",
    phone:""
  });
  const {setMessage,isOpen,setIsOpen,setNeedButtons}=useContextMessage();

  const handlerInput=(e)=>{
    setNewUser({
      ...newUser,[e.target.name]:e.target.value
    });
  }

  const addUserRequest=async (e)=>{
    e.preventDefault();
    try {
      const request=await fetch(process.env.REACT_APP_URL_BASE+"/create-user",{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(newUser)
      });

      const responseData=await request.json();
      if(responseData.response){
        setNeedButtons(false);
        setMessage({text:responseData.message,type:"ok"});
        setIsOpen(!isOpen);
        setNewUser({name:'',identity:'',phone:''});
      }else{
        setNeedButtons(false);
        setMessage({text:responseData.message,type:"error"});
        setIsOpen(!isOpen);
      }
    } catch (error) {
      setMessage({text:"Ocurrió un error",type:"error"});
      setIsOpen(!isOpen)
    }
  }
  const goTo=()=>{
    navigate("/")
  }
  return (
    <div className="main">
      <div className="container ">
      <i class="uil uil-angle-left-b icon icon__back" onClick={()=>goTo()}></i>
        <h1 className="main__title">Nuevo registro</h1>
        
        <form className="form">
          <div>
            <label htmlFor="name">Nombre</label>
           <input id="name" value={newUser.name} onInput={(e)=>handlerInput(e)} className="input__form" type="text" name="name" placeholder="Nombre" />
          </div>

          <div>
            <label htmlFor="phone">Teléfono</label>
            <input id="phone" value={newUser.phone} onInput={(e)=>handlerInput(e)} className="input__form" type="number" name="phone" placeholder="Telefono" />
          </div>

          <div>
            <label htmlFor="identity">Identidad</label>
            <input id="identity" value={newUser.identity} onInput={(e)=>handlerInput(e)}  className="input__form"type="number" name="identity" placeholder="N. documento" />
          </div>
          
          <div className="buttons__form">
            <div></div>
            <button className="btn__success btn__form" onClick={(e)=>addUserRequest(e)}>Guardar</button>
          </div>
        </form>
      </div>
      <MessageAction/>
    </div>
  );
};

export default Add;
