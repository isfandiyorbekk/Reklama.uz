import React from "react";
import { Link } from "react-router-dom";

function BizHaqimizda() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10">
        {/* Sarlavha va Tavsif */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Biz haqimizda
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <strong className="text-red-600">Reklama.uz</strong> —
            O‘zbekistondagi eng qulay, tezkor va zamonaviy e’lonlar hamda
            xizmatlar platformasi.
          </p>
        </div>

        {/* Asosiy maqsad bloki */}
        <div className="mb-10 text-gray-800 leading-relaxed text-base sm:text-lg bg-red-50/60 p-6 rounded-xl border border-red-100">
          Bizning asosiy maqsadimiz — sotuvchilar va xaridorlar, xizmat
          ko‘rsatuvchilar va mijozlar o‘rtasida ishonchli hamda shaffof ko‘prik
          bo‘lishdir.
        </div>

        {/* Ustunliklar grid bloki */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Nima uchun aynan Reklama.uz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-red-600 transition-colors">
              <div className="text-red-600 text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-1">Tez va Oson</h3>
              <p className="text-sm text-gray-600">
                Bir necha soniya ichida o‘z e’loningizni joylashtiring va
                minglab potentsial mijozlarga etib boring.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-red-600 transition-colors">
              <div className="text-red-600 text-2xl mb-2">📂</div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Keng Imkoniyatlar
              </h3>
              <p className="text-sm text-gray-600">
                Ko‘chmas mulk, avtomobillar, maishiy texnika, ish o‘rinlari va
                turli xizmatlar — barchasi bir joyda.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-red-600 transition-colors">
              <div className="text-red-600 text-2xl mb-2">🛡️</div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Xavfsiz va Qulay
              </h3>
              <p className="text-sm text-gray-600">
                Foydalanuvchilar uchun intuitiv va zamonaviy interfeys, saralash
                va qidiruv tizimi.
              </p>
            </div>
          </div>
        </div>

        {/* Vazifamiz */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Bizning vazifamiz
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Foydalanuvchilarimizga o‘z mahsulot va xizmatlarini tez fursatda
            sotish hamda kerakli e’lonlarni ortiqcha qiyinchiliklarsiz
            topishlariga ko‘maklashish.
          </p>
        </div>

        {/* CTA Tugma bloki */}
        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-gray-800 font-medium mb-4">
            Siz ham bugunoq o‘z e’loningizni joylashtiring va yangi
            imkoniyatlarni kashf eting!
          </p>
          <Link
            to={"/qoshish"}
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5 rounded-lg transition-all shadow-sm"
          >
            + E'lon joylashtirish
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BizHaqimizda;
