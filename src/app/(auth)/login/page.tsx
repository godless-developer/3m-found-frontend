"use client";

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
      <div className="bg-[url(/login/bg-animate.png)] w-[70%] bg-contain bg-no-repeat bg-center"></div>

      <div className="w-[30%] flex flex-col justify-center items-center gap-10 bg-[#101522]">
        <Image src={"/login/blob.png"} alt="blob" width={60} height={60} />

        <div className="flex flex-col justify-around gap-6 rounded-[12px] items-center p-6">
          <h1 className="font-semibold text-[32px]">Нэвтрэх</h1>

          <Button
            variant="default"
            className="w-[370px] flex items-center justify-center gap-2"
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

          <h6 className="Inter text-[11px] text-[#dddddd]">
            Бүртгэл үүсгэх бол HR-тай холбогдоно уу.
          </h6>
        </div>
      </div>
    </div>
  );
}
