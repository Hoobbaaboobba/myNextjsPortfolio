"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="font-semibold text-4xl cursor-pointer"
    >
      M
    </div>
  );
};

export default Logo;
