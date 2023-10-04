import React,{useState,useContext,createContext} from 'react'

export const ContextMessage=createContext();

const ProviderMessage = ({children}) => {
    const [message,setMessage]=useState({text:"",type:""});
    const [isOpen,setIsOpen]=useState(false);
    const [needButtons,setNeedButtons]=useState(false);
  return (
    <ContextMessage.Provider value={{message,setMessage,isOpen,setIsOpen,needButtons,setNeedButtons}}>
        {children}
    </ContextMessage.Provider>
  )
}

export const useContextMessage=()=>useContext(ContextMessage);

export default ProviderMessage