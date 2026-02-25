import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        priority={true}
      />
    </Link>
  );
}
