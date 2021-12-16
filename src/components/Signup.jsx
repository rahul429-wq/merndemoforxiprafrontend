import React, { useState } from "react";
import "./Mycss.css";

const Signup = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  const [msg, setmsg] = useState("");
  const [color, setcolor] = useState("#F05454");

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
    // setuser(e.target.value);
  };
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      setmsg("Invalid registration 👎");
      setcolor("#F05454");
      // window.alert("invalid registration");
      console.log("invalid");
    } else {
      setmsg("registration Succcessfull 👍");
      // window.alert("succesfull register (data inserted)");
      console.log("succesfull");
      setcolor("#1C7947");
      // history.push();
    }
  };

  return (
    <>
      <form method="POST">
        <h1>Register</h1>
        <div className="box">
          <input
            type="text"
            value={user.name}
            onChange={handleInputs}
            name="name"
            id="name"
            placeholder="Name"
          />
        </div>
        <br />
        <div className="box">
          <input
            type="text"
            value={user.email}
            onChange={handleInputs}
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <br />
        <div className="box">
          <input
            type="text"
            value={user.phone}
            onChange={handleInputs}
            name="phone"
            id="phone"
            placeholder="Phone"
          />
        </div>
        <br />
        <div className="box">
          <input
            type="text"
            value={user.work}
            onChange={handleInputs}
            name="work"
            id="work"
            placeholder="Work"
          />
        </div>

        <br />
        <div className="box">
          <input
            type="text"
            value={user.password}
            onChange={handleInputs}
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <br />
        <div className="box">
          <input
            type="text"
            value={user.cpassword}
            onChange={handleInputs}
            name="cpassword"
            id="cpassword"
            placeholder="Confirm Password"
          />
        </div>
        <br />
        <div className="box " style={{ border: "none" }}>
          <input
            type="submit"
            value="register"
            name="btn"
            id="btn"
            onClick={postData}
          />
        </div>
        <p style={{ color: `${color}` }} id="msg">
          {msg}
        </p>
      </form>
    </>
  );
};

export default Signup;
