import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Info, 
  Globe, 
  Flag, 
  ChevronLeft, 
  Newspaper, 
  TrendingUp,
  ChevronDown,
  Users,
  Film,
  Cpu,
  Heart
} from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  toggleCollapse: () => void;
};

function Sidebar({ isOpen, onClose, isCollapsed, toggleCollapse }: Props) {
  const location = useLocation();
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Home, color: "from-blue-500 to-cyan-500" },
    { name: "About", path: "/about", icon: Info, color: "from-purple-500 to-pink-500" },
    { name: "Kenyan News", path: "/kenya", icon: Flag, color: "from-green-500 to-emerald-500" },
    { name: "World News", path: "/world", icon: Globe, color: "from-orange-500 to-red-500" },
  ];

  const categories = [
    { name: "Politics", path: "/category/politics", icon: Users, color: "from-red-500 to-red-600" },
    { name: "Business", path: "/category/business", icon: Globe, color: "from-green-500 to-emerald-600" },
    { name: "Sports", path: "/category/sports", icon: Flag, color: "from-orange-500 to-orange-600" },
    { name: "Entertainment", path: "/category/entertainment", icon: Film, color: "from-purple-500 to-pink-600" },
    { name: "Technology", path: "/category/technology", icon: Cpu, color: "from-cyan-500 to-blue-600" },
    { name: "Health", path: "/category/health", icon: Heart, color: "from-teal-500 to-teal-600" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen
          ${isCollapsed ? "w-20" : "w-72"}
          bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white
          transform transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          shadow-2xl z-50
          flex flex-col
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className={`flex items-center gap-3 ${isCollapsed ? "justify-center w-full" : ""}`}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Newspaper size={22} />
            </div>
            {!isCollapsed && (
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NewsApp
              </span>
            )}
          </div>
          <button
            onClick={toggleCollapse}
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition"
          >
            <ChevronLeft
              className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Trending Section */}
        {!isCollapsed && (
          <div className="px-6 py-4 border-b border-gray-700">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <TrendingUp size={16} className="text-green-400" />
              <span>Trending Now</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Stay updated with latest news</p>
          </div>
        )}

        {/* Navigation */}
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {/* Main Nav Items */}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`
                  relative flex items-center gap-4 p-3 rounded-xl
                  transition-all duration-200 group
                  ${isCollapsed ? "justify-center" : ""}
                  ${isActive
                    ? "bg-gradient-to-r " + item.color + " shadow-lg scale-105"
                    : "hover:bg-gray-700/50 hover:scale-102"
                  }
                `}
              >
                {isActive && !isCollapsed && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
                )}

                <Icon
                  size={22}
                  className={`
                    transition-transform duration-200
                    ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}
                  `}
                />

                {!isCollapsed && (
                  <span className={`font-medium ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                    {item.name}
                  </span>
                )}

                {!isCollapsed && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </Link>
            );
          })}

          {/* Categories Section */}
          {!isCollapsed && (
            <div className="pt-4 mt-4 border-t border-gray-700">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition"
              >
                <div className="flex items-center gap-3">
                  <Newspaper size={20} />
                  <span className="font-medium text-sm">Categories</span>
                </div>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${categoriesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Category Links */}
              {categoriesOpen && (
                <div className="mt-2 space-y-1 pl-4">
                  {categories.map((category) => {
                    const CatIcon = category.icon;
                    const isCatActive = location.pathname === category.path;

                    return (
                      <Link
                        key={category.name}
                        to={category.path}
                        onClick={onClose}
                        className={`
                          flex items-center gap-3 px-3 py-2 rounded-lg
                          transition-all duration-200 group
                          ${isCatActive
                            ? "bg-gradient-to-r " + category.color + " shadow-md"
                            : "hover:bg-gray-700/50"
                          }
                        `}
                      >
                        <CatIcon
                          size={18}
                          className={`
                            transition-transform duration-200
                            ${isCatActive ? "text-white" : "text-gray-400 group-hover:text-white"}
                          `}
                        />
                        <span className={`text-sm font-medium ${isCatActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                          {category.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          {!isCollapsed ? (
            <div className="text-center">
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} NewsApp
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Built with React + Tailwind
              </p>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;