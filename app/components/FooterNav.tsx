"use client";

import { IoMdContact } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterNav = () => {
  const pathname = usePathname();

  const activeStyles = "border border-primary rounded-full";
  const navItems = [
    { href: "/", icon: <IoHome />, label: "Home" },
    { href: "/skills", icon: <MdWork />, label: "Skills" },
    { href: "/contact", icon: <IoMdContact />, label: "Contact" },
  ];

  return (
    <div className="fixed bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex justify-center items-center">
      <motion.nav
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <nav className="flex gap-2 rounded-full items-center px-2 py-0.5 backdrop-blur-xl relative">
          {navItems.map(({ href, icon, label }) => (
            <Link key={href} href={href} aria-label={label} className="relative">
              <div className="w-11 h-10 flex items-center justify-center">
                {icon}
              </div>
              {pathname === href && (
                <motion.div
                  layoutId="activeIndicator"
                  className={`absolute inset-0 ${activeStyles}`}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </Link>
          ))}
        </nav>
      </motion.nav>
    </div>
  );
};

export default FooterNav;




