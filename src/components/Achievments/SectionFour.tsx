import React from "react";

// --- Data Structures ---
interface AchievementItem {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface ChallengeItem {
  id: number;
  text: string;
  isCompleted: boolean;
}

// ====================================================================
// --- Sub-Component 1: Achievement Campaigns List ---
// ====================================================================

const AchievementCampaignsList: React.FC = () => {
  const campaigns: AchievementItem[] = [
    {
      id: 1,
      text: "Spend $100 in February and earn 100 points",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Run 10 km & get discount on sport shoes",
      isCompleted: true,
    },
    { id: 3, text: "Refer 5 friends and get $50 cashback", isCompleted: true },
    {
      id: 4,
      text: "Place 5 products and get free delivery code",
      isCompleted: false,
    },
    {
      id: 5,
      text: "Buy 10 ACME products and get special reward",
      isCompleted: true,
    },
  ];

  return (
    <div className="mt-10 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h4 className="text-base font-semibold text-gray-800 dark:text-white">
          Achievement-based campaigns
        </h4>
      </div>

      <div className="divide-y divide-gray-100 dark:divide-gray-700 p-4">
        {campaigns.map((item) => (
          <div key={item.id} className="flex items-start py-2">
            <span
              className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5 mr-3 
                ${item.isCompleted ? "bg-green-500" : "bg-red-500"}`}
            ></span>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ====================================================================
// --- Sub-Component 2: Challenges List ---
// ====================================================================

const AchievementsChallengesList: React.FC = () => {
  const challenges: ChallengeItem[] = [
    { id: 1, text: "Spend over $100 in February", isCompleted: true },
    {
      id: 2,
      text: "Place 5 transactions between June and August",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Purchase 8 items from the shoes category",
      isCompleted: true,
    },
    { id: 4, text: "Spend $100 on ACME products", isCompleted: true },
    { id: 5, text: "Add a minimum of 10 products reviews", isCompleted: true },
  ];

  return (
    <div className="mt-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h4 className="text-base font-semibold text-gray-800 dark:text-white">
          Achievements and challenges
        </h4>
      </div>

      <div className="divide-y divide-gray-100 dark:divide-gray-700 p-4">
        {challenges.map((item) => (
          <div key={item.id} className="flex items-start py-2">
            <span
              className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5 mr-3 
                ${item.isCompleted ? "bg-green-500" : "bg-red-500"}`}
            ></span>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ====================================================================
// --- Sub-Component 3: Analytics Visualization ---
// ====================================================================

const AnalyticsVisualization: React.FC = () => {
  const PurpleBar = ({ widthClass }: { widthClass: string }) => (
    <div
      className={`bg-indigo-300 dark:bg-indigo-500 h-2 rounded-full opacity-60 ${widthClass}`}
    ></div>
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-start border-b border-gray-200 dark:border-gray-700 pb-4">
        <div className="w-1/3 pr-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
            Completed achievements
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            7,241
          </p>
        </div>

        <div className="w-2/3 flex space-x-4 pl-4">
          <div className="space-y-2 w-1/2">
            <PurpleBar widthClass="w-full" />
            <PurpleBar widthClass="w-3/4" />
          </div>
          <div className="space-y-2 w-1/2">
            <PurpleBar widthClass="w-11/12" />
            <PurpleBar widthClass="w-2/3" />
          </div>
        </div>
      </div>

      {/* Line Graph */}
      <div className="mt-4 pt-4 relative">
        <div className="h-40 w-full">
          <svg
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(165,180,252)", stopOpacity: 0.3 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(255,255,255)", stopOpacity: 0.05 }}
                />
              </linearGradient>
            </defs>

            <polygon
              points="0,50 10,40 20,45 30,35 40,40 50,25 60,30 70,20 80,15 90,10 100,5 100,50"
              fill="url(#lineGradient)"
            />

            <polyline
              points="0,50 10,40 20,45 30,35 40,40 50,25 60,30 70,20 80,15 90,10 100,5"
              fill="none"
              stroke="white"
              className="dark:stroke-gray-200"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

// ====================================================================
// --- Main Component ---
// ====================================================================

const SectionFour: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black">
      {/* SECTION 1 */}
      <section className="container mx-auto py-6 px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="lg:w-1/2">
            <p className="text-sm font-semibold text-[#0E9F9F] dark:text-[#5FD2D2] mb-4">
              Configuration
            </p>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white mb-8">
              Configure any shape of achievements, challenges or milestones
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Use Open Loyalty's{" "}
              <strong className="font-semibold text-indigo-700 dark:text-indigo-400">
                Wortholic Software Solutions
              </strong>{" "}
              to create achievements that drive your business goals.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Set challenges with goals based on transactional data and
              behavior.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center pt-8">
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-6 w-full max-w-lg min-h-[400px] border border-gray-100 dark:border-gray-700">
              <div className="w-full max-w-[400px] mx-auto">
                <AchievementCampaignsList />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="container mx-auto py-20 px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="lg:w-1/2 flex justify-center pt-8 order-2 lg:order-1">
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-6 w-full max-w-lg min-h-[400px] border border-gray-100 dark:border-gray-700 flex items-start justify-center pt-10">
              <div className="w-full max-w-sm">
                <AchievementsChallengesList />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <p className="text-sm font-semibold text-[#0E9F9F] dark:text-[#5FD2D2] mb-4">
              Campaigns
            </p>

            <h1 className="text-4xl font-bold leading-snug text-gray-900 dark:text-white mb-8">
              Use achievements to trigger campaigns and reward customers
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Allow customers to participate in achievement-based campaigns.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              See{" "}
              <a
                href="#"
                className="text-indigo-600 dark:text-indigo-300 font-medium hover:text-indigo-700 transition"
              >
                examples of achievement-based campaigns
              </a>{" "}
              created by our experts.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="container mx-auto py-20 px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="lg:w-1/2">
            <p className="text-sm font-semibold text-[#0E9F9F] dark:text-[#5FD2D2] mb-4">
              Achievements analytics
            </p>

            <h1 className="text-4xl font-bold leading-snug text-gray-900 dark:text-white mb-8">
              Track progress and results driven by achievements
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Monitor which achievement-based campaigns are the most engaging.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center pt-8">
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-6 w-full max-w-lg min-h-[400px] border border-gray-100 dark:border-gray-700 flex items-start justify-center pt-10">
              <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-sm shadow-xl">
                <AnalyticsVisualization />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionFour;
