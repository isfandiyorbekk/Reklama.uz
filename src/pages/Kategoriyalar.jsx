import React, { useContext, useState, useMemo } from "react";
import { SearchContext } from "../Context/SearchContext";
import categories from "../data/Categories";
function Kategoriyalar() {
  const { handleSearch } = useContext(SearchContext);
  const [search, setSearch] = useState("");

  const allCategories = useMemo(() => {
    return categories.flatMap((category) =>
      category.items.map(([name, icon]) => ({
        name,
        icon,
        parent: category.name,
        color: category.color,
      })),
    );
  }, []);

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return allCategories;

    return allCategories.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.parent.toLowerCase().includes(query),
    );
  }, [search, allCategories]);

  function selectCategory(category) {
    handleSearch(category);
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-50 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-red-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#ed001b]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ed001b]" />
              Reklama.uz — Barcha e'lonlar bir joyda
            </span>

            <h1 className="mt-6 text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              O'zingizga kerakli
              <span className="text-[#ed001b]"> kategoriyani </span>
              tanlang
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Sotmoqchimisiz, sotib olmoqchimisiz yoki xizmat taklif
              qilmoqchimisiz? Barcha turdagi e'lonlar Reklama.uz saytida!
            </p>

            {/* SEARCH */}
            <div className="mx-auto mt-9 flex max-w-xl items-center rounded-2xl border border-gray-200 bg-white p-2 shadow-lg shadow-gray-200/50 transition focus-within:border-[#ed001b] focus-within:ring-4 focus-within:ring-red-50">
              <svg
                className="ml-3 h-5 w-5 shrink-0 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" strokeWidth="2" />
                <path d="m16 16 4 4" strokeWidth="2" strokeLinecap="round" />
              </svg>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Kategoriyani qidiring..."
                className="w-full border-none bg-transparent px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:ring-0"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="mr-2 rounded-lg px-3 py-2 text-sm text-gray-400 hover:bg-gray-100"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ed001b]">
              Kategoriyalar
            </span>

            <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">
              Barcha yo'nalishlar
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              O'zingizga kerakli bo'limni tanlang
            </p>
          </div>

          <div className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm">
            {filteredCategories.length} ta kategoriya
          </div>
        </div>

        {/* CARDS */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {filteredCategories.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => selectCategory(item.name)}
                className="group relative flex min-h-[175px] flex-col items-start overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-xl hover:shadow-red-100/40 sm:min-h-[190px] sm:p-5"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-red-50/70 transition-transform duration-500 group-hover:scale-[1.8]" />

                {/* ICON */}
                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-2xl text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 sm:h-14 sm:w-14 sm:text-3xl ${item.color}`}
                >
                  {item.icon}
                </div>

                {/* TEXT */}
                <div className="relative mt-4 w-full">
                  <span className="mb-1 block truncate text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                    {item.parent}
                  </span>

                  <h3 className="line-clamp-2 text-xs font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#ed001b] sm:text-sm">
                    {item.name}
                  </h3>
                </div>

                {/* ARROW */}
                <div className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all duration-300 group-hover:bg-[#ed001b] group-hover:text-white">
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m9 18 6-6-6-6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white px-5 py-16 text-center shadow-sm">
            <div className="text-5xl">🔎</div>

            <h3 className="mt-5 text-lg font-bold text-gray-800">
              Kategoriya topilmadi
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Boshqa nom bilan qidirib ko'ring.
            </p>

            <button
              onClick={() => setSearch("")}
              className="mt-5 rounded-xl bg-[#ed001b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Qidiruvni tozalash
            </button>
          </div>
        )}
      </section>

      {/* BOTTOM BANNER */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#ed001b] px-6 py-10 sm:px-12 sm:py-14">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                Reklama.uz
              </span>

              <h2 className="mt-3 text-2xl font-black leading-tight text-white sm:text-4xl">
                Sizda ham e'lon bormi?
                <br />
                Uni biz bilan ulashing!
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/80">
                O'z e'loningizni joylashtiring va kerakli xaridorlar yoki
                mijozlar bilan bog'laning.
              </p>
            </div>

            <button
              onClick={() => window.location.assign("/qoshish")}
              className="group flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#ed001b] shadow-lg transition hover:-translate-y-1 hover:bg-gray-100"
            >
              E'lon joylashtirish
              <span className="text-lg transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Kategoriyalar;
