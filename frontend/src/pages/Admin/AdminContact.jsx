import React, { useDebugValue, useEffect, useState } from "react";
import './CSS/AdminContact.css'
import {useNavigate} from 'react-router-dom';
import {useUser} from '../../Context/UserContext';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const AdminContact = () => {
  const navigate = useNavigate();
  const { userInfo } = useUser();
  const [contact , setContact ]= useState();
 


 useEffect(() => {
   const getContacts = async () => {
     await fetch("http://localhost:5000/api/form/contact", {
       headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${userInfo.token}`,
       },
     })
       .then((res) => res.json())
       .then((data) => setContact(data));
   };
   getContacts();
 }, [navigate]);




  const handleDelete = async(id,e)=>{

    const config ={
      headers:{
        Authorization:`Bearer ${userInfo.token}`,
      },
    };
    const {data} = await axios.delete(`http://localhost:5000/api/form/contact/${id}`,config);

         setContact(data);
    toast.success("Deleted Successfully!", {
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
  }

 




  return (
    <div className="contact-container">
      <div>
        <table className="table-main">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contact &&
              contact.map((contact, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>{contact.username}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={(e) => handleDelete(contact._id, e)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};


export default AdminContact;
