/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = ({
  pages,
  isOpen,
  toggleOpen,
}: {
  pages: any;
  isOpen: boolean;
  toggleOpen: () => void;
}) => {
const location = useLocation();

  return (
    <motion.ul
      variants={variants}
      className={`text-right ${
        isOpen
          ? "bg-white w-[90%] z-50 top-0 fixed flex right-0 flex-col pt-[4rem]"
          : "hidden"
      }`}
    >
      {pages.map((page: any) => (
        <motion.li
          key={page.name}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          className={"block relative"}
        >
          <Link
            to={page.url}
            onClick={() => toggleOpen()}
            className={`font-[500] text-[18px] py-3 px-5 block mr-8  ${
              location === page.url ? "text-[#6E58FF]" : ""
            }`}
          >
            {page.name}
          </Link>
        </motion.li>
      ))}

      <motion.li variants={itemVariants}>
        <Link
          className="mr-8 relative inline-block px-8 py-3 bg-[#6E58FF] text-white font-medium rounded-md text-center hover:bg-[#6E58FF] transition duration-300 mb-4"
          to={"/entrepreneur"}
          onClick={toggleOpen}
        >
          Entrepreneurship login
        </Link>
      </motion.li>
    </motion.ul>
  );
};
