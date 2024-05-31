import React, { createContext, useState } from "react";
export const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", auth: null });
  const login = (name) => {
    setUser(() => ({
      name: name,
      auth: true,
    }));
    localStorage.setItem("name", name);
  };
  const logout = (name) => {
    setUser(() => ({
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
