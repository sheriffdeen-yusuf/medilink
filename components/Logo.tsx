import Link from "next/link";
import logo from "../app/public/mdLogo.png";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height="40"
        width="40"
        alt="MediLink"
        className="rounded-full"
        quality={100}
      />
      <span className="text-xl font-semibold text-primary ">MediLink</span>
    </Link>
  );
}

export default Logo;
