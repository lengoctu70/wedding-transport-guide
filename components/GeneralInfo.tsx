import React from 'react';
import { GENERAL_INFO } from '../constants';
import { MapPin, Calendar, Info, Map, ArrowRight } from 'lucide-react';

const GeneralInfo: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white rounded-3xl shadow-lg border border-gray-100 p-6 mb-6">
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-100 to-pink-100 rounded-full -translate-y-16 translate-x-16 opacity-60"></div>

      <div className="relative z-10">
        <h2 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
            <Info className="w-4 h-4 text-white" />
          </div>
          Thông Tin Đám Cưới
        </h2>

        <div className="space-y-5">
          {/* Location */}
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-rose-500" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">{GENERAL_INFO.location}</p>
                <p className="text-sm text-gray-500">Nhà Tú - Địa điểm tổ chức</p>
              </div>
            </div>

            <a
              href={GENERAL_INFO.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition-all duration-200 btn-press"
            >
              <Map className="w-4 h-4" />
              Mở Google Maps
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="h-px bg-gray-100"></div>

          {/* Schedule */}
          <div className="space-y-3">
            {GENERAL_INFO.schedule.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  idx === 0 ? 'bg-violet-50' : 'bg-amber-50'
                }`}>
                  <Calendar className={`w-5 h-5 ${idx === 0 ? 'text-violet-500' : 'text-amber-500'}`} />
                </div>
                <div className="pt-1">
                  <span className="font-bold text-gray-800 block">{item.date}</span>
                  <span className="text-gray-600 text-sm">{item.event}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="h-px bg-gray-100"></div>

          {/* Transfer Note */}
          <div className="bg-gradient-to-r from-violet-50 to-pink-50 p-4 rounded-2xl border border-violet-100">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-violet-600 text-xs font-bold">!</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-violet-800 mb-1">Lưu Ý Di Chuyển</p>
                <p className="text-sm text-violet-700 leading-relaxed">{GENERAL_INFO.transferNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
