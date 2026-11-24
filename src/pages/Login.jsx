import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProfil } from "../Context/ProfilContext";

function Login() {
  const navigate = useNavigate();
  const Name = useRef();
  const LastName = useRef();
  const Number = useRef();
  const { setUser } = useProfil();

  // Loading holati uchun state ochamiz
  const [loading, setLoading] = useState(false);

  async function User(e) {
    e.preventDefault();
    setLoading(true); // So'rov boshlanganda loadingni yoqamiz

    try {
      const res = await fetch(
        "https://reklama-backend-ax7j.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: Name.current.value.trim(),
            lastName: LastName.current.value.trim(),
            phone: Number.current.value.trim(),
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Xatolik yuz berdi");
      }

      localStorage.setItem("token", data.token);
      setUser(data.user);

      alert("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
      navigate(-1);

      Name.current.value = "";
      LastName.current.value = "";
      Number.current.value = "";
    } catch (error) {
      console.log("Xato:", error);
      alert(error.message || "Server bilan bog'lanishda xatolik!");
    } finally {
      setLoading(false); // So'rov tugagach (muvaffaqiyatli yoki xato bo'lsa ham) loadingni o'chiramiz
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl border border-gray-100">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">
            <span className="text-red-600">Reklama</span>
            <span className="text-slate-900">.uz</span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Ro'yxatdan o'tish uchun ma'lumotlaringizni kiriting
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={User}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ism
              </label>

              <input
                ref={Name}
                type="text"
                required
                disabled={loading} // Yuklanayotganda inputlarni ham bloklash mumkin
                placeholder="Ismingizni kiriting"
                className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all text-sm disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Familiya
              </label>

              <input
                ref={LastName}
                type="text"
                required
                disabled={loading}
                placeholder="Familiyangizni kiriting"
                className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all text-sm disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefon raqam
              </label>

              <input
                ref={Number}
                type="tel"
                required
                disabled={loading}
                placeholder="+998901234567"
                className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all text-sm disabled:bg-gray-100"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading} // Yuklanayotganda tugma bosilmaydigan bo'ladi
              className="group relative flex w-full justify-center items-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg disabled:bg-red-400 disabled:cursor-not-allowed"
            >
              {loading && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
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
              )}
              {loading ? "Yuklanmoqda..." : "Ro'yxatdan o'tish"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
