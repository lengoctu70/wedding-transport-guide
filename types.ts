export enum City {
  HUE = 'Huế',
  DANANG = 'Đà Nẵng',
  HCM = 'TP.HCM',
}

export enum TransportType {
  BUS = 'Xe khách',
  TRAIN = 'Tàu hỏa',
  PLANE = 'Máy bay',
}

export interface TransportOption {
  id: string;
  city: City;
  type: TransportType;
  providerName?: string;
  outbound?: {
    departureTime: string;
    departureLocation?: string;
    arrivalTime: string;
    arrivalLocation?: string;
    description?: string;
  };
  inbound?: {
    departureTime: string;
    departureLocation?: string;
    arrivalTime: string;
    arrivalLocation?: string;
    description?: string;
  };
  note?: string;
  price?: string;
  link?: string;
  linkText?: string;
  image?: string;
  imageAlt?: string;
  importantWarning?: string;
}

export interface Recommendation {
  title: string;
  icon: 'wallet' | 'clock' | 'star';
  description: string;
  cities: City[];
}