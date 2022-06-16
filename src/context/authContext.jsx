import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    authToken: localStorage.getItem("magnetLibraryToken") || null,
    authUser: JSON.parse(localStorage.getItem("magnetLibraryUser")) || null,
    loading: false,
  });

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, useAuth };
