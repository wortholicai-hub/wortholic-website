import React from "react";
import {
  Star,
  Trophy,
  Gift,
  Users,
  Wallet,
  CreditCard,
  Tag,
  Award,
  Scan,
  LucideIcon, // Import the type for the icons
} from "lucide-react"; // Using lucide-react for the icons as they match the style well

// Define the structure for a feature block
interface FeatureBlock {
  title: string;
  Icon: LucideIcon;
}

// Data for the loyalty features
const featureBlocks: FeatureBlock[] = [
  { title: "Points", Icon: Star },
  { title: "Tiers", Icon: Trophy },
  { title: "Rewards", Icon: Gift },
  { title: "Referrals", Icon: Users },
  { title: "Wallets", Icon: Wallet },
  { title: "Badges", Icon: CreditCard }, // CreditCard is a common icon for badges/cards
  { title: "Coupons", Icon: Tag },
  { title: "Achievements", Icon: Award },
  { title: "Code scanning", Icon: Scan },
];

const SectionSeven: React.FC = () => {
  return (
    // Container with a background color matching the image (#F9F7F5 is a close approximation)
    <div
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#F9F7F5" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* --- Header Section --- */}
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2">
          Loyalty features
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-16">
          Building blocks to create business logic of any shape
        </h2>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featureBlocks.map((block, index) => {
            const IconComponent = block.Icon;

            // Determine the background color for the icon block
            let iconBgColor = "bg-purple-100/50"; // Default light background
            let iconColor = "text-purple-600"; // Default icon color

            // Apply the dark purple background style to the 'Badges', 'Achievements', and 'Code scanning' blocks
            if (
              ["Badges", "Achievements", "Code scanning"].includes(block.title)
            ) {
              iconBgColor = "bg-purple-600";
              iconColor = "text-white";
            }

            return (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg flex flex-col justify-center items-center"
              >
                {/* Icon Container */}
                <div
                  className={`p-4 rounded-xl mb-4 ${iconBgColor} ${iconColor}`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Title */}
                <p className="text-lg font-semibold text-gray-800">
                  {block.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
