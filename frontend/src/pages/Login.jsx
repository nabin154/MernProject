import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const  {data}  = await axios.post(
        "http://localhost:5000/api/auth/login",
        JSON.stringify({
          email: user.email,
          password: user.password,
        }),
        config
      );
      setUser({ email: "", password: "" });
      localStorage.setItem("userInfo",JSON.stringify(data));
      navigate("/");
      console.log(data);

    }
     catch (error) {
      console.error("error in login");
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/login.png"
                  alt="regisration image"
                  width={500}
                  height={450}
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading">Login form</h1>
                <br />
                <form onSubmit={submitForm}>
                  <div>
                    <label htmlFor="email">email :</label>
                    <br />

                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      value={user.email}
                      required
                      autoComplete="off"
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password :</label>
                    <br />

                    <input
                      type="password"
                      name="password"
                      placeholder="enter your password"
                      id="password"
                      value={user.password}
                      required
                      autoComplete="off"
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button className="same-btn" type="submit">
                    login now{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
