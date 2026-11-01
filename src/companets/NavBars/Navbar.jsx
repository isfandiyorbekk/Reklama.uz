import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobilNav from "./MobilNav";
import { useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";
export default function Navbar() {
  const { search, setSearch, handleSearch } = useContext(SearchContext);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="w-full bg-white border-b border-gray-200 hidden md:block sticky top-0 z-50 shadow-sm select-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between gap-4 lg:gap-6">
          {/* 1. Logo */}
          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-red-600 hover:opacity-90 transition shrink-0"
          >
            Reklama<span className="text-gray-900">.uz</span>
          </Link>

          {/* 2. Katalog tugmasi */}
          <Link
            to="/kategoriyalar"
            className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 active:scale-95 shrink-0"
          >
            <svg
              className="w-5 h-5 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="text-sm">Katalog</span>
          </Link>
          <form className="flex-1 max-w-xl xl:max-w-2xl flex items-center border border-gray-300 rounded-xl overflow-hidden focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500 transition-all">
            <input
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
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

          {/* 4. O'ng tarafdagi harakatlar */}
          <div className="flex items-center gap-3 lg:gap-4 shrink-0">
            {/* Saralanganlar (Yurakcha) */}
            <Link
              to="/saralanganlar"
              className="flex items-center gap-1.5 px-3 py-2 text-gray-700 hover:text-red-600 font-medium text-sm transition-colors rounded-xl hover:bg-gray-50"
            >
              <svg
                className="w-5 h-5 stroke-current fill-none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="hidden lg:inline">Saralanganlar</span>
            </Link>

            {/* Kirish */}
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-red-600 bg-gray-100 hover:bg-red-50 border border-gray-200 hover:border-red-200 rounded-full transition-all duration-200 active:scale-95"
            >
              <svg
                className="w-4 h-4 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span>Kirish</span>
            </Link>

            {/* E'lon berish */}
            <Link
              to="/qoshish"
              className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm px-4 lg:px-5 py-2.5 rounded-xl shadow-md shadow-red-600/20 transition-all duration-200 flex items-center gap-1.5"
            >
              <span className="text-lg leading-none">+</span>
              <span>E'lon berish</span>
            </Link>
          </div>
        </div>
      </nav>
      <MobilNav />
    </>
  );
}
