import React from "react";
import { 
  Trophy, 
  Activity, 
  Medal, 
  Timer, 
  Users, 
  Target,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const Sports: React.FC = () => {
  const featuredStories = [
    {
      title: "Harambee Stars Qualify for AFCON 2025",
      summary: "Kenya secures spot in African Cup of Nations after dramatic victory over rivals.",
      source: "Goal.com",
      time: "30m ago",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800"
    },
    {
      title: "Kipchoge Announces Return to Marathon",
      summary: "Legendary runner targets world record in upcoming Berlin Marathon.",
      source: "Athletics Weekly",
      time: "2h ago",
      image: "https://images.unsplash.com/photo-1552674605-5d28c4e1902c?w=800"
    },
    {
      title: "Simba Seven Wins Rugby Sevens Title",
      summary: "Kenya's rugby team claims victory in Dubai Sevens tournament.",
      source: "Rugby Pass",
      time: "4h ago",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"
    }
  ];

  const quickLinks = [
    { name: "Football", icon: Trophy },
    { name: "Athletics", icon: Timer },
    { name: "Rugby", icon: Medal },
    { name: "Basketball", icon: Target },
    { name: "Team News", icon: Users },
    { name: "All Sports", icon: Activity }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-orange-500/30">
          <Trophy className="text-orange-400" size={18} />
          <span className="text-sm text-orange-300">Sports</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
          Sports News & Updates
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Latest scores, match highlights, and athlete profiles from Kenya and around the world.
        </p>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-orange-600/20 via-red-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-400">AFCON</div>
            <div className="text-sm text-gray-400">Qualified</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-400">3</div>
            <div className="text-sm text-gray-400">Gold Medals</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400">7s</div>
            <div className="text-sm text-gray-400">Rugby Wins</div>
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
          <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Headlines
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
                  <span className="text-xs font-semibold text-orange-400 bg-orange-500/20 px-3 py-1 rounded-full">
                    {story.source}
                  </span>
                  <span className="text-xs text-gray-400">{story.time}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-300 transition">
                  {story.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {story.summary}
                </p>
                <Link
                  to="/world"
                  className="flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition"
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
          <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Browse by Sport
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to="/world"
              className="group flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/15 transition"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
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
      <section className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="flex items-center gap-4">
          <Medal className="text-orange-400" size={32} />
          <div>
            <p className="text-gray-300 font-medium">Live Scores & Updates</p>
            <p className="text-gray-400 text-sm">
              Follow your favorite teams and athletes in real-time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sports;
