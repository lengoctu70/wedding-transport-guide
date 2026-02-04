import React from 'react';
import { TransportOption, TransportType } from '../types';
import { Bus, Train, Plane, MapPin, Clock, ExternalLink, AlertTriangle, ArrowRight } from 'lucide-react';

interface TransportCardProps {
  option: TransportOption;
}

const TransportCard: React.FC<TransportCardProps> = ({ option }) => {
  const getIcon = (type: TransportType) => {
    switch (type) {
      case TransportType.BUS: return <Bus className="w-5 h-5 text-indigo-600" />;
      case TransportType.TRAIN: return <Train className="w-5 h-5 text-rose-600" />;
      case TransportType.PLANE: return <Plane className="w-5 h-5 text-sky-600" />;
    }
  };

  const getTypeColor = (type: TransportType) => {
    switch (type) {
      case TransportType.BUS: return 'bg-indigo-50 border-indigo-100';
      case TransportType.TRAIN: return 'bg-rose-50 border-rose-100';
      case TransportType.PLANE: return 'bg-sky-50 border-sky-100';
    }
  };

  return (
    <div className={`rounded-xl border shadow-sm overflow-hidden bg-white mb-4 transition-all hover:shadow-md`}>
      {/* Header */}
      <div className={`px-4 py-3 border-b flex items-center justify-between ${getTypeColor(option.type)}`}>
        <div className="flex items-center gap-2 font-semibold text-gray-800">
          {getIcon(option.type)}
          <span>{option.providerName || option.type}</span>
        </div>
        {option.price && (
          <span className="text-sm font-bold text-emerald-600 bg-white px-2 py-0.5 rounded-full border border-emerald-100 shadow-sm">
            {option.price}
          </span>
        )}
      </div>

      <div className="p-4 space-y-4">
        {/* Outbound Info */}
        {option.outbound && (
          <div className="relative pl-4 border-l-2 border-indigo-200">
            <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">Chiều đi (Đến Đám Cưới)</h4>
            <div className="flex items-start gap-2 mb-1">
              <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                <span className="font-semibold">{option.outbound.departureTime}</span> 
                <span className="text-gray-400 mx-1">→</span> 
                <span className="font-semibold">{option.outbound.arrivalTime}</span>
              </span>
            </div>
            {option.outbound.departureLocation && (
               <div className="flex items-start gap-2 mb-1">
               <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
               <div className="text-sm text-gray-600">
                 <div>Từ: {option.outbound.departureLocation}</div>
                 {option.outbound.arrivalLocation && (
                   <div className="flex items-center gap-1">
                     <ArrowRight className="w-3 h-3 text-gray-400" />
                     <span>Đến: {option.outbound.arrivalLocation}</span>
                   </div>
                 )}
               </div>
             </div>
            )}
            {option.outbound.description && (
              <p className="text-sm text-gray-500 italic mt-1">{option.outbound.description}</p>
            )}
          </div>
        )}

        {/* Inbound Info */}
        {option.inbound && (
          <div className="relative pl-4 border-l-2 border-rose-200">
            <h4 className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">Chiều về (Về Lại TP)</h4>
             <div className="flex items-start gap-2 mb-1">
              <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                <span className="font-semibold">{option.inbound.departureTime}</span> 
                <span className="text-gray-400 mx-1">→</span> 
                <span className="font-semibold">{option.inbound.arrivalTime}</span>
              </span>
            </div>
            {option.inbound.departureLocation && (
               <div className="flex items-start gap-2 mb-1">
               <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-600">
                 <div>Từ: {option.inbound.departureLocation}</div>
                 {option.inbound.arrivalLocation && (
                   <div className="flex items-center gap-1">
                     <ArrowRight className="w-3 h-3 text-gray-400" />
                     <span>Đến: {option.inbound.arrivalLocation}</span>
                   </div>
                 )}
               </div>
             </div>
            )}
             {option.inbound.description && (
              <p className="text-sm text-gray-500 italic mt-1">{option.inbound.description}</p>
            )}
          </div>
        )}

        {/* Notes & Warnings */}
        {(option.note || option.importantWarning) && (
          <div className="bg-gray-50 rounded-lg p-3 text-sm space-y-2">
            {option.note && <p className="text-gray-600">{option.note}</p>}
            
            {option.importantWarning && (
              <div className="flex items-start gap-2 text-amber-700 bg-amber-50 p-2 rounded border border-amber-200">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{option.importantWarning}</span>
              </div>
            )}
          </div>
        )}

        {/* Action Link */}
        {option.link && (
          <a 
            href={option.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            <span>{option.linkText || 'Đặt vé ngay'}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TransportCard;