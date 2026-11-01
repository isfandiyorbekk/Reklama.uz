import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-gray-300 border-t border-white/10 pt-12 pb-6 px-4 sm:px-8 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
        {/* 1. Reklama.uz logotip va tavsifi */}
        <div className="flex flex-col items-center gap-3">
          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-white inline-block"
          >
            <span className="text-red-600">Reklama</span>
            <span className="text-white">.uz</span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            O'zbekistondagi zamonaviy va qulay e'lonlar platformasi. Uyingizdan
            chiqmay turib xarid qiling yoki o'z e'loningizni joylashtiring.
          </p>
        </div>

        {/* 2. Tezkor havolalar */}
        <div className="flex flex-col items-center">
          <h4 className="text-white font-bold text-base mb-4 border-l-2 border-red-600 pb-1 px-3 inline-block">
            Tezkor havolalar
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link to="/" className="hover:text-red-500 transition-colors">
                Barcha e'lonlar
              </Link>
            </li>
            <li>
              <Link
                to="/kategoriyalar"
                className="hover:text-red-500 transition-colors"
              >
                Kategoriyalar
              </Link>
            </li>
            <li>
              <Link
                to="/xizmatlar"
                className="hover:text-red-500 transition-colors"
              >
                Xizmatlar
              </Link>
            </li>
            <li>
              <Link
                to="/biz_haqimizda"
                className="hover:text-red-500 transition-colors"
              >
                Biz haqimizda
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-white font-bold text-base mb-4 border-l-2 border-red-600 pb-1 px-3 inline-block">
            Yordam va xavfsizlik
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link
                to="/qoidalar"
                className="hover:text-red-500 transition-colors"
              >
                Foydalanish qoidalari
              </Link>
            </li>
            <li>
              <Link
                to="/xavfsizlik"
                className="hover:text-red-500 transition-colors"
              >
                Xavfsizlik maslahatlari
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-red-500 transition-colors">
                Ko'p beriladigan savollar (FAQ)
              </Link>
            </li>
            <li>
              <Link
                to="/aloqa"
                className="hover:text-red-500 transition-colors"
              >
                Qo'llab-quvvatlash xizmati
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 text-xs text-gray-500 text-center">
        <p>
          © {new Date().getFullYear()} Reklama.uz. Barcha huquqlar himoyalangan.
        </p>
        <p className="flex items-center gap-1">
          <span>Yaratuvchi:</span>
          <span className="text-gray-300 font-semibold">Isfandiyor.Dev</span>
        </p>
      </div>
    </footer>
  );
}
