import React, { useState } from "react";
import "./CSS/AdminServices.css";
import { useUser } from "../../Context/UserContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminServices = () => {
  const { userInfo } = useUser();
  const [formData, setFormData] = useState({
    service: "",
    description: "",
    price: "",
    provider: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "http://127.0.0.1:5000/api/service",
        JSON.stringify(
          {
            service: formData.service,
            description: formData.description,
            price: formData.price,
            provider: formData.provider,
          }),
          config
        
      );
       toast.success("Submitted Successfully!", {
         style: {
           fontSize: "20px",
         },
         position: "top-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
       });
    
        console.log("successfully added",data);
    
      
    } catch (error) {
      console.log("error adding the services ", error);
    }
  };

  return (
    <div className="services-container">
      <div className="input-fields">
        <label htmlFor="service">Service :</label>
        <input
          type="text"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-fields">
        <label htmlFor="Description">Description : </label>
        <textarea
          type="text"
          name="description"
          required
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="input-fields">
        <label htmlFor="price">price :</label>
        <input
          type="text"
          name="price"
          required
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div className="input-fields">
        <label htmlFor="provider">provider :</label>
        <input
          type="text"
          name="provider"
          required
          value={formData.provider}
          onChange={handleChange}
        />
      </div>
      <button className="btn" onClick={handleSubmit}>
        Add service
      </button>
      <ToastContainer />
    </div>
  );
};

export default AdminServices;
