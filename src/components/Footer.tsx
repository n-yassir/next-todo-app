import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container border-t border-slate-800 py-8 flex items-center justify-between">
      <Link
        href="https://ayaline.com"
        className="flex items-center gap-8 opacity-60 hover:opacity-100 transition-opacity"
        target="_blank"
      >
        <Image
          src="https://www.ayaline.com/wp-content/uploads/2022/09/cropped-favicon-32x32-1-192x192.png"
          alt="Yassir Nasser Logo"
          width={50}
          height={50}
        />
        <span>
          Created by Yassir Nasser
        </span>
      </Link>
    </footer>
  );
}
