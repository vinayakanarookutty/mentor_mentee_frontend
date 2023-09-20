import { createContext, useState } from "react";
import { useQuery } from "react-query";
export const UserContext = createContext(INITIAL_STATE);
function UserContextProvider({ children }) {

    const INITIAL_STATE = {
        user: JSON.parse(localStorage.getItem("mentor_mentor-user"))?.username || null,
        setUser: () => {},
    
        email: JSON.parse(localStorage.getItem("mentor_mentor-user"))?.email || null,
        
      };
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("mentor_mentor-user"))?.username || null
      );
      const [email, setEmail] = useState(
        JSON.parse(localStorage.getItem("mentor_mentor-user"))?.email || null
      );
  return (
    <UserContext.Provider
    value={{
      ...INITIAL_STATE,
      user,
      setUser: setUser,
      email,
    }}
  >
    {children}
  </UserContext.Provider>
  )
}

export default UserContext