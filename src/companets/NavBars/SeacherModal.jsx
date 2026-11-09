import React, { useEffect, useState, useMemo, useContext } from "react";
import Fuse from "fuse.js";
import { SearchContext } from "../../Context/SearchContext";

export default function SeacherModal({ search, onClose }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { handleSearch } = useContext(SearchContext);

  // Backenddan e'lonlarni yuklab olish
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://reklama-backend-ax7j.onrender.com/api/announcements/all",
        );
        if (!res.ok) throw new Error(`Xatolik: ${res.status}`);
        const result = await res.json();
        setData(Array.isArray(result) ? result : result.data || []);
      } catch (error) {
        console.error("Modal backend xatoligi:", error.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  // Fuse.js sozlamasi (Card.jsx bilan bir xil)
  const fuse = useMemo(() => {
    return new Fuse(data, {
      keys: ["title", "category", "location", "description"],
      threshold: 0.4,
      ignoreLocation: true,
    });
  }, [data]);

  // Qidiruv natijalari
  const searchResults = useMemo(() => {
    const query = search.trim();
    if (!query) return [];
    return fuse.search(query).map((result) => result.item);
  }, [search, fuse]);

  const handleSelect = (title) => {
    handleSearch(title);
    if (onClose) onClose();
  };

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 max-h-96 overflow-y-auto z-50 p-2 divide-y divide-gray-100">
      {loading ? (
        <div className="p-4 text-center text-sm text-gray-400">
          Ma'lumotlar yuklanmoqda...
        </div>
      ) : search.trim() === "" ? (
        /* Input bo'sh bo'lganda ko'rinadigan qism */
        <div className="p-3">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2 px-1">
            Qidiring...
          </span>
        </div>
      ) : searchResults.length > 0 ? (
        <div className="pt-2">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1 px-2">
            Qidiruv natijalari ({searchResults.length})
          </span>
          {searchResults.map((item) => {
            const id = item._id || item.id;
            return (
              <div
                key={id}
                onClick={() => handleSelect(item.title)}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="truncate">
                    <p className="text-sm font-medium text-gray-800 group-hover:text-red-600 transition-colors truncate">
                      {item.title || "Sarlavhasiz e'lon"}
                    </p>
                    <span className="text-xs text-gray-400 block truncate">
                      {item.category || "Kategoriyasiz"} •{" "}
                      {item.location || "Toshkent"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Hech narsa topilmaganda */
        <div onClick={onClose} className="p-6 text-sm text-gray-500">
          <span className="font-semibold text-gray-700">{search}</span>
        </div>
      )}
    </div>
  );
}
