import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useProfil } from "../../Context/ProfilContext";

function MeningElonlarim() {
  const {
    setAnnouncements,
    user,
    loading: userLoading,
    announcements,
    announcementsLoading,
    announcementsError,
    getMyAnnouncements,
    formatDate,
  } = useProfil();
  async function DeletAnnouncement(id) {
    const confirmDelete = window.confirm(
      "Haqiqatan ham ushbu e'lonni o'chirmoqchimisiz?",
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `https://reklama-backend-ax7j.onrender.com/api/auth/announcement/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "E'lonni o'chirishda xatolik!");
      }

      // O'chirilgan e'lonni ekrandan ham olib tashlash
      setAnnouncements((prev) => prev.filter((item) => item._id !== id));

      alert("E'lon muvaffaqiyatli o'chirildi!");
      window.location.reload();
    } catch (error) {
      console.error("E'lonni o'chirish xatosi:", error);
      alert(error.message || "Server bilan bog'lanishda xatolik!");
    }
  }

  if (userLoading || announcementsLoading) {
    return (
      <div className="min-h-screen bg-[#f7f8fa] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-11 h-11 border-4 border-red-100 border-t-red-600 rounded-full animate-spin mx-auto"></div>
          <p className="text-sm text-gray-500 mt-4">
            E'lonlaringiz yuklanmoqda...
          </p>
        </div>
      </div>
    );
  }

  // Tizimga kirmagan foydalanuvchi
  if (!user) {
    return (
      <div className="min-h-screen bg-[#f7f8fa] flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-md rounded-2xl p-7 text-center border border-gray-200 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-red-50 mx-auto flex items-center justify-center text-red-600 text-2xl">
            <i className="fa-solid fa-user-lock"></i>
          </div>

          <h2 className="text-xl font-bold text-[#172033] mt-4">
            Tizimga kirmagansiz
          </h2>

          <p className="text-sm text-gray-500 mt-2 leading-6">
            E'lonlaringizni ko'rish uchun akkauntingizga kiring.
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

  return (
    <div className="min-h-screen bg-[#f7f8fa] pb-10">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* SAHIFA SARLAVHASI */}
        <div className="mb-7">
          <div className="bg-white border border-gray-200 rounded-2xl px-5 sm:px-7 py-5 sm:py-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1 h-6 rounded-full bg-red-600"></span>

                  <h1 className="text-2xl sm:text-[27px] font-bold text-[#172033]">
                    Mening <span className="text-red-600">e'lonlarim</span>
                  </h1>
                </div>

                <p className="text-sm text-gray-500 pl-3">
                  Joylashtirgan e'lonlaringizni shu yerdan boshqaring.
                </p>
              </div>

              <Link
                to="/qoshish"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition shadow-sm shadow-red-200"
              >
                <i className="fa-solid fa-plus"></i>
                Yangi e'lon qo'shish
              </Link>
            </div>
          </div>
        </div>

        {/* E'LONLAR BO'LIMI */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          {/* BO'LIM SARLAVHASI */}
          <div className="px-5 sm:px-7 py-5 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-[#172033]">
                  Barcha e'lonlarim
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                  Siz joylashtirgan e'lonlar ro'yxati
                </p>
              </div>

              <span className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-lg bg-red-50 text-red-600 text-xs font-semibold">
                <i className="fa-solid fa-rectangle-list"></i>
                Jami: {announcements.length} ta
              </span>
            </div>
          </div>

          {/* XATOLIK */}
          {announcementsError && (
            <div className="m-5 sm:m-7 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3">
              <i className="fa-solid fa-circle-exclamation text-red-600 mt-0.5"></i>

              <div className="flex-1">
                <p className="text-sm font-semibold text-red-700">
                  Xatolik yuz berdi
                </p>

                <p className="text-sm text-red-600 mt-1">{error}</p>

                <button
                  onClick={getMyAnnouncements}
                  className="mt-3 text-sm font-semibold text-red-700 hover:text-red-900"
                >
                  <i className="fa-solid fa-rotate-right mr-2"></i>
                  Qayta urinish
                </button>
              </div>
            </div>
          )}

          {/* E'LONLAR */}
          {!announcementsError && announcements.length > 0 && (
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {announcements.map((item) => (
                <div
                  key={item._id}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-red-200 hover:shadow-lg hover:shadow-gray-200/60 transition-all duration-300"
                >
                  {/* RASM */}
                  <Link
                    to={`/detail/${item._id}`}
                    className="block relative h-48 bg-gray-100 overflow-hidden"
                  >
                    {item.images && item.images.length > 0 ? (
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-300">
                        <i className="fa-regular fa-image text-4xl"></i>
                        <span className="text-xs mt-2">Rasm mavjud emas</span>
                      </div>
                    )}

                    <span className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-white/95 text-red-600 text-xs font-semibold shadow-sm">
                      {item.category}
                    </span>
                  </Link>

                  {/* MA'LUMOTLAR */}
                  <div className="p-4">
                    <Link to={`/detail/${item._id}`}>
                      <h3 className="text-base font-bold text-[#172033] line-clamp-2 hover:text-red-600 transition">
                        {item.title}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                      <i className="fa-solid fa-location-dot text-red-500"></i>
                      <span className="truncate">{item.location}</span>
                    </div>

                    <p className="text-xs text-gray-400 mt-3">
                      <i className="fa-regular fa-calendar mr-2"></i>
                      {formatDate(item.createdAt)}
                    </p>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-green-600 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        Joylashtirilgan
                      </span>

                      <Link
                        to={`/detail/${item._id}`}
                        className="text-xs font-semibold text-red-600 hover:text-red-700"
                      >
                        Batafsil
                        <i className="fa-solid fa-arrow-right ml-2"></i>
                      </Link>
                    </div>
                  </div>
                  <button
                    onClick={() => DeletAnnouncement(item._id)}
                    className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-50 border border-red-200 text-red-600 font-semibold text-sm hover:bg-red-600 hover:text-white transition-all duration-300"
                  >
                    <i className="fa-regular fa-trash-can"></i>
                    O'chirish
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* E'LON YO'Q */}
          {!announcementsError && announcements.length === 0 && (
            <div className="px-5 py-14 sm:py-20 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-3xl bg-red-50 border border-red-100 flex items-center justify-center mb-6">
                <i className="fa-regular fa-rectangle-list text-4xl text-red-500"></i>

                <span className="absolute -right-2 -bottom-2 w-9 h-9 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-red-600">
                  <i className="fa-solid fa-plus text-sm"></i>
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#172033]">
                Hozircha e'lonlaringiz yo'q
              </h3>

              <p className="max-w-md text-sm text-gray-500 leading-6 mt-2">
                Hali birorta e'lon joylashtirmagansiz. Birinchi e'loningizni
                joylashtiring va mahsulot yoki xizmatingizni boshqalarga
                ko'rsating.
              </p>

              <Link
                to="/qoshish"
                className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition shadow-sm shadow-red-200"
              >
                <i className="fa-solid fa-plus"></i>
                Birinchi e'lonimni joylashtirish
              </Link>
            </div>
          )}
        </div>

        {/* PASTKI ESLATMA */}
        <div className="mt-5 flex items-start gap-3 px-4 py-4 rounded-xl bg-white border border-gray-200">
          <div className="w-9 h-9 shrink-0 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
            <i className="fa-solid fa-circle-info"></i>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#172033]">
              E'lonlaringiz haqida
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 leading-5 mt-1">
              Joylashtirgan e'lonlaringizni ushbu sahifada ko'rishingiz mumkin.
              E'lon haqida batafsil ma'lumot olish uchun uning ustiga bosing.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MeningElonlarim;
