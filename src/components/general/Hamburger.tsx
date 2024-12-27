import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../hooks/useDimension";
import { MenuToggle } from "./Menutoggle";
import { Navigation } from "./Navigation";
import { HeaderPages } from "../../util/util";

export const Hamburger = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="flex desk-md:hidden "
    >
      <Navigation pages={HeaderPages} isOpen={isOpen} toggleOpen={toggleOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
