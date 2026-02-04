import React from 'react';
import { TransportOption, TransportType } from '../types';
import { Bus, Train, Plane, MapPin, Clock, ExternalLink, AlertTriangle, ArrowRight } from 'lucide-react';

interface TransportCardProps {
  option: TransportOption;
}

const TransportCard: React.FC<TransportCardProps> = ({ option }) => {
  const getIcon = (type: TransportType) => {
    switch (type) {
      case TransportType.BUS: return <Bus className="w-5 h-5 text-violet-600" />;
      case TransportType.TRAIN: return <Train className="w-5 h-5 text-rose-500" />;
      case TransportType.PLANE: return <Plane className="w-5 h-5 text-sky-500" />;
    }
  };

  const getTypeColor = (type: TransportType) => {
    switch (type) {
      case TransportType.BUS: return 'bg-gradient-to-r from-violet-50 to-violet-100 border-violet-200';
      case TransportType.TRAIN: return 'bg-gradient-to-r from-rose-50 to-rose-100 border-rose-200';
      case TransportType.PLANE: return 'bg-gradient-to-r from-sky-50 to-sky-100 border-sky-200';
    }
  };

  const getBadgeColor = (type: TransportType) => {
    switch (type) {
      case TransportType.BUS: return 'bg-violet-100 text-violet-700';
      case TransportType.TRAIN: return 'bg-rose-100 text-rose-700';
      case TransportType.PLANE: return 'bg-sky-100 text-sky-700';
    }
  };

  return (
    <div className={`rounded-2xl border shadow-md overflow-hidden bg-white mb-4 card-hover transition-all duration-300`}>
      {/* Header */}
      <div className={`px-5 py-4 border-b flex items-center justify-between ${getTypeColor(option.type)}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
            {getIcon(option.type)}
          </div>
          <div>
            <span className="font-bold text-gray-800">{option.providerName || option.type}</span>
            <div className={`text-xs px-2 py-0.5 rounded-full inline-block ml-2 font-medium ${getBadgeColor(option.type)}`}>
              {option.type}
            </div>
          </div>
        </div>
        {option.price && (
          <span className="text-sm font-bold text-gray-900 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
            {option.price}
          </span>
        )}
      </div>

      <div className="p-5 space-y-4">
        {/* Outbound Info */}
        {option.outbound && (
          <div className="relative pl-5 border-l-2 border-violet-300">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-violet-600 uppercase tracking-wider bg-violet-50 px-2 py-0.5 rounded">
                Chiều đi
              </span>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                <span className="font-semibold text-gray-900">{option.outbound.departureTime}</span>
                <span className="text-gray-400 mx-2">→</span>
                <span className="font-semibold text-gray-900">{option.outbound.arrivalTime}</span>
              </span>
            </div>
            {option.outbound.departureLocation && (
              <div className="flex items-start gap-2 mb-1">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-400">Từ:</span>
                    <span className="font-medium">{option.outbound.departureLocation}</span>
                  </div>
                  {option.outbound.arrivalLocation && (
                    <div className="flex items-center gap-1">
                      <ArrowRight className="w-3 h-3 text-gray-400" />
                      <span className="flex items-center gap-1">
                        <span className="text-xs text-gray-400">Đến:</span>
                        <span className="font-medium">{option.outbound.arrivalLocation}</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
            {option.outbound.description && (
              <p className="text-sm text-gray-500 italic mt-2 bg-gray-50 p-2 rounded-lg">
                💡 {option.outbound.description}
              </p>
            )}
          </div>
        )}

        {/* Inbound Info */}
        {option.inbound && (
          <div className="relative pl-5 border-l-2 border-rose-300">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider bg-rose-50 px-2 py-0.5 rounded">
                Chiều về
              </span>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                <span className="font-semibold text-gray-900">{option.inbound.departureTime}</span>
                <span className="text-gray-400 mx-2">→</span>
                <span className="font-semibold text-gray-900">{option.inbound.arrivalTime}</span>
              </span>
            </div>
            {option.inbound.departureLocation && (
              <div className="flex items-start gap-2 mb-1">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-400">Từ:</span>
                    <span className="font-medium">{option.inbound.departureLocation}</span>
                  </div>
                  {option.inbound.arrivalLocation && (
                    <div className="flex items-center gap-1">
                      <ArrowRight className="w-3 h-3 text-gray-400" />
                      <span className="flex items-center gap-1">
                        <span className="text-xs text-gray-400">Đến:</span>
                        <span className="font-medium">{option.inbound.arrivalLocation}</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
            {option.inbound.description && (
              <p className="text-sm text-gray-500 italic mt-2 bg-gray-50 p-2 rounded-lg">
                💡 {option.inbound.description}
              </p>
            )}
          </div>
        )}

        {/* Notes & Warnings */}
        {(option.note || option.importantWarning) && (
          <div className="bg-gray-50 rounded-xl p-4 text-sm space-y-3">
            {option.note && (
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-violet-600 text-xs">✓</span>
                </div>
                <p className="text-gray-600">{option.note}</p>
              </div>
            )}

            {option.importantWarning && (
              <div className="flex items-start gap-2 text-amber-700 bg-amber-50 p-3 rounded-lg border border-amber-200">
                <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="font-medium">{option.importantWarning}</span>
              </div>
            )}
          </div>
        )}

        {/* Image */}
        {option.image && (
          <div className="mb-3">
            <img
              src={option.image}
              alt={option.imageAlt || 'Transport image'}
              className="w-full h-44 object-cover rounded-xl shadow-sm"
              loading="lazy"
            />
          </div>
        )}

        {/* Action Link */}
        {option.link && (
          <a
            href={option.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition-all duration-200 btn-press"
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
