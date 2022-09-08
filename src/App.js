import { useState } from "react";

const validatePassword = (password) => {
  const withoutSpaces = password.trim();

  const passwordAsArray = withoutSpaces.split("");

  const hasNumber = passwordAsArray.some((character) => {
    if (isNaN(character)) {
      return false;
    } else {
      return true;
    }
  });
  if (withoutSpaces.length > 5 && hasNumber) {
    return true;
  } else {
    return false;
  }
 };

const validateUserName = (userName) => {
  const withoutSpaces = userName.trim();
  if (withoutSpaces.length > 2) {
    return true;
  } else {
    return false;
  }
};

 



function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const isUsernameValid = validateUserName(userName);
    const isPasswordValid = validatePassword(password);
    
    if (!isPasswordValid || !isUsernameValid) {
      setErrors(true)
      console.log("hay erro")
    } else {
      setErrors(false)
    }
  };
 

  return (
    <div className="App">
     <h1>Dale loco</h1>
     <form onSubmit={onSubmitForm} aria-label="form">
        <input
            placeholder="Nombre de usuario"
            value={userName}
            onChange={onChangeUserName}
          />
        <input
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
        />
        {errors ? <p aria-label="error-message">Please check the info again</p> : null}
        <button type="submit">like</button>
     </form>
    </div>
  );
}

export default App;
