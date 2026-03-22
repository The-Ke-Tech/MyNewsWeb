import React from "react";
import { 
  Newspaper, 
  Globe, 
  Zap, 
  Shield, 
  RefreshCw, 
  Languages,
  Mail,
  MapPin,
  Heart,
  CheckCircle2,
  Rocket,
  Users,
  TrendingUp
} from "lucide-react";

const About: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Get instant access to breaking news from Kenya and around the world.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "International news from trusted sources like BBC, CNN, Al Jazeera, and more.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Ad-free Experience",
      description: "Clean, distraction-free reading without annoying advertisements.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: RefreshCw,
      title: "Always Fresh",
      description: "One-click refresh to get the latest stories and updates.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Languages,
      title: "Multi-language",
      description: "Translation options for foreign-language articles.",
      color: "from-indigo-400 to-blue-500"
    },
    {
      icon: Rocket,
      title: "Fast & Responsive",
      description: "Optimized for all devices - desktop, tablet, and mobile.",
      color: "from-red-400 to-orange-500"
    }
  ];

  const technologies = [
    { name: "React 19", description: "Modern UI framework" },
    { name: "TypeScript", description: "Type-safe JavaScript" },
    { name: "React Router DOM v7", description: "Client-side routing" },
    { name: "Tailwind CSS", description: "Utility-first styling" },
    { name: "NewsData.io", description: "News API provider" },
    { name: "TheNewsAPI.com", description: "News API provider" }
  ];

  const stats = [
    { icon: Newspaper, value: "24/7", label: "News Coverage" },
    { icon: Globe, value: "50+", label: "News Sources" },
    { icon: Users, value: "10K+", label: "Readers" },
    { icon: TrendingUp, value: "1000+", label: "Articles Daily" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl mb-4">
          <Newspaper size={40} className="text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          About NewsApp
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Your trusted source for real-time news from Kenya and around the world. 
          Fast, reliable, and always up-to-date.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/15 transition"
          >
            <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Heart className="text-white" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To provide quick, clean, and reliable news from Kenya and the world — 
              ad-free and in real-time. We believe everyone deserves access to 
              accurate information without distractions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Why Choose Us
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/10 rounded-lg p-4 hover:bg-white/15 transition"
            >
              <CheckCircle2 className="text-green-400 flex-shrink-0" size={20} />
              <div>
                <div className="font-semibold text-white">{tech.name}</div>
                <div className="text-xs text-gray-400">{tech.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
            <Mail className="text-blue-400" size={24} />
            <a href="mailto:benokoth707@gmail.com" className="text-gray-300 hover:text-blue-400 transition">
              benokoth707@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
            <MapPin className="text-green-400" size={24} />
            <span className="text-gray-300">Built with ❤️ in Kenya</span>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Have feedback or suggestions? We'd love to hear from you!
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;