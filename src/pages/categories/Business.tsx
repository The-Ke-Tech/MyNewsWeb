import React from "react";
import { 
  TrendingUp, 
  DollarSign, 
  LineChart, 
  Briefcase, 
  Building, 
  Wallet,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const Business: React.FC = () => {
  const featuredStories = [
    {
      title: "Nairobi Stock Exchange Hits Record High",
      summary: "NSE 20 Share Index reaches all-time peak driven by banking and telecom sectors.",
      source: "Business Daily",
      time: "1h ago",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0b727843?w=800"
    },
    {
      title: "Central Bank Maintains Interest Rates",
      summary: "Monetary Policy Committee holds rates steady at 13% amid inflation concerns.",
      source: "The Standard",
      time: "3h ago",
      image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800"
    },
    {
      title: "Tech Startups Attract $500M Investment",
      summary: "Kenyan fintech companies lead East Africa in venture capital funding.",
      source: "Citizen TV",
      time: "5h ago",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800"
    }
  ];

  const quickLinks = [
    { name: "Stock Market", icon: LineChart },
    { name: "Banking", icon: Building },
    { name: "Investment", icon: TrendingUp },
    { name: "Entrepreneurship", icon: Briefcase },
    { name: "Personal Finance", icon: Wallet },
    { name: "Economy", icon: DollarSign }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-green-500/30">
          <TrendingUp className="text-green-400" size={18} />
          <span className="text-sm text-green-300">Business</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Business & Finance News
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Market updates, economic analysis, and business insights from Kenya and beyond.
        </p>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-400">+2.4%</div>
            <div className="text-sm text-gray-400">NSE Index</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400">13%</div>
            <div className="text-sm text-gray-400">Interest Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-400">5.2%</div>
            <div className="text-sm text-gray-400">GDP Growth</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">$500M</div>
            <div className="text-sm text-gray-400">VC Funding</div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Sparkles className="text-yellow-400" size={24} />
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Top Stories
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
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
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
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
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
      <section className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="flex items-center gap-4">
          <DollarSign className="text-green-400" size={32} />
          <div>
            <p className="text-gray-300 font-medium">Market Insights</p>
            <p className="text-gray-400 text-sm">
              Real-time market data, expert analysis, and investment opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
