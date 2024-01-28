import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [formdata, setFormdata] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  }
  return (
    <UserContext.Provider
      value={{
        formdata,
        error,
        setError,
        loading,
        setLoading,
        handleChange,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserProvider, UserContext };
