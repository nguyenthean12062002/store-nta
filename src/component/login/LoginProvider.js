import React, { createContext, useState } from "react";
export const LoginContext = createContext({ name: "", auth: false });
const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", auth: true });
  //
  const login = (name) => {
    setUser((user) => ({
      name: name,
      auth: true,
    }));
    localStorage.setItem("name", name);
  };
  const logout = (name) => {
    setUser((user) => ({
      name: "",
      auth: false,
    }));
    localStorage.removeItem("name", name);
  };
  return (
    <LoginContext.Provider value={{ user, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
