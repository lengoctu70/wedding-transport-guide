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
      case 'clock': return <Clock className="w-5 h-5 text-indigo-600" />;
      case 'star': return <Star className="w-5 h-5 text-amber-500" />;
      default: return <CheckCircle2 className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="mt-8 mb-12">
      <h3 className="text-lg font-bold text-gray-800 mb-4 px-1">Tóm Tắt Lựa Chọn</h3>
      <div className="grid gap-3">
        {filteredRecs.map((rec, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border shadow-sm flex gap-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                {getIcon(rec.icon)}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">{rec.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{rec.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationSection;