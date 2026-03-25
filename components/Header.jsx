import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 md:px-16 xl:px-0">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-1 py-1 md:py-2 lg:py-8">
          {/* logo */}
          <Link href="/" className="flex justify-center">
            <Image
              src="/logo.svg"
              alt="logo"
              width={280}
              height={72}
              priority
              className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[350px] xl:w-[420px] h-auto"
            />
          </Link>

          {/* socials */}
          <div className="scale-75 sm:scale-90 md:scale-100">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
