/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const HeaderLink = ({
  page,
  onClick,
}: {
  page: { url: any; name: string };
  onClick?: () => void;
}) => {
  const location = useLocation();
  const borderVariants = {
    hidden: { opacity: 0, width: "0%" },
    visible: { opacity: 1, width: "100%" },
  };

  return (
    <li>
      <motion.div transition={{ type: "spring", stiffness: 300 }}>
        <Link
          to={page.url}
          className={`relative text-[16px] 
            ${location === page.url ? "text-[#6E58FF]" : ""}`}
          onClick={onClick}
        >
          {page.name}
          {location === page.url && (
            <motion.div
              className="border-b-4 border-[#6E58FF] absolute bottom-[-38px] left-0 rounded-sm"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={borderVariants}
              transition={{ duration: 0.5 }}
            />
          )}
        </Link>
      </motion.div>
    </li>
  );
};
