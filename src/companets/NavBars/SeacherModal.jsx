import React, { useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";

export default function SeacherModal({ search = "", onClose }) {
  const { handleSearch, loading, getSearchResults } = useContext(SearchContext);

  const searchResults = getSearchResults(search);

  // E'lon tanlanganda
  const handleSelect = (title) => {
    handleSearch(title);

    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 max-h-96 overflow-y-auto z-50 p-2 divide-y divide-gray-100">
      {loading ? (
        <div className="p-4 text-center text-sm text-gray-400">
          Ma'lumotlar yuklanmoqda...
        </div>
      ) : search.trim() === "" ? (
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
        <div
          onClick={onClose}
          className="p-6 text-sm text-gray-500 cursor-pointer"
        >
          <span className="font-semibold text-gray-700">{search}</span>

          <p className="mt-1 text-xs text-gray-400">
            Hech qanday e'lon topilmadi.
          </p>
        </div>
      )}
    </div>
  );
}
