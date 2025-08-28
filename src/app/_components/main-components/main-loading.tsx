import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export function MainLoading() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#0C101C]">
      <DotLottieReact
        src="/animations/loading.lottie"
        className="w-[200px] h-[200px] absolute"
        loop
        autoplay
      />
    </div>
  );
}
