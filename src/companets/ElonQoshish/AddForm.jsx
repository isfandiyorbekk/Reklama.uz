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
  number,
  setNumber,
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

                <optgroup label="📱 Texnika va elektronika">
                  <option value="Telefonlar">Telefonlar</option>
                  <option value="Kompyuter va noutbuklar">
                    Kompyuter va noutbuklar
                  </option>
                  <option value="Planshetlar">Planshetlar</option>
                  <option value="Televizorlar">Televizorlar</option>
                  <option value="Maishiy texnika">Maishiy texnika</option>
                  <option value="Foto va video texnika">
                    Foto va video texnika
                  </option>
                  <option value="Audio va aksessuarlar">
                    Audio va aksessuarlar
                  </option>
                  <option value="O'yin pristavkalari">
                    O'yin pristavkalari
                  </option>
                  <option value="Boshqa texnikalar">Boshqa texnikalar</option>
                </optgroup>

                <optgroup label="🚗 Transport">
                  <option value="Yengil avtomobillar">
                    Yengil avtomobillar
                  </option>
                  <option value="Yuk mashinalari">Yuk mashinalari</option>
                  <option value="Mototsikllar">Mototsikllar</option>
                  <option value="Velosipedlar">Velosipedlar</option>
                  <option value="Skuter va elektrosamokatlar">
                    Skuter va elektrosamokatlar
                  </option>
                  <option value="Avto ehtiyot qismlar">
                    Avto ehtiyot qismlar
                  </option>
                  <option value="Avto aksessuarlar">Avto aksessuarlar</option>
                  <option value="Transport ijarasi">Transport ijarasi</option>
                </optgroup>

                <optgroup label="🏠 Ko'chmas mulk">
                  <option value="Kvartiralar sotiladi">
                    Kvartiralar sotiladi
                  </option>
                  <option value="Kvartiralar ijaraga">
                    Kvartiralar ijaraga
                  </option>
                  <option value="Uylar sotiladi">Uylar sotiladi</option>
                  <option value="Uylar ijaraga">Uylar ijaraga</option>
                  <option value="Yer uchastkalari">Yer uchastkalari</option>
                  <option value="Tijorat binolari">Tijorat binolari</option>
                  <option value="Ofislar">Ofislar</option>
                  <option value="Garajlar">Garajlar</option>
                  <option value="Ko'chmas mulk boshqa">
                    Boshqa ko'chmas mulk
                  </option>
                </optgroup>

                <optgroup label="👕 Kiyim va aksessuarlar">
                  <option value="Erkaklar kiyimi">Erkaklar kiyimi</option>
                  <option value="Ayollar kiyimi">Ayollar kiyimi</option>
                  <option value="Bolalar kiyimi">Bolalar kiyimi</option>
                  <option value="Poyabzallar">Poyabzallar</option>
                  <option value="Sumka va hamyonlar">Sumka va hamyonlar</option>
                  <option value="Soatlar va taqinchoqlar">
                    Soatlar va taqinchoqlar
                  </option>
                  <option value="Ko'zoynaklar">Ko'zoynaklar</option>
                </optgroup>

                <optgroup label="🛋️ Uy va bog'">
                  <option value="Mebel">Mebel</option>
                  <option value="Uy jihozlari">Uy jihozlari</option>
                  <option value="Oshxona buyumlari">Oshxona buyumlari</option>
                  <option value="Bog' anjomlari">Bog' anjomlari</option>
                  <option value="Qurilish materiallari">
                    Qurilish materiallari
                  </option>
                  <option value="Ta'mirlash uskunalari">
                    Ta'mirlash uskunalari
                  </option>
                  <option value="Interyer va dekor">Interyer va dekor</option>
                </optgroup>

                <optgroup label="💼 Ish va biznes">
                  <option value="Ish o'rinlari">Ish o'rinlari</option>
                  <option value="Masofaviy ish">Masofaviy ish</option>
                  <option value="Frilans">Frilans</option>
                  <option value="Biznes sotiladi">Biznes sotiladi</option>
                  <option value="Hamkorlik izlayman">Hamkorlik izlayman</option>
                  <option value="Biznes uskunalari">Biznes uskunalari</option>
                </optgroup>

                <optgroup label="🛠️ Xizmatlar">
                  <option value="IT va dasturlash">IT va dasturlash</option>
                  <option value="Web sayt yaratish">Web sayt yaratish</option>
                  <option value="Dizayn xizmatlari">Dizayn xizmatlari</option>
                  <option value="SMM va marketing">SMM va marketing</option>
                  <option value="Reklama xizmatlari">Reklama xizmatlari</option>
                  <option value="Usta xizmatlari">Usta xizmatlari</option>
                  <option value="Tozalash xizmatlari">
                    Tozalash xizmatlari
                  </option>
                  <option value="Yetkazib berish">Yetkazib berish</option>
                  <option value="Yuk tashish">Yuk tashish</option>
                  <option value="Ta'lim va repetitorlik">
                    Ta'lim va repetitorlik
                  </option>
                  <option value="Tarjima xizmatlari">Tarjima xizmatlari</option>
                  <option value="Foto va video xizmatlari">
                    Foto va video xizmatlari
                  </option>
                  <option value="Go'zallik xizmatlari">
                    Go'zallik xizmatlari
                  </option>
                  <option value="Boshqa xizmatlar">Boshqa xizmatlar</option>
                </optgroup>

                <optgroup label="🎫 Bilet va chiptalar">
                  <option value="Samolyot chiptalari">
                    Samolyot chiptalari
                  </option>
                  <option value="Poyezd chiptalari">Poyezd chiptalari</option>
                  <option value="Avtobus chiptalari">Avtobus chiptalari</option>
                  <option value="Konsert chiptalari">Konsert chiptalari</option>
                  <option value="Futbol chiptalari">Futbol chiptalari</option>
                  <option value="Teatr chiptalari">Teatr chiptalari</option>
                  <option value="Kino chiptalari">Kino chiptalari</option>
                  <option value="Boshqa chiptalar">Boshqa chiptalar</option>
                </optgroup>

                <optgroup label="🐶 Hayvonlar">
                  <option value="Uy hayvonlari">Uy hayvonlari</option>
                  <option value="Mushuklar">Mushuklar</option>
                  <option value="Itlar">Itlar</option>
                  <option value="Qushlar">Qushlar</option>
                  <option value="Chorva mollari">Chorva mollari</option>
                  <option value="Hayvonlar uchun mahsulotlar">
                    Hayvonlar uchun mahsulotlar
                  </option>
                </optgroup>

                <optgroup label="🎮 Xobbi va dam olish">
                  <option value="Sport anjomlari">Sport anjomlari</option>
                  <option value="Musiqa asboblari">Musiqa asboblari</option>
                  <option value="Kitoblar">Kitoblar</option>
                  <option value="O'yinchoqlar">O'yinchoqlar</option>
                  <option value="Kompyuter o'yinlari">
                    Kompyuter o'yinlari
                  </option>
                  <option value="Sayohat anjomlari">Sayohat anjomlari</option>
                  <option value="Kolleksiya buyumlari">
                    Kolleksiya buyumlari
                  </option>
                </optgroup>

                <optgroup label="🌾 Qishloq xo'jaligi">
                  <option value="Qishloq xo'jaligi texnikalari">
                    Qishloq xo'jaligi texnikalari
                  </option>
                  <option value="Urug' va ko'chatlar">
                    Urug' va ko'chatlar
                  </option>
                  <option value="O'g'itlar">O'g'itlar</option>
                  <option value="Dehqonchilik mahsulotlari">
                    Dehqonchilik mahsulotlari
                  </option>
                </optgroup>

                <optgroup label="📦 Boshqa">
                  <option value="Bepul beriladi">Bepul beriladi</option>
                  <option value="Sotib olaman">Sotib olaman</option>
                  <option value="Ayirboshlash">Ayirboshlash</option>
                  <option value="Yo'qolgan buyumlar">Yo'qolgan buyumlar</option>
                  <option value="Topilgan buyumlar">Topilgan buyumlar</option>
                  <option value="Boshqa e'lonlar">Boshqa e'lonlar</option>
                </optgroup>
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
                <option value="Toshkent shahri">Toshkent sh.</option>
                <option value="Toshkent viloyati">Toshkent viloyati</option>
                <option value="Samarqand">Samarqand</option>
                <option value="Farg'ona">Farg'ona</option>
                <option value="Andijon">Andijon</option>
                <option value="Namangan">Namangan</option>
                <option value="Buxoro">Buxoro</option>
                <option value="Xorazm">Xorazm</option>
                <option value="Qashqadaryo">Qashqadaryo</option>
                <option value="Surxondaryo">Surxondaryo</option>
                <option value="Jizzax">Jizzax</option>
                <option value="Sirdaryo">Sirdaryo</option>
                <option value="Navoiy">Navoiy</option>
                <option value="Qoraqalpog'iston">
                  Qoraqalpog'iston Respublikasi
                </option>
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
          <div>
            {" "}
            <label className="block text-sm font-bold text-gray-700 mb-2">
              {" "}
              Telefon raqam <span className="text-red-500">*</span>{" "}
            </label>
            <div className="flex items-center w-full rounded-2xl border border-gray-200 bg-white focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500/20 transition-all overflow-hidden">
              {" "}
              <span className="px-4 py-3 text-sm font-semibold text-gray-600 bg-gray-50 border-r border-gray-200">
                {" "}
                +998{" "}
              </span>
              <input
                type="tel"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="90 787 66 65"
                className="w-full px-4 py-3 outline-none text-sm text-gray-800 bg-transparent"
              />
            </div>{" "}
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
