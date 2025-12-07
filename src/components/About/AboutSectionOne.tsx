import React from "react";
import Image from "next/image";

const AboutSectionOne: React.FC = () => {
  const getStars = (ratingStr: string) => {
    const rating = parseFloat(ratingStr);
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;

    return [...Array(5)].map((_, i) => {
      if (i < fullStars) {
        return (
          <svg
            key={i}
            className="h-5 w-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      } else if (i === fullStars && hasHalf) {
        return (
          <svg
            key={i}
            className="h-5 w-5 text-yellow-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-${i})`}
              d="M12 .587l3.668 7.425 8.2 1.192-5.934 5.783 
              1.402 8.168L12 18.896l-7.336 3.859 
              1.402-8.168L.132 9.204l8.2-1.192z"
            />
          </svg>
        );
      } else {
        return (
          <svg
            key={i}
            className="h-5 w-5 text-gray-300 dark:text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      }
    });
  };

  return (
    <div className="relative overflow-hidden bg-white px-4 py-6 text-black sm:px-6 lg:px-8 dark:bg-black dark:text-white">
      <div className="absolute inset-0 bg-white dark:bg-black"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading and description (left aligned) */}
        <div className="mb-12 flex flex-col justify-items items-center text-center">
          <h2 className="mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white">
            About Wortholic
          </h2>
          <p className="max-w-2xl text-xl text-center text-gray-600 dark:text-gray-300">
            Discover our journey in providing premium software services and AI
            solutions with a team of 100+ experienced professionals.
          </p>
        </div>

        {/* Ratings grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {[
            { name: "Upwork", rating: "5 Star Rating" },
            { name: "Discord", rating: "4.9 Star Rating" },
            { name: "Google", rating: "4.6 Star Rating" },
            { name: "LinkedIn", rating: "4.8 Star Rating", logo: "" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center rounded-xl bg-transparent p-4 shadow-none"
            >
              {/* Brand name/logo (centered above stars & rating) */}
              {item.logo ? (
                <span className="mb-2 flex items-center text-lg font-semibold">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="mr-2 h-5 w-auto"
                  />
                  {item.name.toUpperCase()}
                </span>
              ) : (
                <span className="mb-2 text-lg font-semibold">{item.name}</span>
              )}

              {/* Stars */}
              <div className="mb-2 flex">{getStars(item.rating)}</div>

              {/* Rating text (centered) */}
              <p className="text-md text-center text-gray-600 dark:text-gray-400">
                {item.rating}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSectionOne;
// Done section
