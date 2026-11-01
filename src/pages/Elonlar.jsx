import React, { useContext } from "react";
import Card from "../companets/Card";
import { SearchContext } from "../Context/SearchContext";
import { Link } from "react-router-dom";

function Elonlar() {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <div className="bg-[#F4F5F7] min-h-screen pb-12">
      <div className="md:hidden px-4 pt-4 pb-2">
        <div className="relative flex items-center w-full">
          <span className="absolute left-3.5 text-gray-400 text-base pointer-events-none">
            🔍
          </span>

          <input
            type="text"
            value={search || ""}
            onChange={(e) => setSearch && setSearch(e.target.value)}
            placeholder="E'lonlar va xizmatlarni izlash..."
            className="w-full bg-white border border-gray-200 focus:border-red-500 text-sm rounded-xl pl-10 pr-9 py-2.5 shadow-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200"
          />

          {/* Agar matn yozilgan bo'lsa, tozalash (X) tugmasi */}
          {search && (
            <button
              onClick={() => setSearch && setSearch("")}
              className="absolute right-3 text-gray-400 hover:text-gray-600 bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-colors"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ================= BANNER (Qidiruv bo'lmaganda ko'rinadi) ================= */}
      {!search && (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 my-3 sm:my-6">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white shadow-xl flex flex-col md:flex-row items-center justify-between p-6 sm:p-10">
            {/* Chap tomon: Matnlar va Reklama.uz ga tegishli kontent */}
            <div className="z-10 max-w-lg mb-6 md:mb-0">
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3 border border-white/30">
                ⚡ BEPUL E'LONLAR PLATFORMASI
              </span>
              <h2 className="text-2xl sm:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm">
                E'LONINGIZNI{" "}
                <span className="text-yellow-300 underline decoration-wavy decoration-yellow-400">
                  TEZ VA OSON
                </span>{" "}
                JOYLANG!
              </h2>
              <p className="text-white/90 text-sm sm:text-base mt-3 leading-relaxed font-medium">
                O'zbekiston bo'ylab o'z biznesingizni, do'koningiz va turli
                xizmatlaringizni ommaga taniting. Barcha turdagi e'lonlarni{" "}
                <span className="font-bold text-white">Reklama.uz</span> orqali
                qulay va tezkor joylashtiring!
              </p>

              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <Link
                  to={"/qoshish"}
                  className="bg-white text-red-600 hover:bg-yellow-300 hover:text-gray-900 font-extrabold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg text-sm sm:text-base active:scale-95"
                >
                  + E'lon joylashtirish
                </Link>
                <button className="bg-black/20 hover:bg-black/40 text-white border border-white/30 font-semibold px-5 py-3 rounded-xl transition-all text-sm sm:text-base">
                  Barcha kategoriyalar
                </button>
              </div>
            </div>

            {/* O'ng tomon: Visual 3D Badge elementlari */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="bg-[#0F172A]/80 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-2xl flex items-center gap-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                {/* Belgisi (Megafon / Reklama belgisi) */}
                <div className="bg-red-600 text-white font-black text-3xl sm:text-4xl w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center shadow-lg">
                  📢
                </div>
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-white">
                    Reklama<span className="text-red-500">.uz</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 font-medium">
                    Top e'lonlar va tezkor sotuv
                  </p>
                </div>
              </div>
            </div>

            {/* Orqa fondagi bezak nurlari */}
            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-10 -top-10 w-72 h-72 bg-black/20 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      )}

      {/* ================= E'LONLAR KARTALARI ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Card />
      </div>
    </div>
  );
}

export default Elonlar;
