import React, { useState } from "react";
import axios from "axios";
const Contact = () => {
  const [user, setUser] = useState({
    username:"",
    email: "",
    message: "",
  });
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(user);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        JSON.stringify({
          username: user.username,
          email: user.email,
          message: user.message,
        }),
        config
      );
      setUser({ username:"",email: "", message: "" });

      console.log("contact succesful", data);
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
                  src="/images/support.png"
                  alt="regisration image"
                  width={450}
                  height={450}
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Contact form</h1>
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
                    <label htmlFor="message">Message :</label>
                    <br />

                    <textarea
                      type="text"
                      name="message"
                      placeholder="enter your message"
                      id="message"
                      value={user.message}
                      required
                      autoComplete="off"
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button className="same-btn" type="submit">
                    Submit now{" "}
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

export default Contact;
