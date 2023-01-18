import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import DataList from "./components/DataList";
import LoginContext from "./context/login-context";

import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("Unknown user");

  const logoutHandler = () => {
    setName("Unknown user");
    setIsLogin(false);
  };

  return (
    <LoginContext.Provider
      value={{
        loginState: isLogin,
        enteredName: name,
        changeLoginState: setIsLogin,
        changeEnteredName: setName,
      }}
    >
      <div className="App">
        <header className="App-header">
          <div> Web site</div>
          <div className="welcome">
            <p>Welcome, {name} </p>
            <button onClick={logoutHandler}>Logout</button>
          </div>
        </header>

        {isLogin === true ? <DataList /> : <LoginForm />}
      </div>
    </LoginContext.Provider>
  );
}

export default App;
