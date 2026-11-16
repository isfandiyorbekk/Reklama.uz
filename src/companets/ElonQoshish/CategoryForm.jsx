import React from "react";

function CategoryForm({ category, setCategory, location, setLocation }) {
  return (
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
            <option value="Foto va video texnika">Foto va video texnika</option>
            <option value="Audio va aksessuarlar">Audio va aksessuarlar</option>
            <option value="O'yin pristavkalari">O'yin pristavkalari</option>
            <option value="Boshqa texnikalar">Boshqa texnikalar</option>
          </optgroup>

          <optgroup label="🚗 Transport">
            <option value="Yengil avtomobillar">Yengil avtomobillar</option>
            <option value="Yuk mashinalari">Yuk mashinalari</option>
            <option value="Mototsikllar">Mototsikllar</option>
            <option value="Velosipedlar">Velosipedlar</option>
            <option value="Skuter va elektrosamokatlar">
              Skuter va elektrosamokatlar
            </option>
            <option value="Avto ehtiyot qismlar">Avto ehtiyot qismlar</option>
            <option value="Avto aksessuarlar">Avto aksessuarlar</option>
            <option value="Transport ijarasi">Transport ijarasi</option>
          </optgroup>

          <optgroup label="🏠 Ko'chmas mulk">
            <option value="Kvartiralar sotiladi">Kvartiralar sotiladi</option>
            <option value="Kvartiralar ijaraga">Kvartiralar ijaraga</option>
            <option value="Uylar sotiladi">Uylar sotiladi</option>
            <option value="Uylar ijaraga">Uylar ijaraga</option>
            <option value="Yer uchastkalari">Yer uchastkalari</option>
            <option value="Tijorat binolari">Tijorat binolari</option>
            <option value="Ofislar">Ofislar</option>
            <option value="Garajlar">Garajlar</option>
            <option value="Ko'chmas mulk boshqa">Boshqa ko'chmas mulk</option>
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
            <option value="Qurilish materiallari">Qurilish materiallari</option>
            <option value="Ta'mirlash uskunalari">Ta'mirlash uskunalari</option>
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
            <option value="Tozalash xizmatlari">Tozalash xizmatlari</option>
            <option value="Yetkazib berish">Yetkazib berish</option>
            <option value="Yuk tashish">Yuk tashish</option>
            <option value="Ta'lim va repetitorlik">
              Ta'lim va repetitorlik
            </option>
            <option value="Tarjima xizmatlari">Tarjima xizmatlari</option>
            <option value="Foto va video xizmatlari">
              Foto va video xizmatlari
            </option>
            <option value="Go'zallik xizmatlari">Go'zallik xizmatlari</option>
            <option value="Boshqa xizmatlar">Boshqa xizmatlar</option>
          </optgroup>

          <optgroup label="🎫 Bilet va chiptalar">
            <option value="Samolyot chiptalari">Samolyot chiptalari</option>
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
            <option value="Kompyuter o'yinlari">Kompyuter o'yinlari</option>
            <option value="Sayohat anjomlari">Sayohat anjomlari</option>
            <option value="Kolleksiya buyumlari">Kolleksiya buyumlari</option>
          </optgroup>

          <optgroup label="🌾 Qishloq xo'jaligi">
            <option value="Qishloq xo'jaligi texnikalari">
              Qishloq xo'jaligi texnikalari
            </option>
            <option value="Urug' va ko'chatlar">Urug' va ko'chatlar</option>
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
  );
}

export default CategoryForm;
