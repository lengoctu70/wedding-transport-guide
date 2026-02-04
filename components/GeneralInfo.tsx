import React from 'react';
import { GENERAL_INFO } from '../constants';
import { MapPin, Calendar, Info, Map } from 'lucide-react';

const GeneralInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Info className="w-5 h-5 text-indigo-500" />
        Thông Tin Chung
      </h2>
      
      <div className="space-y-4">
        {/* Location & Map Button */}
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-800 text-lg">{GENERAL_INFO.location}</p>
              <p className="text-sm text-gray-500">Nhà Tú</p>
            </div>
          </div>
          
          <a 
            href={GENERAL_INFO.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 rounded-lg text-sm font-medium transition-colors"
          >
            <Map className="w-4 h-4" />
            Xem bản đồ Google Maps
          </a>
        </div>

        <div className="h-px bg-gray-100 my-2"></div>

        {/* Schedule */}
        <div className="space-y-2">
          {GENERAL_INFO.schedule.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-gray-800 block">{item.date}</span>
                <span className="text-gray-600 text-sm">{item.event}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="h-px bg-gray-100 my-2"></div>

        {/* Transfer Note */}
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
          <p className="text-sm text-blue-800 leading-relaxed">
            <span className="font-bold">Lưu ý:</span> {GENERAL_INFO.transferNote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;