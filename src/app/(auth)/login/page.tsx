"use client";

import { InfoTooltip } from "@/app/_components/support-components/info-tooltip";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/");
  };

  return (
    <div className="w-full h-screen flex">
      <div className="bg-[url(/login/bg-animate.png)] w-[65%] bg-cover bg-no-repeat bg-center"></div>

      <div className="w-[35%] flex flex-col justify-center items-center gap-10 bg-[#101522]">
        <div className="relative">
          <Image
            src="/login/blob.png"
            alt="blob"
            width={60}
            height={60}
            className="animate-blobMotion [animation-delay:1.2s]"
          />
        </div>

        <div className="flex flex-col justify-around gap-6 rounded-[12px] items-center p-6">
          <h1 className="font-semibold text-[32px]">Нэвтрэх</h1>

          <Button
            variant="default"
            className="w-[370px] flex items-center py-6 justify-center gap-2"
            onClick={handleLogin}
          >
            <Image
              src={"/login/microsoft-icon.png"}
              alt="microsoft"
              width={16}
              height={16}
            />
            <p className="text-[13px]">Microsoft office 365</p>
          </Button>

          <InfoTooltip
            text="Бүртгэл үүсгэх бол HR-тай холбогдоно уу."
            side="bottom"
            icon={
              <p className="underline text-blue-700 font-semibold tracking-wide">
                Бүртгэлгүй ?
              </p>
            }
          />
          <h6 className="Inter text-[11px] text-[#dddddd]"></h6>
        </div>
      </div>
    </div>
  );
}
