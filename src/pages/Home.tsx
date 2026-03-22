import React from "react";
import { Link } from "react-router-dom";
import { 
  Newspaper, 
  Globe, 
  Zap, 
  TrendingUp, 
  Clock, 
  Shield,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles
} from "lucide-react";

function Home() {
  const features = [
    {
      icon: TrendingUp,
      title: "Kenyan Headlines",
      description: "Local news from trusted Kenyan sources – updated regularly throughout the day.",
      link: "/kenya",
      linkText: "Read Kenyan News",
      gradient: "from-green-500 to-emerald-600",
      bgColor: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Globe,
      title: "International Coverage",
      description: "BBC, Al Jazeera, CNN, Fox News, The Guardian and more from around the world.",
      link: "/world",
      linkText: "Explore World News",
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Clock,
      title: "Always Fresh",
      description: "Click refresh anytime to get the latest stories and breaking news updates.",
      link: "#",
      linkText: "Stay Updated",
      gradient: "from-purple-500 to-pink-600",
      bgColor: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const benefits = [
    { icon: Zap, text: "Real-time updates" },
    { icon: Shield, text: "Ad-free experience" },
    { icon: Star, text: "Trusted sources" },
    { icon: CheckCircle, text: "Verified news" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30 mb-4">
          <Sparkles className="text-yellow-400" size={18} />
          <span className="text-sm text-blue-300">Breaking News, Anytime, Anywhere</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Latest News at Your Fingertips
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Stay informed with real-time headlines from Kenya and around the world. 
          Fast, reliable, and always up-to-date.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            to="/kenya"
            className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
          >
            <Newspaper size={20} />
            Kenyan News
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </Link>
          <Link
            to="/world"
            className="group bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-8 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
          >
            <Globe size={20} />
            World News
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </Link>
        </div>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full"
            >
              <benefit.icon className="text-green-400" size={16} />
              <span className="text-sm text-gray-300">{benefit.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-sm text-gray-400">News Coverage</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">50+</div>
            <div className="text-sm text-gray-400">News Sources</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400">1000+</div>
            <div className="text-sm text-gray-400">Daily Articles</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400">100%</div>
            <div className="text-sm text-gray-400">Free Access</div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Explore Our Coverage
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className={`group bg-gradient-to-br ${feature.bgColor} backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition hover:scale-105`}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-lg`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:text-blue-300 transition">
                {feature.linkText}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Stay Informed?
            </span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Choose your preferred news category and dive into the latest stories. 
            Updated in real-time, curated for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to="/kenya"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl font-semibold transition border border-white/10 hover:border-white/20"
            >
              🇰🇪 Kenya News
            </Link>
            <Link
              to="/world"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl font-semibold transition border border-white/10 hover:border-white/20"
            >
              🌍 World News
            </Link>
            <Link
              to="/about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl font-semibold transition border border-white/10 hover:border-white/20"
            >
              ℹ️ About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;