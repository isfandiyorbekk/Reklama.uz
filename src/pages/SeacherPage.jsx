import React, { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";
import SeacherCard from "../companets/SeacherCard";

function SeacherPage() {
  const { submittedSearch, filtered, showMore } = useContext(SearchContext);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-50 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-red-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#ed001b]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ed001b]" />
              Reklama.uz — Qidiruv natijalari
            </span>

            <h1 className="mt-6 text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Siz izlagan
              <span className="text-[#ed001b]"> e'lonlar </span>
              shu yerda
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              O'zingizga kerakli mahsulot yoki xizmatni toping. Reklama.uz
              orqali minglab e'lonlarni ko'rib chiqing.
            </p>

            {/* SEARCH INFO */}
            <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 text-left shadow-lg shadow-gray-200/40">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-xl">
                🔎
              </div>

              <div className="min-w-0 flex-1">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Sizning qidiruvingiz
                </span>

                <h2 className="mt-1 truncate text-sm font-bold text-gray-900 sm:text-base">
                  {submittedSearch || "Barcha e'lonlar"}
                </h2>
              </div>

              <div className="hidden rounded-xl bg-red-50 px-3 py-2 text-xs font-bold text-[#ed001b] sm:block">
                Qidiruv
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="mx-auto max-w-7xl px-2 py-10 sm:px-5 sm:py-12 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ed001b]">
              Natijalar
            </span>

            <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">
              Topilgan e'lonlar
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Sizning qidiruvingizga mos e'lonlar
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#ed001b]" />

            <span className="text-sm font-bold text-gray-700">
              {filtered.length} ta natija
            </span>
          </div>
        </div>

        {/* CARD */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white py-3 shadow-sm sm:rounded-3xl sm:py-5">
          <SeacherCard />
          <button
            onClick={showMore}
            className="group mx-auto mt-8 flex items-center justify-center gap-2 rounded-xl border-2 border-red-600 bg-white px-8 py-3 font-semibold text-red-600 shadow-sm transition-all duration-300 hover:bg-red-600 hover:text-white hover:shadow-lg active:scale-95"
          >
            Yana ko‘rsatish
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#ed001b] px-6 py-9 sm:px-12 sm:py-12">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                Reklama.uz
              </span>

              <h2 className="mt-3 text-2xl font-black leading-tight text-white sm:text-4xl">
                Sizda ham e'lon bormi?
                <br />
                Uni biz bilan ulashing!
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/80">
                E'loningizni joylashtiring va minglab foydalanuvchilarga yetib
                boring.
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

export default SeacherPage;
