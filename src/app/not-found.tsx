"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        backgroundImage: "url('/login/bg-animate.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-center w-full min-h-screen"
    >
      <div className="flex flex-col items-center justify-center gap-4 backdrop-blur-lg rounded-lg px-20 py-8">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg mb-6">Уучлаарай ийм пэйж олдсонгүй</p>
        <div className="flex gap-5">
          <Link
            href="/"
            className="px-3 py-2 bg-white/20 text-white rounded-lg hover:bg-blue-900 transition-all duration-300 ease-in-out"
          >
            Үндсэн пэйж рүү үсрэх
          </Link>
          <Link
            href="/login"
            className="px-3 py-2 bg-white/20 text-white rounded-lg hover:bg-blue-900 transition-all duration-300 ease-in-out"
          >
            Нэвтрэх хэсэг рүү үсрэх
          </Link>
        </div>
      </div>
    </div>
  );
}
