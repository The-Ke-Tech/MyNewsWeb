import React from "react";
import { 
  Cpu, 
  Smartphone, 
  Code, 
  Wifi, 
  Bot, 
  Database,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const Technology: React.FC = () => {
  const featuredStories = [
    {
      title: "Kenya Launches National AI Strategy",
      summary: "Government unveils plan to integrate artificial intelligence in public services.",
      source: "Tech-ish",
      time: "2h ago",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800"
    },
    {
      title: "Safaricom Rolls Out 5G Nationwide",
      summary: "Telecom giant expands 5G coverage to major cities across the country.",
      source: "Disrupt Africa",
      time: "4h ago",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"
    },
    {
      title: "Nairobi Tech Hub Attracts Google Investment",
      summary: "Tech giant commits $100M to support African startup ecosystem.",
      source: "Ventureburn",
      time: "6h ago",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800"
    }
  ];

  const quickLinks = [
    { name: "AI & Robotics", icon: Bot },
    { name: "Mobile Tech", icon: Smartphone },
    { name: "Software", icon: Code },
    { name: "Connectivity", icon: Wifi },
    { name: "Hardware", icon: Cpu },
    { name: "Data & Cloud", icon: Database }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/30">
          <Cpu className="text-cyan-400" size={18} />
          <span className="text-sm text-cyan-300">Technology</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Tech News & Innovation
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Latest in AI, gadgets, software, and digital innovation from Kenya and beyond.
        </p>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-cyan-400">5G</div>
            <div className="text-sm text-gray-400">Network</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">$100M</div>
            <div className="text-sm text-gray-400">Investment</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">500+</div>
            <div className="text-sm text-gray-400">Startups</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">🤖</div>
            <div className="text-sm text-gray-400">AI Ready</div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Sparkles className="text-yellow-400" size={24} />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Latest Tech
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredStories.map((story, index) => (
            <article
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition hover:scale-105 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/20 px-3 py-1 rounded-full">
                    {story.source}
                  </span>
                  <span className="text-xs text-gray-400">{story.time}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-300 transition">
                  {story.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {story.summary}
                </p>
                <Link
                  to="/world"
                  className="flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition"
                >
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Tech Categories
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to="/world"
              className="group flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/15 transition"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                <link.icon className="text-white" size={20} />
              </div>
              <span className="text-gray-300 font-medium group-hover:text-white transition">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="flex items-center gap-4">
          <Bot className="text-cyan-400" size={32} />
          <div>
            <p className="text-gray-300 font-medium">Innovation Hub</p>
            <p className="text-gray-400 text-sm">
              Silicon Savannah news, startup funding, and tech ecosystem updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
