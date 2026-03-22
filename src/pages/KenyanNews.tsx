import React, { useState, useEffect } from "react";
import { 
  Flag, 
  RefreshCw, 
  ExternalLink, 
  Languages, 
  Clock, 
  TrendingUp,
  AlertCircle,
  Newspaper,
  Sparkles,
  MapPin,
  Calendar
} from "lucide-react";

interface Article {
  title: string;
  description: string;
  link: string;
  source_name: string;
  pubDate: string;
  image_url?: string;
}

const KenyanNews: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastFetchTime, setLastFetchTime] = useState<Date | null>(null);

  const apiKey = process.env.REACT_APP_NEWS_DATA_KEY;

  const fetchNews = async (forceRefresh = false) => {
    if (!apiKey) {
      setError("NewsData API key missing in .env");
      setLoading(false);
      return;
    }
    const now = new Date();
    if (!forceRefresh && lastFetchTime && now.getTime() - lastFetchTime.getTime() < 5 * 60 * 1000) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=ke&language=en&size=10`;
      const response = await fetch(url);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network error: ${response.status} - ${errorText || response.statusText}`);
      }

      const data = await response.json();
      if (data.status !== "success") throw new Error(data.message || "API error");

      const articlesData = data.results || [];
      if (articlesData.length === 0) {
        setError("No Kenyan headlines available right now – try again later.");
        setArticles([]);
        setLoading(false);
        return;
      }

      const formattedArticles: Article[] = articlesData.map((art: any) => ({
        title: art.title || "No title",
        description: art.description || "No description available.",
        link: art.link || "#",
        source_name: art.source?.source_name || art.source_id || "Unknown",
        pubDate: art.pubDate || new Date().toISOString(),
        image_url: art.image_url,
      }));

      setArticles(formattedArticles);
      setLastFetchTime(now);
    } catch (err: any) {
      setError(err.message || "Failed to load Kenyan news");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefresh = () => fetchNews(true);

  const translateArticle = (article: Article) => {
    const text = `${article.title}\n\n${article.description || "No description available."}`;
    const encodedText = encodeURIComponent(text);
    const translateUrl = `https://translate.google.com/?sl=auto&tl=sw&text=${encodedText}&op=translate`;
    window.open(translateUrl, "_blank", "noopener,noreferrer");
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center space-y-4">
          <div className="inline-flex animate-spin">
            <RefreshCw size={48} className="text-green-400" />
          </div>
          <p className="text-xl text-gray-300">Loading Kenyan headlines...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-red-500/20 backdrop-blur-md border border-red-500/30 rounded-2xl p-8 text-center">
          <AlertCircle size={48} className="text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-400 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-300 mb-4">{error}</p>
          <button
            onClick={handleRefresh}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-yellow-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-green-500/30">
          <Flag className="text-green-400" size={18} />
          <span className="text-sm text-green-300">Kenya News</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
          Latest Kenyan Headlines
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Breaking news from Kenya's most trusted sources. Updated in real-time.
        </p>

        {/* Refresh Button & Last Updated */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={handleRefresh}
            className="group bg-gradient-to-r from-green-600 to-yellow-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-yellow-700 transition shadow-lg hover:shadow-green-500/25 flex items-center gap-2"
          >
            <RefreshCw size={20} className="group-hover:rotate-180 transition duration-500" />
            Refresh News
          </button>
          {lastFetchTime && (
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Clock size={16} />
              Last updated: {lastFetchTime.toLocaleTimeString()}
            </div>
          )}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-green-600/20 via-yellow-600/20 to-red-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-400">{articles.length}</div>
            <div className="text-sm text-gray-400">Articles</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">10+</div>
            <div className="text-sm text-gray-400">Sources</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-400">24/7</div>
            <div className="text-sm text-gray-400">Updates</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400">🇰🇪</div>
            <div className="text-sm text-gray-400">Kenya</div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      {articles.length === 0 ? (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 text-center">
          <Newspaper size={64} className="text-gray-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-300 mb-2">No headlines available</h3>
          <p className="text-gray-400">Check back later for the latest news</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition hover:scale-105 overflow-hidden flex flex-col"
            >
              {/* Image */}
              {article.image_url && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Source & Time */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-green-400 bg-green-500/20 px-3 py-1 rounded-full flex items-center gap-1">
                    <MapPin size={12} />
                    {article.source_name}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock size={12} />
                    {formatTimeAgo(article.pubDate)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-green-300 transition">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {article.title}
                  </a>
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                  {article.description}
                </p>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-white/10">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-green-600 to-yellow-600 text-white text-center py-2 rounded-lg font-medium hover:from-green-700 hover:to-yellow-700 transition flex items-center justify-center gap-2"
                  >
                    Read More
                    <ExternalLink size={16} />
                  </a>
                  <button
                    onClick={() => translateArticle(article)}
                    className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition flex items-center justify-center"
                    title="Translate to Swahili"
                  >
                    <Languages size={18} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Info Banner */}
      <section className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="text-yellow-400" size={24} />
            <div>
              <p className="text-gray-300 font-medium">Local News, Global Standards</p>
              <p className="text-gray-400 text-sm">Powered by NewsData.io • Up to 10 recent headlines</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar size={16} />
            <span>Updated every 5 minutes</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KenyanNews;