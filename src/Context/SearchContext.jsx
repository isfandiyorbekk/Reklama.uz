import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(value) {
    setSearch(value);

    if (window.location.pathname !== "/") {
      navigate("/");
    }
  }
  return (
    <SearchContext.Provider value={{ search, setSearch, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
