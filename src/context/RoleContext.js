import React, { createContext, useState } from 'react';

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);
  return (
    <RoleContext.Provider value={{ roles, setRoles }}>
      {children}
    </RoleContext.Provider>
  );
};
