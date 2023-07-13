import React from "react";

export default function Banner() {
  return (
    <div className="w-full h-[300px] rounded-xl bg-slate-500">
      <img
        src="./banner.png"
        alt="banner"
        className="w-full h-full object-cover opacity-70 "
      />
    </div>
  );
}
