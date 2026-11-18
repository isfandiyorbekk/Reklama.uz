import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ProfilModal() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="pt-2 w-full max-w-[calc(100vw-24px)] sm:w-64">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-300/40 overflow-hidden w-full">
        {/* FOYDALANUVCHI MA'LUMOTI */}
        <div className="px-3 sm:px-4 py-3.5 bg-gray-50/80 border-b border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center shrink-0">
            U
          </div>

          <div className="overflow-hidden min-w-0">
            <p className="text-sm font-bold text-gray-900 truncate">
              Foydalanuvchi
            </p>

            <p className="text-xs text-gray-500 truncate">Shaxsiy kabinet</p>
          </div>
        </div>

        {/* MENYU */}
        <div className="p-2 flex flex-col gap-1">
          <Link
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

          <Link
            to="/sozlamalar"
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <span>Sozlamalar</span>
          </Link>
        </div>

        {/* CHIQISH */}
        <div className="p-2 border-t border-gray-100">
          <button
            onClick={handleLogout}
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
