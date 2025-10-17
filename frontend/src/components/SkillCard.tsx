// components/SkillCard.tsx

import React from "react";

// Bacarıq məlumatları üçün TypeScript interfeysi
interface SkillCardProps {
  icon: React.ReactNode; // Ikon üçün React elementi (məsələn, Heroicons, Lucide, FontAwesome)
  title: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center justify-center p-4 sm:p-6 border-2 border-blue-300/50 rounded-xl transition duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer bg-white">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="text-blue-600 text-3xl sm:text-4xl">{icon}</div>
        <p className="text-sm sm:text-base font-semibold text-gray-800 text-center sm:text-left">
          {title}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
