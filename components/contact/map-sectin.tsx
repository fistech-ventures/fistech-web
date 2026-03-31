import React from "react";

export default function MapSection() {
  // Replace this encoded string with your actual location or a Google Maps Embed API Key
  // This URL is for Mirpur, Dhaka based on your screenshot
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.19102739418057!2d90.40795527479936!3d23.781004499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a62be3b341%3A0xf1871769b859d8a3!2sEGC%20Limited!5e0!3m2!1sen!2sbd!4v1774768463424!5m2!1sen!2sbd";

  return (
    <section className="w-full pt-12 md:pt-20 bg-white">
      <div className="">
        <div className="relative w-full h-87.5 md:h-125 lg:h-150 overflow-hidden shadow-sm border border-gray-100">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className=""
          ></iframe>
        </div>
      </div>
    </section>
  );
}
