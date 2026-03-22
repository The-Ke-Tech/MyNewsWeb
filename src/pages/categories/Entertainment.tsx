import React from "react";
import { 
  Film, 
  Music, 
  Tv, 
  Star, 
  Mic2, 
  Clapperboard,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const Entertainment: React.FC = () => {
  const featuredStories = [
    {
      title: "Lupita Nyong'o Wins Another Award",
      summary: "Kenyan-Mexican actress honored at prestigious film festival for latest role.",
      source: "Variety",
      time: "1h ago",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800"
    },
    {
      title: "Sauti Sol Announces Reunion Tour",
      summary: "Popular Kenyan band to perform across East Africa after brief hiatus.",
      source: "Pulse Kenya",
      time: "3h ago",
      image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=800"
    },
    {
      title: "New Kenyan Film Breaks Box Office Records",
      summary: "Local production earns highest opening weekend in Kenyan cinema history.",
      source: "The Standard",
      time: "5h ago",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800"
    }
  ];

  const quickLinks = [
    { name: "Movies", icon: Film },
    { name: "Music", icon: Music },
    { name: "TV Shows", icon: Tv },
    { name: "Celebrities", icon: Star },
    { name: "Events", icon: Mic2 },
    { name: "All Entertainment", icon: Clapperboard }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-purple-500/30">
          <Film className="text-purple-400" size={18} />
          <span className="text-sm text-purple-300">Entertainment</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
          Entertainment & Celebrity News
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Movies, music, celebrities, and events from Kenya and around the world.
        </p>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-400">50+</div>
            <div className="text-sm text-gray-400">New Movies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400">100+</div>
            <div className="text-sm text-gray-400">Artists</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-400">24/7</div>
            <div className="text-sm text-gray-400">Updates</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">🎬</div>
            <div className="text-sm text-gray-400">Reviews</div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Sparkles className="text-yellow-400" size={24} />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Trending Now
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
                  <span className="text-xs font-semibold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">
                    {story.source}
                  </span>
                  <span className="text-xs text-gray-400">{story.time}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition">
                  {story.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {story.summary}
                </p>
                <Link
                  to="/world"
                  className="flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition"
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
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Explore Categories
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to="/world"
              className="group flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/15 transition"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
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
      <section className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="flex items-center gap-4">
          <Star className="text-purple-400" size={32} />
          <div>
            <p className="text-gray-300 font-medium">Celebrity & Lifestyle</p>
            <p className="text-gray-400 text-sm">
              Exclusive interviews, red carpet events, and behind-the-scenes content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Entertainment;
