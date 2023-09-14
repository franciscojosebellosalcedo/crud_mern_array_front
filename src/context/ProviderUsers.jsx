import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const ContextUsers = createContext();

const ProviderUsers = ({ children }) => {
  const [users, setUsers] = useState([]);
  return <ContextUsers.Provider value={{users, setUsers}}>{children}</ContextUsers.Provider>;
};

export const useContextUsers = useContext(ContextUsers);

export default ProviderUsers;
