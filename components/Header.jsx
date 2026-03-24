import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 md:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-4 lg:py-8">
          {/* logo */}
          <Link href="/" className="flex justify-center">
            <Image
              src="/logo.svg"
              alt="logo"
              width={280}
              height={72}
              priority
              className="w-[200px] md:w-[280px] lg:w-[420px] h-auto"
            />
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
