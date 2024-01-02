import React, { useEffect, useState } from "react";
import "../App.css"; 

const Services = () => {
  const [servicesData,setServicesData] = useState();




 useEffect(() => {
   const fetchServices = async () => {
     try {
       const response = await fetch("http://127.0.0.1:5000/api/service", {
         method: "GET", 
       });

       if (response) {
         const data = await response.json();
         setServicesData(data);
       } else {
         console.log("Error fetching services:", response.statusText);
       }
     } catch (error) {
       console.error("Error fetching the services:", error.message);
     }
   };

   fetchServices();
 }, []);
  return (
    <div className="services-home">
      <h2 className="page-title">Services</h2>
      <div className="cards-container">
        {servicesData && servicesData.map((service, index) => (
          <div key={index} className="card">
            <img
              src={"images/design.png"}
              alt={"service"}
              className="card-image"
            />
            <div className="card-details">
              <h3 className="card-title">{service.service}</h3>
              <p className="card-description">{service.description}</p>
              <p className="card-info">Price: ${service.price}</p>
              <p className="card-info">Provider: {service.provider}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
