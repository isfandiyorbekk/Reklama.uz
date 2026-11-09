import React, { useState, useRef, useEffect } from "react";

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
  images = [],
  setImages,
  handleSubmit,
}) {
  const imageInputRef = useRef(null);
  const [previews, setPreviews] = useState([]);

  // Rasmlarni ko'rsatish va xotirani tozalash
  useEffect(() => {
    const urls = images.map((file) => URL.createObjectURL(file));
    setPreviews(urls);

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  // Yangi rasm tanlash
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    const validFiles = selectedFiles.filter((file) =>
      file.type.startsWith("image/"),
    );

    setImages((prev) => [...prev, ...validFiles]);
    e.target.value = "";
  };

  // Rasmni o'chirish
  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10">
        {/* Orqaga qaytish */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-600 bg-gray-100 hover:bg-red-50 px-4 py-2 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer"
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

        {/* Sarlavha */}
        <div className="mb-8 border-b border-gray-100 pb-5">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Yangi e'lon berish
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            E'lon ma'lumotlarini to'ldiring va saqlang.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sarlavha input */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              E'lon sarlavhasi <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Masalan: Sotiladigan smartfon iPhone 14"
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none text-sm text-gray-800 transition-all"
            />
          </div>

          {/* Kategoriya va joylashuv */}
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
                Joylashuv <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none text-sm text-gray-800 bg-white transition-all cursor-pointer"
              >
                <option value="">Hududni tanlang</option>
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

          {/* Tavsif */}
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

          {/* Rasmlar */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              E'lon rasmlari
            </label>
            <div className="flex flex-wrap items-center gap-3">
              {previews.map((preview, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100"
                >
                  <img
                    src={preview}
                    alt={`Rasm ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center text-lg shadow-md hover:bg-red-700 transition-colors cursor-pointer"
                  >
                    ×
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => imageInputRef.current?.click()}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-2 border-dashed border-gray-300 hover:border-red-500 hover:bg-red-50/30 flex flex-col items-center justify-center cursor-pointer transition-colors"
              >
                <span className="text-2xl text-gray-400 font-light">+</span>
                <span className="text-[11px] text-gray-500 mt-0.5 font-medium">
                  Rasm qo'shish
                </span>
              </button>

              <input
                ref={imageInputRef}
                type="file"
                name="images"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageChange}
              />
            </div>

            <p className="text-xs text-gray-400 mt-2">
              {images.length > 0
                ? `${images.length} ta rasm tanlandi`
                : "Rasmlarni yuklang."}
            </p>
          </div>

          {/* Submit tugmasi */}
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
