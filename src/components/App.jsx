import React from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form register={userIsRegistered}/>
    </div>
  );
}

export default App;
