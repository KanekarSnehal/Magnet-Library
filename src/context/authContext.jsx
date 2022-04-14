import { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "../reducer/index";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);
const authInitialState = {
  user: null,
  isAuthenticated: localStorage.getItem("token") ? true : false,
  error: null,
};
const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, authInitialState);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authState.isAuthenticated,
        user: authState.user,
        error: authState.error,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, useAuth, authInitialState };
