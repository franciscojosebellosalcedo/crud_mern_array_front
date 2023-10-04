import { useContextMessage } from "../../context/ProviderMessage";
import "./messageAction.css";
const MessageAction = (props) => {
  const {message,isOpen,setIsOpen,needButtons}=useContextMessage();
  return (
    <div className={`container__modal ${isOpen===true ? 'see__modal':''}`}>
      <div className="modal">
      <i class="uil uil-times icon__modal" onClick={()=>setIsOpen(!isOpen)}></i>
        <h1 className="modal__title">Mensaje</h1>
        <p className="text" style={{color:message.type==="error" ? "red":"black"}}>{message.text}</p>
       {
        needButtons===true ?  <div className="container__buttons">
          <button className="btn__danger btn__modal" onClick={()=>setIsOpen(!isOpen)}>Cancelar</button>
          <button className="btn__success btn__modal">Aceptar</button>
        </div> :""
       }
      </div>
    </div>
  )
}

export default MessageAction