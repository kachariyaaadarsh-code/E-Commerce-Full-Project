import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  // login function
  const login = (username, password) => {

    if (username === "admin" && password === "1234") {

      setUser(username);

    } else {

      alert("Invalid login");

    }

  };

  // logout
  const logout = () => {

    setUser(null);

  };

  return (

    <AuthContext.Provider value={{ user, login, logout }}>

      {children}

    </AuthContext.Provider>

  );

}

export default AuthProvider;
