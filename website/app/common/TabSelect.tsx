import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { name: "Home", path: "/" },
  { name: "Web", path: "/website" },
  { name: "Api", path: "/api-call" },
  { name: "About", path: "/about" }
];

export default function TabSelect() {
  const location = useLocation();
  const activeTab = tabs.find(tab => tab.path === location.pathname)?.name || "Home";

  return (
    <div className="flex items-center justify-center bg-gray-900">
      <div className="relative flex space-x-4 p-2 bg-gray-800 rounded-full shadow-lg">
        {tabs.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className={`relative z-10 px-4 py-2 text-white transition-all duration-200 ease-in-out ${
              activeTab === name ? "font-bold" : "opacity-75"
            }`}
          >
            {name}
            {activeTab === name && (
              <motion.div
                layoutId="tab-highlight"
                className="absolute -z-10 inset-0 bg-blue-500 rounded-full"
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}