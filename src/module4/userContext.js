import { createContext, useContext, useState } from 'react';
const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUsername] = useState(null);

  const logIn = () => {
    setIsLoggedIn(true);
    setUsername('Mango');
  };
  const logOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };
  return (
    <UserContext.Provider value={{ isLoggedIn, userName, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
