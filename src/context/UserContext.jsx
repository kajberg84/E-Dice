import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [user, setUser] = useState({});

  return (
    <>
      <UserContext.Provider
        value={{
          loggedInUser,
          setLoggedInUser,
          user,
          setUser,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
