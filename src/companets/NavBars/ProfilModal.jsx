import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfilContext from "../../Context/ProfilContext";
function ProfilModal({ setProfilModal }) {
  const deleteAccount = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch(
      "https://reklama-backend-ax7j.onrender.com/api/auth/delete-account",
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || "Profilni o'chirib bo'lmadi");
    }

    localStorage.removeItem("token");
    window.location.href = "/";
  };
  const { loading, userName, avatarLetter } = useContext(ProfilContext);
  return (
    <div className="pt-2 w-[340px] max-w-[calc(100vw-24px)] sm:w-[360px]">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-300/40 overflow-hidden w-full">
        {/* FOYDALANUVCHI MA'LUMOTI */}
        <div className="px-3 sm:px-4 py-3.5 bg-gray-50/80 border-b border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center shrink-0 text-lg">
            {loading ? "..." : avatarLetter}
          </div>

          <div className="overflow-hidden min-w-0">
            <p className="text-sm font-bold text-gray-900 truncate">
              {loading ? "Yuklanmoqda..." : userName}
            </p>
          </div>
        </div>

        {/* MENYU */}
        <div className="p-2 flex flex-col gap-1">
          <Link
            onClick={() => setProfilModal && setProfilModal(false)}
            to="/profil"
            className="flex items-center gap-3 px-3 py-3 sm:py-2.5 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all active:scale-[0.98]"
          >
            <svg
              className="w-5 h-5 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Mening profilim</span>
          </Link>

          <Link
            onClick={() => setProfilModal && setProfilModal(false)}
            to="/mening-elonlarim"
            className="flex items-center gap-3 px-3 py-3 sm:py-2.5 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all active:scale-[0.98]"
          >
            <svg
              className="w-5 h-5 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span>Mening e'lonlarim</span>
          </Link>
        </div>

        {/* CHIQISH */}
        <div className="p-2 border-t border-gray-100">
          <button
            onClick={deleteAccount}
            className="w-full flex items-center gap-3 px-3 py-3 sm:py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-all active:scale-[0.98] cursor-pointer"
          >
            <svg
              className="w-5 h-5 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span>Chiqish</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilModal;
