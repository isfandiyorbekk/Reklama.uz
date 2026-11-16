import Card from "../companets/Card";
import { Link } from "react-router-dom";

function Elonlar() {
  return (
    <div className="min-h-screen pb-12">
      {/* ================= BANNER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 my-3 sm:my-6">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white shadow-xl flex flex-col md:flex-row items-center justify-between p-6 sm:p-10">
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

              <Link
                to={"/kategoriyalar"}
                className="bg-black/20 hover:bg-black/40 text-white border border-white/30 font-semibold px-5 py-3 rounded-xl transition-all text-sm sm:text-base"
              >
                Barcha kategoriyalar
              </Link>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <div className="bg-[#0F172A]/80 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-2xl flex items-center gap-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
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

          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-10 -top-10 w-72 h-72 bg-black/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>

      {/* ================= YANGI SAYT HAQIDA XABAR ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        <div className="relative overflow-hidden bg-white border border-red-100 rounded-2xl shadow-sm p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-3xl">
            🚀
          </div>

          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-2">
              Biz endi ish boshladik!
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Reklama.uz — yangi rivojlanayotgan platforma. Hozircha e'lonlar
              soni kam bo'lishi mumkin, ammo biz siz bilan birga o'sib, yanada
              yaxshilanamiz! Siz ham ilk foydalanuvchilarimizdan bo'ling va o'z
              e'loningizni joylashtirib, platformamiz rivojiga hissa qo'shing.
            </p>
          </div>

          <Link
            to="/qoshish"
            className="shrink-0 w-full sm:w-auto text-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
          >
            E'lon joylash +
          </Link>

          <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-50 rounded-full blur-2xl pointer-events-none"></div>
        </div>
      </div>

      {/* ================= E'LONLAR KARTALARI ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-10">
        {/* Sarlavha */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-10 rounded-full bg-red-600"></div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                  Eng so‘nggi e’lonlar
                </h2>

                <span className="hidden sm:inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  Yangi
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Platformaga joylangan eng yangi e’lonlar
              </p>
            </div>
          </div>
        </div>

        {/* E'lonlar */}
        <Card />
      </div>
    </div>
  );
}

export default Elonlar;
