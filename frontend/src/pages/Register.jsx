import React, { useState } from "react";
import axios from "axios";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
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
      const { data } = await axios.post(
        "http://127.0.0.1:5000/api/auth/register",

        JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          password: user.password,
        }),
        config
      );
      setUser({ username: "", email: "", phone: "", password: "" });
      console.log(data);
    } catch (error) {
      console.error("error in registratioon");
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
                  src="/images/register.png"
                  alt="regisration image"
                  width={500}
                  height={450}
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />
                <form onSubmit={submitForm}>
                  <div>
                    <label htmlFor="username">username :</label>
                    <br />

                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="uername"
                      value={user.username}
                      required
                      autoComplete="off"
                      onChange={handleInput}
                    />
                  </div>

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
                    <label htmlFor="phone">phone :</label>
                    <br />

                    <input
                      type="number"
                      name="phone"
                      placeholder="enter your phone"
                      id="phone"
                      required
                      value={user.phone}
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
                  <button type="submit" className="same-btn">Sign Up now </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
