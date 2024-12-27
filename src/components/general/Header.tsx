/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import { HeaderPages } from "../../util/util";
import { HeaderLink } from "./HeaderLink";
import { Hamburger } from "./Hamburger";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

type Page = {
  name: string;
  url: string;
  isSupport?: boolean;
  children?: { name: string; url: string }[];
};

const Header = () => {
  const [showSupportItems, setShowSupportItems] = useState(false);
  const supportRef = useRef<HTMLLIElement>(null);

  const handleSupportClick = () => {
    setShowSupportItems((prev) => !prev);
  };

  const handleLinkClick = () => {
    setShowSupportItems(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (supportRef.current && !supportRef.current.contains(e.target as Node)) {
      setShowSupportItems(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const modifiedPages: Page[] = [
    ...HeaderPages.filter(
      (page) => page.name !== "Contact Us" && page.name !== "About Us"
    ),
    {
      name: "Support",
      url: "#",
      isSupport: true,
      children: [
        { name: "Contact Us", url: "/contact-us" },
        { name: "About Us", url: "/about-us" },
      ],
    },
  ];

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous : any = scrollY.getPrevious();
    if (latest > previous && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0, top: 0 },
        hidden: { y: "-100%", top: "-50%" },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.45,
        ease: [0.42, 0, 0.58, 1],
      }}
      className="fixed  w-full z-[2000] bg-gray-100 desk-md:shadow-custom-dark"
    >
      <div className="desk-md:border-b border-b-[#F2F2F2]">
        <section className="flex py-[15px] gap-[2rem] items-center w-[90%] mx-auto justify-between">
          <Link className="block" to={"/"}>
            <div className="w-[64px] h-[35.1px]">
              {/* <img src={AbsLogo} alt="logo" className="w-full h-auto" /> */}
            </div>
          </Link>

          <Hamburger />
          <article className="px-[15px] py-[20px] items-center justify-center w-[97%] mx-auto hidden desk-md:flex">
            <ul className="font-[500] flex items-center gap-[25px] relative">
              {modifiedPages.map((page, index) => (
                <React.Fragment key={index}>
                  {page.isSupport ? (
                    <li className="relative cursor-pointer" ref={supportRef}>
                      <motion.div
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span
                          onClick={handleSupportClick}
                          className="relative text-[16px] flex items-center gap-2"
                        >
                          {page.name}
                          <span
                            className={`${
                              showSupportItems ? "rotate-180" : ""
                            } transition-transform duration-300`}
                          >
                            <CaretDownIcon />
                          </span>
                        </span>
                      </motion.div>
                      {showSupportItems && (
                        <ul className="absolute left-0 top-[100%] mt-9 w-[200px]  rounded-md bg-gray-100 desk-md:shadow-custom-dark z-10">
                          {page.children?.map((child, idx) => (
                            <li
                              key={idx}
                              className="hover:bg-[#6E58FF] hover:text-white"
                            >
                              <Link
                                to={`${child.url}`}
                                className="py-2 px-4 block"
                                onClick={handleLinkClick}
                              >
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <HeaderLink page={page} onClick={handleLinkClick} />
                  )}
                </React.Fragment>
              ))}
            </ul>
          </article>

          <div className="relative text-center hidden desk-md:inline-block ">
            <Link
              to="/entrepreneur"
              className="relative inline-block px-5 py-3 bg-[#6E58FF] text-white font-medium rounded-md text-center hover:bg-[#6E58FF] transition duration-300"
            >
              Entrepreneurship
            </Link>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Header;
