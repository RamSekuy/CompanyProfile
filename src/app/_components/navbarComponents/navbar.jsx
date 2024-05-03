import Humburger from "./humburger";
import Image from "next/image";

export default function Navbar() {
  function navbarLink(text, url) {
    return { text, url };
  }

  const hrefList = [
    navbarLink("Home", "/"),
    navbarLink("About Us", "/about-us"),
    navbarLink("Games", "/games"),
    navbarLink("Teams", "/teams"),
  ];

  return (
    <nav className="sticky top-0 z-40 text-xs md:text-base">
      <div className="w-full bg-green-400 flex justify-between px-2 text-black h-8 md:h-12">
        <div className="h-full flex items-center justify-center gap-3">
          <div className="h-full aspect-square">
            <Image
              src={"/logo.svg"}
              width={100}
              height={100}
              alt="Logo"
              priority
            />
          </div>
          <h1 className="hidden text-lg font-semibold sm:block py-2">
            N0013 Company
          </h1>
        </div>

        <Humburger hrefList={hrefList} />
      </div>
    </nav>
  );
}
