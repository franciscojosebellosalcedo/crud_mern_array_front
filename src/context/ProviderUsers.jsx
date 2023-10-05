import React,{ useState,createContext } from "react";
import { useContext } from "react";
export const ContextUsers = createContext();
const ProviderUsers = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userSelected,setUserSelected] = useState(null);
  return <ContextUsers.Provider value={{users, setUsers,userSelected,setUserSelected}}>{children}</ContextUsers.Provider>;
};

export const useContextUsears=()=>useContext(ContextUsers);
export default ProviderUsers;