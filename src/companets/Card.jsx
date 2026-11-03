import { useState, useEffect, useMemo, useContext } from "react";
import Fuse from "fuse.js";
import { SearchContext } from "../Context/SearchContext";

function Card({ searchable = false }) {
  const [data, setData] = useState([]);
  const [liked, setLiked] = useState([]);

  // Enter bosilganda saqlangan qidiruv qiymati
  const { submittedSearch } = useContext(SearchContext);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://reklama-backend-7.onrender.com/api/announcements/all",
        );

        if (!res.ok) throw new Error(`Xatolik: ${res.status}`);

        const result = await res.json();
        setData(Array.isArray(result) ? result : result.data || []);
      } catch (error) {
        console.error(error.message);
      }
    }

    getData();
  }, []);

  const fuse = useMemo(() => {
    return new Fuse(data, {
      keys: ["title", "category", "location", "description"],
      threshold: 0.4,
      ignoreLocation: true,
    });
  }, [data]);
  // Qidiruv
  const filtered = useMemo(() => {
    if (!searchable) return data;

    const query = submittedSearch.trim();

    if (!query) return [];

    return fuse.search(query).map((result) => result.item);
  }, [searchable, submittedSearch, fuse, data]);

  function toggleLike(id) {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 p-2 sm:grid-cols-3 sm:gap-4 sm:p-5 lg:grid-cols-4 xl:grid-cols-5">
      {filtered.length > 0 ? (
        filtered.map((item) => {
          const id = item._id || item.id;
          const image = item.images?.[0];

          const imageUrl = image
            ? image.startsWith("http")
              ? image
              : `https://reklama-backend-7.onrender.com${image}`
            : "https://placehold.co/400x500?text=Rasm+yo'q";

          const isLiked = liked.includes(id);

          return (
            <article
              key={id}
              className="group flex flex-col justify-between p-2 transition-all duration-200"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-100 sm:aspect-[3/4]">
                <img
                  src={imageUrl}
                  alt={item.title || "E'lon rasmi"}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/400x500?text=Rasm+yo'q";
                  }}
                />

                <button
                  type="button"
                  onClick={() => toggleLike(id)}
                  aria-label="Sevimlilarga qo'shish"
                  className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-xs transition hover:bg-white active:scale-90"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={isLiked ? "#FF0000" : "none"}
                    stroke={isLiked ? "#FF0000" : "#374151"}
                    strokeWidth="1.8"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
                    />
                  </svg>
                </button>

                {item.category && (
                  <span className="absolute bottom-2 left-2 max-w-[85%] truncate rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs">
                    {item.category}
                  </span>
                )}
              </div>

              <div className="mt-2.5 flex flex-1 flex-col justify-between px-1">
                <h3 className="line-clamp-2 text-xs font-normal leading-snug text-gray-900 sm:text-sm">
                  {item.title || "Sarlavhasiz e'lon"}
                </h3>

                <div className="mt-3">
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span className="truncate">
                      📍 {item.location || "Toshkent"}
                    </span>

                    <span className="shrink-0">
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleDateString("uz-UZ")
                        : ""}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="mt-2.5 flex w-full items-center justify-center rounded-xl bg-[#FF0000] py-2 text-xs font-medium text-white transition hover:bg-[#D60000] active:scale-[0.98]"
                  >
                    Batafsil
                  </button>
                </div>
              </div>
            </article>
          );
        })
      ) : (
        <div className="col-span-full py-16 text-center text-gray-500">
          <h2 className="text-xl font-semibold">E'lonlar topilmadi</h2>
          <p className="mt-2 text-sm">
            Boshqa kalit so'z bilan qidirib ko'ring.
          </p>
        </div>
      )}
    </div>
  );
}

export default Card;
