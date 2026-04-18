import Image from "next/image";
import React from "react";

export default function ImgWaterMark() {
  return (
    <div className="w-32 h-12 lg:w-60 lg:h-28 bg-white/20 backdrop-blur-2xl absolute -right-12 lg:-right-28 -bottom-2 lg:-bottom-10 -rotate-45 flex justify-center pt-2 lg:pt-4">
      <Image
        width={500}
        height={300}
        src="/fistech-icon.png"
        alt="Fistech ventures logo"
        className="w-10 h-5 lg:w-14 lg:h-7 object-contain rotate-45"
      />
    </div>
  );
}
