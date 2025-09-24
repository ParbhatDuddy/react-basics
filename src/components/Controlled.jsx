import React, { useState, useRef, useEffect } from "react";

const Controlled = () => {
  const [fullname, setFullName] = useState(""); // controlled input
  const emailRef = useRef(null); // uncontrolled input

  const handleChange = (e) => {
    setFullName(e.target.value);
  };

  const handleSubmit = () => {
    alert("Full Name: " + fullname + "\nEmail: " + emailRef.current.value);
  };
 const handleFocus = () => {
     emailRef.current.focus();
  };
  useEffect(()=>{
    console.log("hello")
  },[handleFocus,handleChange])

  return (
    <div>
      <h2>Controlled + Uncontrolled Example</h2>

      {/* Controlled input */}
      <input
        type="text"
        onChange={handleChange}
        value={fullname}
        placeholder="Enter your Full Name"
      />

      {/* Uncontrolled input */}
      <input
        type="text"
        ref={emailRef}
        placeholder="Enter your Email"
      />

      <button onClick={handleSubmit}>Submit</button><br />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default Controlled;
