import React from "react";

interface Article {
  title: string;
  description: string;
  link: string;
  source: string;
  pubDate: string;
  image_url?: string;
}

interface Props {
  articles: Article[];
  loading: boolean;
  error?: string | null;
  onRefresh?: () => void;
  translateLabel?: string; // button text
}

const NewsCard: React.FC<Props> = ({
  articles,
  loading,
  error,
  onRefresh,
  translateLabel = "Translate",
}) => {
  const handleTranslate = (article: Article) => {
    const text = `${article.title}\n\n${article.description || ""}`;
    const encodedText = encodeURIComponent(text);
    const translateUrl = `https://translate.google.com/?sl=auto&tl=en&text=${encodedText}&op=translate`;
    window.open(translateUrl, "_blank", "noopener,noreferrer");
  };

  if (loading)
    return <p className="text-center text-blue-600 text-lg py-12">Loading news...</p>;
  if (error)
    return <p className="text-center text-red-600 font-bold py-12">{error}</p>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {onRefresh && (
        <button
          onClick={onRefresh}
          className="block mx-auto mb-6 px-6 py-2 rounded bg-green-600 text-white font-bold hover:bg-green-700 transition shadow"
        >
          Refresh for New Stories
        </button>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-md rounded-xl p-4 shadow-md hover:shadow-lg transition flex flex-col"
          >
            {article.image_url && (
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-40 object-cover rounded mb-3"
                onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
              />
            )}

            <h3 className="font-semibold text-lg mb-1">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {article.title}
              </a>
            </h3>

            <p className="text-sm text-gray-700 mb-2 flex-grow">
              {article.description || "No description available."}
            </p>

            <small className="text-gray-500 mb-3 block">
              {article.source} • {new Date(article.pubDate).toLocaleString()}
            </small>

            <button
              onClick={() => handleTranslate(article)}
              className="mt-auto px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
            >
              {translateLabel}
            </button>
          </div>
        ))}
      </div>

      {articles.length === 0 && (
        <p className="text-center text-gray-600 mt-8 text-lg">
          No headlines available — refresh to try again.
        </p>
      )}
    </div>
  );
};

export default NewsCard;