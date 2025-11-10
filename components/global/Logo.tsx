import Image from "next/image";

function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={20}
      height={20}
      className="rounded-full dark:border"
    />
  );
}

export default Logo;
