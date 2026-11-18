import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../Context/SearchContext";

function Saralanganlar() {
  const {
    data,
    loading,
    liked,
    toggleLike,
    activeImageIndexes,
    handleNextImage,
    handlePrevImage,
  } = useContext(SearchContext);

  const savedAds = data.filter((item) => liked.includes(item._id || item.id));

  const getImageUrl = (image) => {
    if (!image) return "";

    const imagePath =
      typeof image === "string"
        ? image
        : image.url || image.imageUrl || image.path || "";

    if (!imagePath) return "";

    return imagePath.startsWith("http")
      ? imagePath
      : `https://reklama-backend-ax7j.onrender.com${imagePath}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        {/* HEADER */}
        <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-rose-600 rounded-2xl sm:rounded-3xl p-5 sm:p-8 mb-8 shadow-lg">
          <div className="relative z-10 flex items-center justify-between gap-4">
            <div>
              <span className="inline-block bg-white/20 border border-white/20 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full mb-3">
                ❤️ SEVIMLI E'LONLARINGIZ
              </span>

              <h1 className="text-2xl sm:text-4xl font-black text-white">
                Saralanganlar
              </h1>

              <p className="text-white/85 text-xs sm:text-sm mt-2">
                Sizga yoqqan e'lonlar shu yerda saqlanadi.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-xl font-extrabold text-sm shadow-md">
                ❤️ {savedAds.length} ta e'lon
              </div>
            </div>

            <div className="hidden sm:flex w-24 h-24 bg-white/15 rounded-3xl items-center justify-center text-6xl">
              ❤️
            </div>
          </div>

          <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -top-20 w-52 h-52 bg-black/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-red-100 border-t-red-600 rounded-full animate-spin" />
            <p className="text-gray-500 text-sm mt-4">
              E'lonlar yuklanmoqda...
            </p>
          </div>
        ) : savedAds.length === 0 ? (
          /* EMPTY STATE */
          <div className="border border-gray-100 rounded-3xl py-14 px-5 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-red-50 flex items-center justify-center text-5xl mb-5">
              💔
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-gray-900">
              Hozircha saralangan e'lonlar yo'q
            </h2>

            <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto mt-3 leading-relaxed">
              Sizga yoqqan e'lonlarni yurakcha tugmasini bosib saralanganlarga
              qo'shishingiz mumkin.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-6 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all active:scale-95"
            >
              E'lonlarni ko'rish →
            </Link>
          </div>
        ) : (
          /* ADS GRID */
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {savedAds.map((item) => {
              const id = item._id || item.id;
              const images = Array.isArray(item.images) ? item.images : [];

              const currentIndex = activeImageIndexes[id] || 0;
              const currentImage = getImageUrl(images[currentIndex]);

              return (
                <article
                  key={id}
                  className="group flex flex-col justify-between !bg-transparent border-0 rounded-xl sm:rounded-2xl p-2 shadow-none hover:shadow-none transition-all duration-200"
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100">
                    <Link to={`/detail/${id}`} className="block w-full h-full">
                      <img
                        src={
                          currentImage ||
                          "https://placehold.co/400x500?text=Rasm+yo'q"
                        }
                        alt={item.title || "E'lon rasmi"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://placehold.co/400x500?text=Rasm+yo'q";
                        }}
                      />
                    </Link>

                    {/* LIKE BUTTON */}
                    <button
                      onClick={() => toggleLike(id)}
                      aria-label="Saralanganlardan o'chirish"
                      className="absolute top-2 right-2 z-10 w-9 h-9 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-full shadow-md hover:scale-110 active:scale-90 transition-all"
                    >
                      <svg
                        className="w-5 h-5 text-red-600 fill-red-600"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
                        />
                      </svg>
                    </button>

                    {/* IMAGE ARROWS */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => handlePrevImage(e, id, images.length)}
                          aria-label="Oldingi rasm"
                          className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/90 rounded-full shadow flex items-center justify-center text-gray-800 hover:bg-white"
                        >
                          ‹
                        </button>

                        <button
                          onClick={(e) => handleNextImage(e, id, images.length)}
                          aria-label="Keyingi rasm"
                          className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/90 rounded-full shadow flex items-center justify-center text-gray-800 hover:bg-white"
                        >
                          ›
                        </button>

                        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                          {images.map((_, index) => (
                            <span
                              key={index}
                              className={`h-1.5 rounded-full transition-all ${
                                index === currentIndex
                                  ? "w-4 bg-white"
                                  : "w-1.5 bg-white/60"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    {/* CATEGORY */}
                    {item.category && (
                      <span className="absolute bottom-2 left-2 max-w-[75%] truncate bg-black/60 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded-md">
                        {item.category}
                      </span>
                    )}
                  </div>

                  {/* INFO */}
                  <div className="flex flex-col flex-1 pt-3 px-1">
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-2 min-h-9 leading-5 group-hover:text-red-600 transition-colors">
                      {item.title || "Nomsiz e'lon"}
                    </h3>

                    <div className="flex items-center gap-1 mt-2 text-gray-500">
                      <svg
                        className="w-3.5 h-3.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.828 0l-4.243-4.243a8 8 0 1 1 11.314 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>

                      <span className="text-[10px] sm:text-xs truncate">
                        {item.location || "Hudud ko'rsatilmagan"}
                      </span>
                    </div>

                    <Link
                      to={`/detail/${id}`}
                      className="mt-3 w-full text-center bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold py-2.5 rounded-lg transition-all active:scale-95"
                    >
                      Batafsil
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Saralanganlar;
