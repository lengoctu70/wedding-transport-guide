import React from 'react';
import { RECOMMENDATIONS } from '../constants';
import TransportCard from './components/TransportCard';
import GeneralInfo from './components/GeneralInfo';
import RecommendationSection from './components/RecommendationSection';
import { HeartHandshake, MapPin, Sparkles } from 'lucide-react';
import { City } from './types';
import { TRANSPORT_DATA } from './constants';

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

  // Get cities with transport options
  const citiesWithOptions = displayCities.filter(city =>
    TRANSPORT_DATA.filter(item => item.city === city).length > 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-25 via-white to-violet-25 font-sans text-gray-900 pb-10">
      {/* Elegant Hero Header */}
      <header className="relative overflow-hidden bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-rose-500"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-violet-100 to-pink-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full blur-3xl opacity-50"></div>

        <div className="relative max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-200">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 text-amber-800" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-900 leading-none">
                <span className="font-script text-2xl gradient-text">Tu&apos;s</span> Wedding
              </h1>
              <p className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wider">
                Hướng dẫn di chuyển
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-6">
        {/* Decorative banner */}
        <div className="mb-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-pink-600 to-rose-600 p-6 text-white shadow-lg shadow-pink-200">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative">
              <h2 className="text-xl font-bold mb-1">Chào mừng!</h2>
              <p className="text-white/90 text-sm">Cảm ơn bạn đã đến dự đám cưới của chúng mình. Dưới đây là hướng dẫn di chuyển chi tiết nhé!</p>
            </div>
          </div>
        </div>

        <GeneralInfo />

        {/* Sticky Filter Tabs */}
        <div className="sticky top-[72px] z-10 bg-white/80 backdrop-blur-lg pt-3 pb-4 -mx-4 px-4 border-b border-gray-100">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id as City | 'ALL')}
                className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border btn-press
                  bg-white text-gray-700 border-gray-200 hover:border-violet-300 hover:text-violet-600 hover:bg-violet-50
                  active:scale-95"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Transport Sections */}
        <div className="space-y-2 mt-4">
          {citiesWithOptions.map((city, cityIndex) => {
            const items = TRANSPORT_DATA.filter(item => item.city === city);
            if (items.length === 0) return null;

            return (
              <div
                key={city}
                id={`section-${city}`}
                className="animate-fade-in"
                style={{ animationDelay: `${cityIndex * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-4 mt-6">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-100 to-pink-100 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-violet-600" />
                    </div>
                    <h2 className="text-base font-bold text-gray-800 uppercase tracking-wide">{city}</h2>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
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
        <div className="text-center py-8 mt-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
              <HeartHandshake className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-gray-700">Hẹn gặp mọi người tại Phú Túc!</span>
          </div>
          <p className="text-xs text-gray-400">© 2025 Tu&apos;s Wedding with Love</p>
        </div>
      </main>
    </div>
  );
};

export default App;
