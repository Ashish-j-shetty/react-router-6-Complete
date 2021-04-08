import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";

export function Login() {
  const { isLoggedIn, loginUserWithCredentials } = useAuth();

  const { state } = useLocation();

  const navigate = useNavigate();

  const [userCredential, setUserCredential] = useState({
    username: "",
    password: ""
  });

  function loginData(evt) {
    setUserCredential((userCredential) => ({
      ...userCredential,
      [evt.target.name]: evt.target.value
    }));
  }

  return (
    <div>
      <h3>Log in</h3>
      <form onSubmit={loginHandler}>
        <div>
          <label>UserName</label>{" "}
          <input
            type="text"
            name="username"
            onChange={(evt) => loginData(evt)}
          />
        </div>
        <div>
          <lable>Password</lable>{" "}
          <input
            type="password"
            name="password"
            onChange={(evt) => loginData(evt)}
          />
        </div>

        <input type="submit" value={isLoggedIn ? "Logged In" : "Login"} />
      </form>
    </div>
  );

  function loginHandler(evt) {
    evt.preventDefault();
    const { username, password } = userCredential;

    loginUserWithCredentials(username, password);

    // 2: navigate to the page we were going to before you sent us to /login page
    // navigate(state?.from ? state.from : "/");
  }
}
