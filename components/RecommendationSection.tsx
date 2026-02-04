import React from 'react';
import { RECOMMENDATIONS } from '../constants';
import { Wallet, Clock, Star, CheckCircle2 } from 'lucide-react';
import { City } from '../types';

interface Props {
  selectedCity: City | 'ALL';
}

const RecommendationSection: React.FC<Props> = ({ selectedCity }) => {
  // Filter recommendations that apply to the selected city (or all if ALL selected)
  const filteredRecs = RECOMMENDATIONS.filter(rec =>
    selectedCity === 'ALL' || rec.cities.includes(selectedCity)
  );

  if (filteredRecs.length === 0) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'wallet': return <Wallet className="w-5 h-5 text-emerald-600" />;
      case 'clock': return <Clock className="w-5 h-5 text-violet-600" />;
      case 'star': return <Star className="w-5 h-5 text-amber-500" />;
      default: return <CheckCircle2 className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="mt-6 mb-8">
      <div className="flex items-center gap-2 mb-4 px-1">
        <div className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-pink-500"></div>
        <h3 className="text-lg font-bold text-gray-800">Gợi Ý Di Chuyển</h3>
      </div>

      <div className="space-y-3">
        {filteredRecs.map((rec, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm card-hover flex gap-3"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-50 to-pink-50 flex items-center justify-center border border-violet-100">
                {getIcon(rec.icon)}
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 text-base mb-1">{rec.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{rec.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationSection;
