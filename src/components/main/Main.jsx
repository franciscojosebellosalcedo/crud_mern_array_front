import { useNavigate } from "react-router-dom";
import "./main.css";
import Item from "./Item";
import { useEffect } from "react";
import MessageAction from "../messageAction/MessageAction";
import { useContextUsears } from "../../context/ProviderUsers";
import { useContextMessage } from "../../context/ProviderMessage";

const Main = () => {
  const navigate=useNavigate();
  const {users,setUsers}=useContextUsears();
  const {setMessage,isOpen,setIsOpen,setNeedButtons}=useContextMessage();


  const goTo=(url)=>{
    navigate(url)
  }

  const requestGetAllUsers=async()=>{
    try {
      const request=await fetch(process.env.REACT_APP_URL_BASE+"/get-all-users",{
        method:"GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData=await request.json();
      setUsers([...responseData.data]);
    } catch (error) {
      setNeedButtons(false);
      setMessage({text:"Ocurrió un error",type:"error"});
      setIsOpen(!isOpen);
    }
  };

  useEffect(()=>{
    requestGetAllUsers();
  },[]);

  return (
    <section className="main">
      <div className="container">
        <h1 className="main__title">Registros de usuarios</h1>
        <button className="btn__success btn__add" onClick={()=>goTo("/crear")}>Agregar</button>
        
        <div className="container__users">
          {
            users.map((user)=>{
              return <Item item={user}/>
            })
          }
        </div>

      </div>
      <MessageAction/>
    </section>
  );
};

export default Main;
