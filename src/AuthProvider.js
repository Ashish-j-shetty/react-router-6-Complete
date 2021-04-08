import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeAuthApi } from "./fakeAPI/fakeAuthApi";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isLoggedIn, setLogin] = useState(false);

  useEffect(() => {
    const loginStatus = JSON.parse(localStorage?.getItem("login"));

    console.log({ loginStatus });
    loginStatus?.isUserLoggedIn && setLogin(true);
  }, []);

  async function loginUserWithCredentials(username, password) {
    try {
      const response = await fakeAuthApi(username, password);


      if (response.success) {
        setLogin(true);
        localStorage?.setItem(
          "login",
          JSON.stringify({ isUserLoggedIn: true })
        );
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function logout() {
    localStorage?.removeItem("login");

    setLogin(false);
    navigate("/");
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, loginUserWithCredentials, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
