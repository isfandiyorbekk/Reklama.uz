import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    tag: "Bepul",
    title: "Bepul e'lon joylashtirish",
    description:
      "O'zingizga tegishli buyum, texnika, ko'chmas mulk yoki xizmatlar haqida hech qanday to'lovsiz osongina e'lon bering.",
    features: [
      "100% bepul joylashtirish",
      "Bir nechta sifatli rasm yuklash",
      "Tezkor moderatsiya va nashr",
      "Qulay va tushunarli shakl",
    ],
  },
  {
    id: 2,
    tag: "Qulay",
    title: "To'g'ridan-to'g'ri savdo",
    description:
      "Xaridorlar va sotuvchilar o'rtasida ortiqcha vositachilarsiz, to'g'ridan-to'g'ri telefon yoki xabar orqali bog'lanish imkoniyati.",
    features: [
      "Vositachilarsiz muloqot",
      "Telefon raqamni tezkor ko'rish",
      "Hudud va kategoriya bo'yicha saralash",
      "Xaridorlar bilan kelishish erkinligi",
    ],
  },
  {
    id: 3,
    tag: "Keng auditoriya",
    title: "Barcha yo'nalishlar bir joyda",
    description:
      "Avtomobillardan tortib maishiy texnika, ish o'rinlari va turli xizmatlargacha — barcha turdagi e'lonlarni qabul qilamiz.",
    features: [
      "Turli xil kategoriyalar",
      "O'zbekiston bo'ylab qamrov",
      "Qulay qidiruv tizimi",
      "24/7 e'lon qabul qilish",
    ],
  },
];

const steps = [
  {
    step: "01",
    title: "Ro'yxatdan o'ting",
    desc: "Platformada o'z hisobingizni yarating yoki tizimga kiring.",
  },
  {
    step: "02",
    title: "Ma'lumotlarni kiriting",
    desc: "Mahsulot rasmlari, sarlavhasi va qisqacha tavsifini yozing.",
  },
  {
    step: "03",
    title: "E'lonni joylang",
    desc: "Tekshiruvdan so'ng e'loningiz foydalanuvchilarga ko'rinadi.",
  },
];

export default function Xizmatlar() {
  return (
    <section className="w-full min-h-screen bg-white text-[#101828] py-16 px-4 sm:px-8 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha qismi */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#E7000B] bg-red-50 border border-red-100 px-3 py-1 rounded-full mb-4">
            Bizning imkoniyatlar
          </span>

          <h1 className="text-3xl sm:text-4xl font-black text-[#101828] tracking-tight mb-4">
            <span className="text-[#E7000B]">Reklama</span>
            <span className="text-[#101828]">.uz</span> — e'lonlaringizni bepul
            qabul qilamiz
          </h1>

          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Sotmoqchi bo'lgan mahsulotingiz yoki taklif qiladigan xizmatingiz
            bormi? Platformamizga e'lon joylashtiring va xaridorlarni oson
            toping.
          </p>
        </div>

        {/* Xizmatlar kartochkalari */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between bg-white border border-slate-200 hover:border-[#E7000B]/40 hover:shadow-xl hover:shadow-slate-200/50 rounded-2xl p-6 sm:p-8 transition-all duration-300"
            >
              <div>
                <div className="mb-5">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red-50 text-[#E7000B] border border-red-100">
                    {service.tag}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#101828] border-l-2 border-[#E7000B] pl-3 mb-3">
                  {service.title}
                </h2>

                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="flex flex-col gap-3 text-sm text-[#101828] border-t border-slate-100 pt-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span className="text-[#E7000B] font-bold mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Qanday ishlaydi bo'limi */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-[#101828] text-center mb-8">
            E'lon berish tartibi
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-[#E7000B]/30 transition-all duration-300"
              >
                <span className="text-2xl font-black text-[#E7000B] block mb-2">
                  {item.step}
                </span>

                <h4 className="text-[#101828] font-bold text-base mb-1.5">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pastki chaqiruv banneri */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#101828] mb-2">
              Hozirroq o'z e'loningizni joylashtiring
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed">
              Hech qanday to'lovlarsiz, tez va qulay tarzda{" "}
              <span className="font-semibold">
                <span className="text-[#E7000B]">Reklama</span>
                <span className="text-[#101828]">.uz</span>
              </span>{" "}
              orqali mahsulotlaringizni xaridorlarga taqdim eting.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              to="/"
              className="bg-[#E7000B] hover:bg-[#c90009] text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
            >
              E'lonlarni ko'rish
            </Link>

            <Link
              to="/aloqa"
              className="bg-white hover:bg-slate-100 text-[#101828] border border-slate-200 font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
            >
              Savol berish
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
