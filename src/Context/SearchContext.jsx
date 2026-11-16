import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";

export const SearchContext = createContext(null);

export function SearchProvider({ children }) {
  const navigate = useNavigate();

  const [submittedSearch, setSubmittedSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [visibleCount, setVisibleCount] = useState(20);
  const [activeImageIndexes, setActiveImageIndexes] = useState({});

  // Sevimlilar
  const [liked, setLiked] = useState(() => {
    try {
      const saved = localStorage.getItem("liked_announcements");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Qidiruv
  const handleSearch = useCallback(
    (value) => {
      if (!value?.trim()) return;

      setSubmittedSearch(value.trim());
      navigate("/SeacherPage");
    },
    [navigate],
  );

  // Backenddan ma'lumot olish
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://reklama-backend-ax7j.onrender.com/api/announcements/all",
        );

        if (!res.ok) {
          throw new Error(`Xatolik: ${res.status}`);
        }

        const result = await res.json();

        setData(
          Array.isArray(result)
            ? result
            : Array.isArray(result.data)
              ? result.data
              : [],
        );
      } catch (error) {
        console.error("Backend xatoligi:", error.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  // Sevimlilarni saqlash
  useEffect(() => {
    try {
      localStorage.setItem("liked_announcements", JSON.stringify(liked));
    } catch (error) {
      console.error("LocalStorage xatoligi:", error);
    }
  }, [liked]);

  // Fuse.js
  const fuse = useMemo(() => {
    return new Fuse(data, {
      keys: ["title", "category", "location", "description"],
      threshold: 0.4,
      ignoreLocation: true,
    });
  }, [data]);

  // Asosiy sahifa qidiruvi
  const filtered = useMemo(() => {
    const query = submittedSearch.trim();

    if (!query) return [];

    return fuse.search(query).map((result) => result.item);
  }, [submittedSearch, fuse]);

  // Modal qidiruvi
  const getSearchResults = useCallback(
    (search) => {
      const query = search?.trim() || "";

      if (!query) return [];

      return fuse.search(query).map((result) => result.item);
    },
    [fuse],
  );

  // Qidiruv o'zgarganda sahifalash
  useEffect(() => {
    setVisibleCount(20);
  }, [submittedSearch]);

  // Sevimlilarga qo'shish
  const toggleLike = useCallback((id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }, []);

  // Keyingi rasm
  const handleNextImage = useCallback((e, id, totalImages) => {
    e.stopPropagation();

    setActiveImageIndexes((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % totalImages,
    }));
  }, []);

  // Oldingi rasm
  const handlePrevImage = useCallback((e, id, totalImages) => {
    e.stopPropagation();

    setActiveImageIndexes((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) - 1 + totalImages) % totalImages,
    }));
  }, []);

  // Yana 20 ta e'lon
  const showMore = useCallback(() => {
    setVisibleCount((prev) => prev + 20);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        handleSearch,
        submittedSearch,
        setSubmittedSearch,
        setData,
        data,
        loading,
        filtered,
        getSearchResults,

        liked,
        toggleLike,

        visibleCount,
        setVisibleCount,
        showMore,

        activeImageIndexes,
        handleNextImage,
        handlePrevImage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
