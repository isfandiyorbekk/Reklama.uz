import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useProfil } from "../Context/ProfilContext";
function Login() {
  const navigate = useNavigate();
  const Name = useRef();
  const LastName = useRef();
  const Number = useRef();
  const { setUser } = useProfil();
  async function User(e) {
    e.preventDefault();

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
      localStorage.setItem("token", data.token);
      setUser(data.user);
      if (!res.ok) {
        throw new Error(data.message || "Xatolik yuz berdi");
      }

      alert("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
      navigate(-1);
      Name.current.value = "";
      LastName.current.value = "";
      Number.current.value = "";
    } catch (error) {
      console.log("Xato:", error);
      alert(error.message || "Server bilan bog'lanishda xatolik!");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      {" "}
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
                placeholder="Ismingizni kiriting"
                className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all text-sm"
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
                placeholder="Familiyangizni kiriting"
                className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all text-sm"
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
                placeholder="+998901234567"
                className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg"
            >
              Ro'yxatdan o'tish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
