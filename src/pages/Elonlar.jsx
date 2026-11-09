import Card from "../companets/Card";
import { Link } from "react-router-dom";

function Elonlar() {
  return (
    <div className="min-h-screen pb-12">
      {/* ================= BANNER (Qidiruv bo'lmaganda ko'rinadi) ================= */}
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
      {/* ================= E'LONLAR KARTALARI ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Card />
      </div>
    </div>
  );
}

export default Elonlar;
