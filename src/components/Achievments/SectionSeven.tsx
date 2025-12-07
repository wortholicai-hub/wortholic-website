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
      className="
        py-6 px-4 sm:px-6 lg:px-8 
        bg-[#F9F7F5] 
        dark:bg-[#0a0a0a] 
        transition-colors duration-0
      "
    >
      <div className="max-w-7xl mx-auto text-center">
        <p
          className="
            text-sm font-semibold tracking-widest mb-2 
            text-[#0E9F9F] 
            dark:text-[#4FE3E3] 
            transition-colors duration-0
          "
        >
          Loyalty features
        </p>

        <h2
          className="
            mb-3 text-2xl lg:text-5xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl xl:mb-5 dark:text-white
            transition-colors duration-0
          "
        >
          Building blocks to create business logic of any shape
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {featureBlocks.map((block, index) => {
            const IconComponent = block.Icon;
            return (
              <div
                key={index}
                className="
                  p-2 rounded-xl shadow-md flex flex-col justify-center items-center
                  bg-white 
                  dark:bg-[#1a1a1a] 
                  hover:shadow-lg 
                  transition-all duration-0
                "
                style={{ width: 220 }}
              >
                <div
                  className="
                    p-1 rounded-xl mb-2
                    text-[#0E9F9F]
                    dark:text-[#4FE3E3]
                    transition-colors duration-0
                  "
                >
                  <IconComponent className="w-5 h-5" />
                </div>

                <p
                  className="
                    text-sm font-semibold 
                    text-gray-800 
                    dark:text-white 
                    transition-colors duration-0
                  "
                >
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
