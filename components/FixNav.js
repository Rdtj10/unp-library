import Link from "next/link";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import { Typewriter } from "react-simple-typewriter";

export const navData = [
  { name: "Beranda", path: "/" },
  { name: "Profil", path: "/profil" },
  { name: "About", path: "/about" },
  { name: "Panduan", path: "/panduan" },
  { name: "Bibliografi", path: "/bibliografi" },
  { name: "E-Book", path: "/cari" },
];

const FixNav = () => {
  {
    /* Event Handler */
  }
  const [isNavHovered, setIsNavHovered] = useState(false);
  const hovered = () => {
    setIsNavHovered(true);
  };
  const leave = () => {
    setIsNavHovered(false);
  };

  {
    /* Router */
  }
  const router = useRouter();
  const pathname = router.pathname;

  {
    /* Transisi */
  }
  const NavAnimation = {
    initial: {
      y: -5,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
      },
    },
    exit: {
      y: 5,
      opacity: 0,
    },
  };

  {
    /* Fungsi Utama */
  }
  return (
    <motion.nav
      className={`bg-[#ff9600] fixed flex items-center top-0 w-full justify-center h-16 shadow-md shadow-neutral-700 text-white transition-all duration-500  ${
        isNavHovered ? "hover:text-opacity-100" : ""
      }`}
      onMouseEnter={hovered}
      onMouseLeave={leave}
      key={1}
      variants={NavAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex items-center container justify-between space-x-10 mx-auto">
        <div className="bg-white rounded-full w-fit px-5">
          <h1 className="font-semibold text-xl text-black text-opacity-100">
            Layanan{" "}
            <span className={`text-[#1a409a] text-xl font-bold`}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Administrasi",
                  "Sirkulasi",
                  "Koleksi Umum",
                  "Referensi",
                  "Koleksi Terbitan Berkala",
                  "Pojok Corner",
                  "Koleksi Digital",
                ]}
                loop={100}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>

        <div className="flex items-center space-x-7">
          {navData.map((link, index) => {
            return (
              <Link
                className={`${link.path === pathname} hover:text-gray-300`}
                href={link.path}
                key={index}
              >
                <div>{link.name}</div>
              </Link>
            );
          })}
          <SearchBar />
        </div>
      </div>
    </motion.nav>
  );
};

export default FixNav;
