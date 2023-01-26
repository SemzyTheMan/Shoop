import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { useRouter } from "next/router";
export const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className={"h-6 w-32 relative cursor-pointer"}
    >
      <Image
        src={logo}
        alt={"Logo"}
        fill={true}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};
