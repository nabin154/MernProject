import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const userContext = createContext();

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userInfo");
    setUserInfo(JSON.parse(user));
  },[navigate]);

  return (
    <userContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => {
  return useContext(userContext);
};

export default UserProvider;
