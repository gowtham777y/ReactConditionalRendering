import React from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

function registerFunction(userIsRegistered){
  if (userIsRegistered){
    return <Button name="Login"/>
  } else {
    return <div>
    <Input type="password" placeholder="Confirm"/>
    <Button name="Register"/>
    </div>
  }
}

function Form(props) {
  return (
    <form className="form">
      <Input 
      type="text"
      placeholder="Username"
       />

       <Input 
       type="password"
       placeholder="Password"
       />

       {registerFunction(props.register)}
    </form>
  );
}

export default Form;
