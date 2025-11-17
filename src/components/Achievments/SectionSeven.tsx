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
  LucideIcon,
} from "lucide-react";

interface FeatureBlock {
  title: string;
  Icon: LucideIcon;
}

const featureBlocks: FeatureBlock[] = [
  { title: "Points", Icon: Star },
  { title: "Tiers", Icon: Trophy },
  { title: "Rewards", Icon: Gift },
  { title: "Referrals", Icon: Users },
  { title: "Wallets", Icon: Wallet },
  { title: "Badges", Icon: CreditCard },
  { title: "Coupons", Icon: Tag },
  { title: "Achievements", Icon: Award },
  { title: "Code scanning", Icon: Scan },
];

const SectionSeven: React.FC = () => {
  return (
    <div
      className="py-6 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#F9F7F5" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold text-[#0E9F9F] tracking-widest mb-2">
          Loyalty features
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-12">
          Building blocks to create business logic of any shape
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {featureBlocks.map((block, index) => {
            const IconComponent = block.Icon;
            return (
              <div
                key={index}
                className="p-2 bg-white rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg flex flex-col justify-center items-center"
                style={{ width: 220 }}
              >
                <div
                  className="p-1 rounded-xl mb-2"
                  style={{ color: "#0E9F9F" }}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-gray-800">
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
