import { createContext, useContext, useState, useEffect } from "react";

const userContext = createContext();

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();
  

  useEffect(() => {
    const user = localStorage.getItem("userInfo");
    setUserInfo(JSON.parse(user));
  },[]);

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
