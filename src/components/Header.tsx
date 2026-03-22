import { Link } from "react-router-dom";
import { Menu, ChevronDown, Globe, Flag, Newspaper, Users, Film, Cpu, Heart } from "lucide-react";

type Props = {
  onMenuClick: () => void;
};

function Header({ onMenuClick }: Props) {

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden text-2xl hover:text-blue-200 transition"
        >
          <Menu />
        </button>
        <Link to="/" className="font-bold text-xl hover:text-blue-200 transition">
          📰 NewsApp
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:text-blue-200 transition font-medium">Home</Link>
        <Link to="/kenya" className="hover:text-blue-200 transition font-medium">Kenyan News</Link>
        <Link to="/world" className="hover:text-blue-200 transition font-medium">World News</Link>

        {/* Categories Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 transition font-medium">
            <Newspaper size={18} />
            Categories
            <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
          </button>

          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900 rounded-xl shadow-xl border border-gray-700 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <Link to="/category/politics" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition group/item">
                <Users size={18} className="text-red-400 group-hover/item:scale-110 transition" />
                <span className="text-gray-300 group-hover/item:text-white transition">Politics</span>
              </Link>
              <Link to="/category/business" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition group/item">
                <Globe size={18} className="text-green-400 group-hover/item:scale-110 transition" />
                <span className="text-gray-300 group-hover/item:text-white transition">Business</span>
              </Link>
              <Link to="/category/sports" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition group/item">
                <Flag size={18} className="text-orange-400 group-hover/item:scale-110 transition" />
                <span className="text-gray-300 group-hover/item:text-white transition">Sports</span>
              </Link>
              <Link to="/category/entertainment" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition group/item">
                <Film size={18} className="text-purple-400 group-hover/item:scale-110 transition" />
                <span className="text-gray-300 group-hover/item:text-white transition">Entertainment</span>
              </Link>
              <Link to="/category/technology" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition group/item">
                <Cpu size={18} className="text-cyan-400 group-hover/item:scale-110 transition" />
                <span className="text-gray-300 group-hover/item:text-white transition">Technology</span>
              </Link>
              <Link to="/category/health" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition group/item">
                <Heart size={18} className="text-teal-400 group-hover/item:scale-110 transition" />
                <span className="text-gray-300 group-hover/item:text-white transition">Health</span>
              </Link>
            </div>
          </div>
        </div>

        <Link to="/about" className="hover:text-blue-200 transition font-medium">About</Link>
      </nav>
    </header>
  );
}

export default Header;