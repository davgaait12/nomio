import React from "react";
import Image from "next/image";

const RomanticInvitationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 flex items-center justify-center p-6">
      <div className="backdrop-blur-md bg-white/80 shadow-2xl rounded-3xl p-10 max-w-xl text-center border border-white/40">
        <h1 className="text-4xl font-extrabold text-rose-600 mb-6 tracking-wide">
          Номинд зориулав 🌹
        </h1>

        <p className="text-gray-700 text-lg mb-6 leading-relaxed whitespace-pre-line font-light">
          Чи Монголд ирэх тэр өдөр — Мартагдашгүй нэгэн бороотой өдөр байх
          болтугай. Борооны дусал бүрт миний чамд хандах сэтгэл шингэсэн мэт...
          Тэр өдөр би чамайг болзоонд урьж байна. Нам гүм гудамж, халуун кофе,
          цэцэгсийн үнэр...
        </p>

        <div className="relative w-full h-80 mb-6 rounded-xl overflow-hidden shadow-md border border-white/60">
          <Image
            src="/img/zurag.jpeg"
            alt="Романтик зураг"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <p className="text-gray-600 mb-4 text-base font-medium">
          🕒 Хэзээ: Чи Монголд ирэх тэр өдөр
          <br />
          📍 Хаана: Чиний дуртай газар дээр
        </p>

        <p className="mt-6 text-rose-400 italic text-md">
          Чамайг догдлон хүлээж байна... 🌧️
        </p>
      </div>
    </div>
  );
};

export default RomanticInvitationPage;
