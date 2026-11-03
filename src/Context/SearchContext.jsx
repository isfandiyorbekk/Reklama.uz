import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [submittedSearch, setSubmittedSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(value) {
    if (!value.trim()) return;
    setSubmittedSearch(value);
    navigate("/SeacherPage");
  }

  return (
    <SearchContext.Provider
      value={{
        handleSearch,
        submittedSearch,
        setSubmittedSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
