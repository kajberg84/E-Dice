import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Usertoken state. undefined if not in localstorage
  const [userToken, setUserToken] = useState(() => {
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("userToken")) {
        const storageToken = window.localStorage.getItem("userToken");
        return JSON.parse(storageToken);
      }
      return "";
    }
  });

  // setting userToken to LocalStorage
  function setUserTokenLocalStorage(token) {
    if (typeof window !== "undefined" && token !== "") {
      window.localStorage.setItem("userToken", JSON.stringify(token));
      setUser(token);
    } else {
      window.localStorage.removeItem("userTokens");
    }
  }

  // Updating usertoken if changed/refreshed
  useEffect(() => {
    setUserTokenLocalStorage(userToken);
  }, [userToken]);

  return (
    <>
      <UserContext.Provider
        // value={{
        //   userValue: [user, setUser],
        //   tokenValue: [userToken, setUserToken],
        // }}
        value={{
          user,
          setUser,
          userToken,
          setUserToken,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
