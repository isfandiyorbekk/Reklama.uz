import React from "react";
function AddForm({
  navigate,
  loading,
  title,
  setTitle,
  category,
  setCategory,
  location,
  setLocation,
  description,
  setDescription,
  setImages,
  handleSubmit,
}) {
  return (
    <div className="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10">
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-600 bg-gray-100 hover:bg-red-50 px-4 py-2 rounded-xl transition-all duration-200 active:scale-95"
          >
            <svg
              className="w-4 h-4 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Orqaga qaytish</span>
          </button>
        </div>

        <div className="mb-8 border-b border-gray-100 pb-5">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Yangi e'lon berish
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            E'lon ma'lumotlarini to'ldiring va saqlang.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              E'lon sarlavhasi <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Masalan: Do'konimda hamma mahsulot bor."
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none text-sm text-gray-800 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Kategoriya <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none text-sm text-gray-800 bg-white transition-all cursor-pointer"
              >
                <option value="">Kategoriyani tanlang</option>
                <option value="Texnika / Telefonlar">
                  Texnika / Telefonlar
                </option>
                <option value="Avtomobillar">Avtomobillar</option>
                <option value="Ko'chmas mulk">Ko'chmas mulk</option>
                <option value="Kiyim va poyabzal">Kiyim va poyabzal</option>
                <option value="Xizmatlar">Xizmatlar</option>
                <option value="Uy va bog'">Uy va bog'</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Joylashuv (Location) <span className="text-red-500">*</span>
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none text-sm text-gray-800 bg-white transition-all cursor-pointer"
              >
                <option value="Toshkent">Toshkent sh.</option>
                <option value="Samarqand">Samarqand</option>
                <option value="Farg'ona">Farg'ona</option>
                <option value="Andijon">Andijon</option>
                <option value="Namangan">Namangan</option>
                <option value="Buxoro">Buxoro</option>
                <option value="Xorazm">Xorazm</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Batafsil tavsif <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Mahsulot yoki xizmat haqida batafsil ma'lumot yozing..."
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none text-sm text-gray-800 transition-all resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              E'lon rasmlari
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              <label className="aspect-square rounded-2xl border-2 border-dashed border-gray-300 hover:border-red-500 flex flex-col items-center justify-center cursor-pointer transition-colors bg-gray-50/50 hover:bg-red-50/30">
                <span className="text-2xl text-gray-400 font-light">+</span>
                <span className="text-[11px] text-gray-500 mt-0.5 font-medium">
                  Rasm qo'shish
                </span>
                <input
                  type="file"
                  name="images"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(e) => setImages(e.target.files)}
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 active:scale-[0.99] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-600/20 transition-all duration-200 text-base tracking-wide cursor-pointer flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
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
                <span>Yuklanmoqda...</span>
              </>
            ) : (
              "E'lonni joylashtirish"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddForm;
