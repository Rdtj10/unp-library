import PopNav from "./PopNav";
import Header from "./Header";
import FixNav from "./FixNav";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  {
    /* useState */
  }
  const [scrollDown, setScrollDown] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setScrollDown(true);
    } else {
      setScrollDown(false);
    }
  };

  {
    /* usEffect */
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  {
    /* Fungsi Utama */
  }
  return (
    <div className="relative flex flex-col">
      <div className="sticky z-50">
        <Header />
        {scrollDown ? <FixNav scrollDown={scrollDown} /> : <PopNav />}
      </div>
      <div className="relative mt-auto transition-all duration-500 ease-in-out">
        {children}
      </div>
    </div>
  );
};

export default Layout;
