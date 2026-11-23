import React from "react";
import { Link } from "react-router-dom";
import { useProfil } from "../../Context/ProfilContext";

function MeningProfilim() {
  const { user, loading, avatarLetter } = useProfil();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7f8fa]">
        <div className="w-10 h-10 border-4 border-red-100 border-t-red-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#f7f8fa] flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-md rounded-2xl p-7 text-center border border-gray-100 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-red-50 mx-auto flex items-center justify-center text-2xl">
            👤
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-4">
            Tizimga kirmagansiz
          </h2>
          <p className="text-sm text-gray-500 mt-2 leading-6">
            Profilingizni ko'rish uchun akkauntingizga kiring.
          </p>
          <Link
            to="/login"
            className="inline-flex mt-5 px-6 py-3 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition"
          >
            Tizimga kirish
          </Link>
        </div>
      </div>
    );
  }

  const fullName =
    `${user.firstName || ""} ${user.lastName || ""}`.trim() || "Foydalanuvchi";

  const items = [
    { label: "Ism", value: user.firstName || "Kiritilmagan", icon: "👤" },
    { label: "Familiya", value: user.lastName || "Kiritilmagan", icon: "🪪" },
    { label: "Telefon raqam", value: user.phone || "Kiritilmagan", icon: "📞" },
    {
      label: "Reklama.uz Foydalanuvchisi",
      value: "Bizni tanlaganingiz uchun rahmat!",
      icon: "R",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fa] pb-10">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Yuqori navigatsiya */}
        <div className="mb-7">
          {/* Sarlavha bloki */}
          <div className="bg-white border border-gray-200 rounded-2xl px-5 sm:px-7 py-5 sm:py-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1 h-6 rounded-full bg-red-600"></span>
                  <h1 className="text-2xl sm:text-[27px] font-bold text-[#172033]">
                    Mening profilim
                  </h1>
                </div>

                <p className="text-sm text-gray-500 pl-3">
                  Shaxsiy ma'lumotlaringiz va akkauntingiz.
                </p>
              </div>

              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 w-fit px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:text-red-600 hover:border-red-200 hover:bg-red-50/50 transition"
              >
                <i className="fa-solid fa-arrow-left text-xs"></i>
                Bosh sahifaga qaytish
              </Link>
            </div>
          </div>
        </div>

        {/* Profil kartasi */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Profil header */}
          <div className="relative bg-gradient-to-r from-[#172033] to-[#303d56] px-5 sm:px-8 py-7 sm:py-8 overflow-hidden">
            <div className="absolute -right-12 -top-20 w-56 h-56 rounded-full bg-red-600/10"></div>
            <div className="absolute right-28 -bottom-24 w-48 h-48 rounded-full bg-white/5"></div>

            <div className="relative flex flex-col xs:flex-row sm:flex-row items-center sm:items-center gap-4 sm:gap-5 text-center sm:text-left">
              <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 border-4 border-white/10 shadow-lg flex items-center justify-center text-white text-3xl sm:text-4xl font-bold">
                {avatarLetter || fullName.charAt(0).toUpperCase()}
              </div>

              <div className="min-w-0">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-red-200 text-xs font-semibold mb-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  Shaxsiy kabinet
                </span>

                <h2 className="text-xl sm:text-2xl font-bold text-white break-words">
                  {fullName}
                </h2>

                <p className="text-xs sm:text-sm text-gray-300 mt-2 break-all">
                  ID: {user._id || "Mavjud emas"}
                </p>
              </div>
            </div>
          </div>

          {/* Ma'lumotlar */}
          <div className="p-5 sm:p-7 md:p-8">
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="w-1 h-7 rounded-full bg-red-600"></div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#172033]">
                  Shaxsiy <span className="text-red-600">ma'lumotlar</span>
                </h3>
              </div>

              <p className="text-sm text-gray-500 mt-2 ml-4">
                Akkauntingizga tegishli asosiy ma'lumotlar.
              </p>
            </div>

            {/* Shaxsiy ma'lumotlar kartochkalari */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="group relative flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 hover:border-red-200 hover:shadow-md hover:shadow-red-100/50 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-xl group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                    <span className="group-hover:brightness-0 group-hover:invert transition-all">
                      {item.icon}
                    </span>
                  </div>

                  {/* Ma'lumot */}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {item.label}
                    </p>

                    <p className="text-sm sm:text-base font-bold text-[#172033] mt-1.5 break-words">
                      {item.value}
                    </p>
                  </div>

                  {/* O'ng tarafdagi belgi */}
                  <div className="w-7 h-7 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-red-50 group-hover:text-red-600 transition-all">
                    <i className="fa-solid fa-check text-xs"></i>
                  </div>
                </div>
              ))}
            </div>

            {/* Pastki tugmalar */}
            <div className="mt-7 pt-5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs sm:text-sm text-gray-400">
                Reklama.uz — e'lonlar platformasi.
              </p>

              <div className="grid grid-cols-1 sm:flex gap-2.5">
                <Link
                  to="/qoshish"
                  className="px-5 py-3 rounded-xl bg-red-600 text-white text-sm font-semibold text-center hover:bg-red-700 transition shadow-sm"
                >
                  <i className="fa-solid fa-plus mr-2"></i>
                  Yangi e'lon qo'shish
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Eslatma */}
        <div className="max-w-4xl mx-auto mt-4 bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-3">
          <div className="w-9 h-9 shrink-0 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
            <i className="fa-solid fa-circle-info"></i>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#172033]">
              Ma'lumot uchun
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-5">
              Reklama.uz — yangi rivojlanayotgan platforma. Hozircha e'lonlar
              soni kam bo'lishi mumkin, ammo biz siz bilan birga o'sib, yanada
              yaxshilanamiz! Siz ham ilk foydalanuvchilarimizdan bo'ling va o'z
              e'loningizni joylashtirib, platformamiz rivojiga hissa qo'shing.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MeningProfilim;
