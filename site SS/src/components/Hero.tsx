"use client";

export default function Hero() {
  return (
    <div id="intro" className="flex flex-col mt-[22vh] mx-10">
      <h1 className="text-[44px] text-center font-semibold text-white tracking-tight">
        Что вы хотите узнать сейчас?
      </h1>
      <p className="mb-6 text-center text-gray-400">
        <span>Создавайте, запускайте, редактируйте и развертывайте полнофункциональные</span>{" "}
        <span className="text-white font-medium">веб</span> и{" "}
        <span className="text-white font-medium">мобильные</span> приложения.
      </p>
    </div>
  );
}
