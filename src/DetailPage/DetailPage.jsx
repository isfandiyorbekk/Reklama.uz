import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BASE_URL = "https://reklama-backend-ax7j.onrender.com";

function DetailPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // yoki behavior: 'auto'
  }, []);
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    async function getDetail() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`${BASE_URL}/api/announcements/${id}`);

        if (!res.ok) {
          throw new Error("E'lon ma'lumotlarini olishda xatolik!");
        }

        const result = await res.json();

        setItem(result.data || result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getDetail();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-red-600"></div>
      </div>
    );
  }

  // Error
  if (error || !item) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-semibold">{error || "E'lon topilmadi"}</h2>

        <Link to="/" className="rounded-lg bg-red-600 px-5 py-2 text-white">
          Bosh sahifaga qaytish
        </Link>
      </div>
    );
  }

  const images = item.images || [];

  const getImageUrl = (image) => {
    if (!image) return "https://placehold.co/600x700";

    return image.startsWith("http") ? image : `${BASE_URL}${image}`;
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-10 bg-gray-50/60 min-h-screen">
      {/* ORQAGA QAYTISH */}
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors"
      >
        <span>←</span> Asosiy sahifaga qaytish
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-gray-100/80">
        {/* CHAP TAFSILOT: RASMLAR */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Asosiy rasm */}
          <div className="overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 relative group aspect-square flex items-center justify-center">
            <img
              src={getImageUrl(images[activeImage])}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {item.category && (
              <span className="absolute top-4 left-4 rounded-xl bg-red-600 text-white px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase shadow-md">
                {item.category}
              </span>
            )}
          </div>

          {/* Kichik rasmlar (Thumbnails) */}
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all bg-gray-50 ${
                    activeImage === index
                      ? "border-red-600 ring-4 ring-red-600/10 scale-95"
                      : "border-transparent hover:border-gray-300 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={getImageUrl(image)}
                    alt={`Rasm ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* O'NG TAFSILOT: MA'LUMOTLAR VA BREND LOGOTIP */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* E'lon sarlavhasi */}
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {item.title}
            </h1>

            {/* Joylashuv ma'lumotlari */}
            <div className="mt-6 flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 w-fit">
              <span className="text-xl">📍</span>
              <div>
                <span className="text-xs text-gray-400 block font-medium">
                  Joylashuv
                </span>
                <span className="text-sm font-bold text-slate-900">
                  {item.location || "Ko'rsatilmagan"}
                </span>
              </div>
            </div>

            {/* Batafsil tavsif */}
            <div className="mt-8">
              <h2 className="mb-3 text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                Batafsil tavsif
              </h2>

              <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100">
                <p className="whitespace-pre-line leading-relaxed text-slate-600 text-sm sm:text-base">
                  {item.description || "Tavsif mavjud emas"}
                </p>
              </div>
            </div>

            {item.number && (
              <div className="mt-6 flex items-center justify-between rounded-2xl bg-gray-50 px-5 py-3.5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📞</span>
                  <p className="font-bold text-slate-900 hover:text-red-600 transition-colors">
                    +998 {item.number}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* PASTKI QISM */}
          <div className="mt-8 pt-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="text-base">🛡️</span>
              <span>Xavfsiz uchrashuv va kelishuv</span>
            </div>

            {/* Reklama.uz logotipi */}
            <div className="flex items-center gap-1 text-xl sm:text-2xl font-black tracking-tight select-none">
              <span className="text-red-600">Reklama</span>
              <span className="text-slate-900">.uz</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
