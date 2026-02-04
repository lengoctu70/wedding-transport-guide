import React from 'react';
import { City } from './types';
import { TRANSPORT_DATA } from './constants';
import TransportCard from './components/TransportCard';
import GeneralInfo from './components/GeneralInfo';
import RecommendationSection from './components/RecommendationSection';
import { HeartHandshake, MapPin } from 'lucide-react';

const App: React.FC = () => {
  
  const scrollToSection = (city: City | 'ALL') => {
    if (city === 'ALL') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(`section-${city}`);
    if (element) {
      // Header height (approx 72px) + Tabs height (approx 50px) + Padding (16px) = ~140px
      const headerOffset = 140; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const tabs = [
    { id: 'ALL', label: 'Tất cả' },
    { id: City.HCM, label: 'TP.HCM' },
    { id: City.DANANG, label: 'Đà Nẵng' },
    { id: City.HUE, label: 'Huế' },
  ];

  // Define the display order
  const displayCities = [City.HCM, City.DANANG, City.HUE];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900 pb-10">
      {/* Hero Header */}
      <header className="bg-white border-b sticky top-0 z-20 shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-center gap-2">
            <div className="bg-rose-100 p-2 rounded-full">
                <HeartHandshake className="w-6 h-6 text-rose-500" />
            </div>
            <div className="text-center">
                <h1 className="text-xl font-bold text-gray-900 leading-none">Đám Cưới Tú</h1>
                <p className="text-xs text-rose-500 font-medium mt-1 uppercase tracking-wider">Hướng dẫn di chuyển</p>
            </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-6">
        
        <GeneralInfo />

        {/* Sticky Filter Tabs */}
        <div className="sticky top-[72px] z-10 bg-slate-50 pt-2 pb-4 -mx-4 px-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id as City | 'ALL')}
                className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:scale-95 shadow-sm"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Transport Sections */}
        <div className="space-y-8 mt-2 animate-fadeIn">
          {displayCities.map(city => {
             const items = TRANSPORT_DATA.filter(item => item.city === city);
             if (items.length === 0) return null;
             
             return (
               <div key={city} id={`section-${city}`}>
                 <div className="flex items-center gap-2 mb-4 px-1 mt-6">
                   <div className="bg-indigo-100 p-1.5 rounded-md">
                     <MapPin className="w-4 h-4 text-indigo-600" />
                   </div>
                   <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">{city}</h2>
                 </div>
                 <div className="space-y-4">
                   {items.map((option) => (
                     <TransportCard key={option.id} option={option} />
                   ))}
                 </div>
               </div>
             );
          })}
        </div>

        {/* Recommendations */}
        <div className="border-t border-gray-200 mt-10 pt-6">
             <RecommendationSection selectedCity={'ALL'} />
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-400 pb-6 mt-8">
            <p>Hẹn gặp mọi người tại Phú Túc!</p>
            <p className="mt-1">© 2024 Tu's Wedding</p>
        </div>
      </main>
    </div>
  );
};

export default App;