import React from "react";
import { 
  Flag, 
  TrendingUp, 
  Users, 
  Building2, 
  Scale, 
  Vote,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const Politics: React.FC = () => {
  const featuredStories = [
    {
      title: "Parliament Passes New Budget Amendment",
      summary: "Lawmakers approve controversial budget changes affecting healthcare and education sectors.",
      source: "Daily Nation",
      time: "2h ago",
      image: "https://images.unsplash.com/photo-1541872703-74c5963631df?w=800"
    },
    {
      title: "Presidential Address on Economic Reforms",
      summary: "President outlines new initiatives to boost GDP and create jobs across the country.",
      source: "The Standard",
      time: "4h ago",
      image: "https://images.unsplash.com/photo-1555525503-a0a27e0d3559?w=800"
    },
    {
      title: "Opposition Leaders Call for Dialogue",
      summary: "Coalition demands public debate on proposed constitutional amendments.",
      source: "Citizen TV",
      time: "6h ago",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800"
    }
  ];

  const quickLinks = [
    { name: "National Assembly", icon: Building2 },
    { name: "Senate", icon: Building2 },
    { name: "County Governors", icon: Users },
    { name: "Electoral Commission", icon: Vote },
    { name: "Constitution", icon: Scale },
    { name: "Public Policy", icon: TrendingUp }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-red-500/30">
          <Flag className="text-red-400" size={18} />
          <span className="text-sm text-red-300">Politics</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
          Political News & Analysis
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Stay informed about Kenyan politics, government policies, and parliamentary proceedings.
        </p>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-red-600/20 via-blue-600/20 to-green-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-red-400">47</div>
            <div className="text-sm text-gray-400">Counties</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">349</div>
            <div className="text-sm text-gray-400">MPs</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400">67</div>
            <div className="text-sm text-gray-400">Senators</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">24/7</div>
            <div className="text-sm text-gray-400">Coverage</div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Sparkles className="text-yellow-400" size={24} />
          <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
            Featured Stories
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
                  <span className="text-xs font-semibold text-red-400 bg-red-500/20 px-3 py-1 rounded-full">
                    {story.source}
                  </span>
                  <span className="text-xs text-gray-400">{story.time}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-red-300 transition">
                  {story.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {story.summary}
                </p>
                <Link
                  to="/world"
                  className="flex items-center gap-2 text-red-400 font-semibold hover:text-red-300 transition"
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
          <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
            Quick Access
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to="/world"
              className="group flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/15 transition"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
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
      <section className="bg-gradient-to-r from-red-600/20 to-blue-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="flex items-center gap-4">
          <Vote className="text-red-400" size={32} />
          <div>
            <p className="text-gray-300 font-medium">Stay Engaged</p>
            <p className="text-gray-400 text-sm">
              Follow parliamentary sessions, election updates, and policy changes that affect you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Politics;
