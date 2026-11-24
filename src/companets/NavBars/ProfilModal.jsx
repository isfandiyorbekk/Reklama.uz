import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProfilContext from "../../Context/ProfilContext";

function ProfilModal({ setProfilModal }) {
  // Loading holati uchun state ochamiz
  const [loadingAction, setLoadingAction] = useState(false);

  const deleteAccount = async () => {
    // Agar allaqachon bosilgan bo'lsa, qayta bosishning oldini olamiz
    if (loadingAction) return;

    setLoadingAction(true);
    try {
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
    } catch (error) {
      console.log("Xato:", error);
      alert(error.message || "Xatolik yuz berdi");
    } finally {
      setLoadingAction(false);
    }
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

        {/* CHIQISH (O'chirish) */}
        <div className="p-2 border-t border-gray-100">
          <button
            onClick={deleteAccount}
            disabled={loadingAction}
            className="w-full flex items-center justify-start gap-3 px-3 py-3 sm:py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loadingAction ? (
              <svg
                className="animate-spin h-5 w-5 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
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
            )}
            <span>{loadingAction ? "O'chirilmoqda..." : "Chiqish"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilModal;
