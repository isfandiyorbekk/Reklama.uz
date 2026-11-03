import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";

function MobilNav() {
  const location = useLocation();
  const { handleSearch, submittedSearch, setSubmittedSearch } =
    useContext(SearchContext);
  const [search, setSearch] = useState(submittedSearch);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ================= MOBIL TEPANGGI HEADER VA QIDIRUV ================= */}
      <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 shadow-xs">
        {/* Top bar: Logo va Kirish tugmasi */}
        <div className="py-2.5 px-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-black tracking-tight text-red-600"
          >
            Reklama<span className="text-gray-900">.uz</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="text-xs font-semibold text-gray-700 bg-gray-100 active:bg-gray-200 px-3.5 py-1.5 rounded-full transition-all"
            >
              Kirish
            </Link>
          </div>
        </div>

        {/* Tepadan sal pastroqda joylashgan Mobil Qidiruv Inputi */}
        <div className="flex justify-center px-4 pb-3 pt-1">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(search);
            }}
            className="flex-1 max-w-xl xl:max-w-2xl flex items-center border border-gray-300 rounded-xl overflow-hidden focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500 transition-all"
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="E'lonlar va xizmatlarni izlash..."
              className="w-full px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
            />

            <button
              type="submit"
              className="bg-gray-100 hover:bg-gray-200 px-5 py-2.5 border-l border-gray-200 text-gray-600 hover:text-red-600 transition-colors flex items-center justify-center shrink-0"
            >
              <svg
                className="w-5 h-5 fill-none stroke-current"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* ================= MOBIL PASTKI MENYU ================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 text-white z-50 rounded-t-2xl shadow-2xl px-2 py-2 border-t border-slate-800">
        <div className="flex items-center justify-around relative">
          <Link
            to="/"
            className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all ${
              isActive("/")
                ? "text-red-500 font-bold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span className="text-[10px] mt-1">Asosiy</span>
          </Link>

          {/* Kategoriya */}
          <Link
            to="/kategoriyalar"
            className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all ${
              isActive("/kategoriyalar")
                ? "text-red-500 font-bold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
            </svg>
            <span className="text-[10px] mt-1">Kategoriya</span>
          </Link>

          {/* O'rtadagi Qizil + Tugma */}
          <Link
            to="/qoshish"
            className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white w-12 h-12 rounded-2xl shadow-lg shadow-red-600/40 -mt-6 transition-all active:scale-90 border-4 border-slate-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </Link>

          {/* Saralanganlar */}
          <Link
            to="/saralanganlar"
            className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all ${
              isActive("/saralanganlar")
                ? "text-red-500 font-bold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <svg
              className="w-5 h-5 stroke-current fill-none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-[10px] mt-1">Sevimlilar</span>
          </Link>

          {/* Haqida */}
          <Link
            to="/biz_haqimizda"
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
              isActive("/biz_haqimizda")
                ? "text-red-500 font-bold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            <span className="text-[10px] mt-1">Haqida</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobilNav;
