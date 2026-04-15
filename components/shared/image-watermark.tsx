import Image from "next/image";
import React from "react";

export default function ImgWaterMark() {
  return (
    <div className="w-72 h-32 bg-white/20 backdrop-blur-2xl absolute -right-28 -bottom-10 -rotate-45 flex justify-center pt-6">
      <Image
        width={500}
        height={300}
        src="/logo-p.png"
        alt="Fistech ventures logo"
        className="w-20 h-10 object-contain rotate-45"
      />
    </div>
  );
}
