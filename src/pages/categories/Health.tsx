import React from "react";
import { 
  Heart, 
  Activity, 
  Pill, 
  Dna, 
  Utensils, 
  Brain,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const Health: React.FC = () => {
  const featuredStories = [
    {
      title: "New Hospital Opens in Nairobi",
      summary: "State-of-the-art medical facility to serve 500,000 residents in surrounding areas.",
      source: "Health Times",
      time: "1h ago",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"
    },
    {
      title: "Kenya Launches Vaccination Campaign",
      summary: "Nationwide immunization program targets preventable diseases in children.",
      source: "Medical Daily",
      time: "3h ago",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
    },
    {
      title: "Mental Health Awareness Week Begins",
      summary: "Campaign aims to reduce stigma and increase access to mental health services.",
      source: "Psychology Today",
      time: "5h ago",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800"
    }
  ];

  const quickLinks = [
    { name: "Fitness", icon: Activity },
    { name: "Nutrition", icon: Utensils },
    { name: "Medicine", icon: Pill },
    { name: "Mental Health", icon: Brain },
    { name: "Genetics", icon: Dna },
    { name: "All Health", icon: Heart }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-green-500/30">
          <Heart className="text-green-400" size={18} />
          <span className="text-sm text-green-300">Health</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
          Health & Wellness News
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Medical breakthroughs, fitness tips, nutrition advice, and healthcare updates.
        </p>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-green-600/20 via-teal-600/20 to-cyan-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-400">98%</div>
            <div className="text-sm text-gray-400">Vaccination</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-400">50+</div>
            <div className="text-sm text-gray-400">Hospitals</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400">24/7</div>
            <div className="text-sm text-gray-400">Care</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">💊</div>
            <div className="text-sm text-gray-400">Research</div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Sparkles className="text-yellow-400" size={24} />
          <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Health Headlines
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
                  <span className="text-xs font-semibold text-green-400 bg-green-500/20 px-3 py-1 rounded-full">
                    {story.source}
                  </span>
                  <span className="text-xs text-gray-400">{story.time}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-green-300 transition">
                  {story.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {story.summary}
                </p>
                <Link
                  to="/world"
                  className="flex items-center gap-2 text-green-400 font-semibold hover:text-green-300 transition"
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
          <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Health Topics
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to="/world"
              className="group flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/15 transition"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
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
      <section className="bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="flex items-center gap-4">
          <Activity className="text-green-400" size={32} />
          <div>
            <p className="text-gray-300 font-medium">Your Health Matters</p>
            <p className="text-gray-400 text-sm">
              Expert advice, medical research, and wellness tips for a healthier life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Health;
