import React, { useState } from "react";
import axios from "axios";
import { useUser } from "../Context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [message, setMessage] = useState('');
  
  const {userInfo} = useUser();
  const handleInput = (e) => {
  
    let value = e.target.value;

    setMessage(value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
     const config = {
       headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${userInfo.token}`,
       },
     };
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/form/contact",
        JSON.stringify({
          username: userInfo.username,
          email: userInfo.email,
          message: message,
        }),
        config
      );
      setMessage('');
   toast.success("Submitted Successfully!", {
    fontSize:"20px",
     position: "top-center",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "colored",
   });
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
                <ToastContainer />
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
                      value={userInfo ? userInfo.username : ""}
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
                      value={userInfo ? userInfo.email : ""}
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
                      value={message}
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
