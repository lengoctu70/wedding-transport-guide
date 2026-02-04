import { City, TransportType, TransportOption, Recommendation } from './types';

export const GENERAL_INFO = {
  location: "Phú Túc, Gia Lai",
  mapLink: "https://www.google.com/maps/place/%C4%90i%C3%AAn+m%C3%A1y+%C4%90%C3%ACnh+Anh/data=!4m2!3m1!1s0x0:0x813cd4e7e9f2a56e?sa=X&ictx=111",
  schedule: [
    { date: "21/3 (Chiều)", event: "Nhóm họ" },
    { date: "22/3 (Trưa)", event: "Tiệc cưới chính thức" }
  ],
  transferNote: "Nếu đi Tàu hỏa hoặc Máy bay đến Tuy Hòa, sẽ có xe nhà thuê đón lên Phú Túc (thời gian đi xe trung chuyển khoảng 1 tiếng 30 phút)."
};

export const TRANSPORT_DATA: TransportOption[] = [
  // HUE
  {
    id: 'hue-bus',
    city: City.HUE,
    type: TransportType.BUS,
    providerName: 'Nhà xe Diên Hồng',
    outbound: {
      departureTime: '17:00',
      departureLocation: 'Bến xe phía Nam Huế',
      arrivalTime: '06:00',
      arrivalLocation: 'Trước cửa nhà Tú',
      description: 'Ngủ một đêm trên xe'
    },
    inbound: {
      departureTime: '16:00',
      departureLocation: 'Nhà Tú',
      arrivalTime: '04:00 - 05:00',
      arrivalLocation: 'Huế'
    },
    link: 'https://www.facebook.com/p/Nh%C3%A0-Xe-Di%C3%AAn-H%E1%BB%93ng-Gia-Lai-Hu%E1%BA%BF-Qu%E1%BA%A3ng-Tr%E1%BB%8B-Qu%E1%BA%A3ng-B%C3%ACnh-100063448316752/',
    linkText: 'Facebook Nhà xe',
    note: 'Tuyến Krông Pa - Phú Túc'
  },
  {
    id: 'hue-train',
    city: City.HUE,
    type: TransportType.TRAIN,
    providerName: 'Tàu Hỏa (SE1, SE3...)',
    outbound: {
      departureTime: 'Tàu đêm',
      departureLocation: 'Ga Huế',
      arrivalTime: 'Sáng hôm sau',
      arrivalLocation: 'Ga Tuy Hòa'
    },
    inbound: {
      departureTime: 'Linh hoạt',
      departureLocation: 'Tuy Hòa',
      arrivalTime: '-',
      arrivalLocation: 'Huế',
      description: 'Đi xe trung chuyển xuống Tuy Hòa hoặc xe khách về Huế'
    },
    note: 'Sáng tới nơi, xe trung chuyển sẽ đón lên nhà.'
  },

  // DANANG
  {
    id: 'danang-bus',
    city: City.DANANG,
    type: TransportType.BUS,
    providerName: 'Nhà xe Hải Vân',
    outbound: {
      departureTime: '18:00',
      departureLocation: 'Đà Nẵng',
      arrivalTime: '05:00',
      arrivalLocation: 'Trước cửa nhà Tú'
    },
    inbound: {
      departureTime: '18:00',
      departureLocation: 'Nhà Tú',
      arrivalTime: '05:00',
      arrivalLocation: 'Đà Nẵng'
    },
    link: 'https://www.facebook.com/p/Nh%C3%A0-Xe-H%E1%BA%A3i-V%C3%A2n-%C4%90%C3%A0-N%E1%BA%B5ng-100063679985328/',
    linkText: 'Facebook Nhà xe',
    note: 'Xe chạy thẳng, ngủ một giấc là tới.'
  },
  {
    id: 'danang-train',
    city: City.DANANG,
    type: TransportType.TRAIN,
    providerName: 'Tàu Hỏa (SE5, SE7...)',
    outbound: {
      departureTime: 'Tàu đêm',
      departureLocation: 'Ga Đà Nẵng',
      arrivalTime: 'Sáng hôm sau',
      arrivalLocation: 'Ga Tuy Hòa'
    },
    note: 'Sáng tới nơi, xe trung chuyển sẽ đón lên nhà.'
  },

  // HCM
  {
    id: 'hcm-bus',
    city: City.HCM,
    type: TransportType.BUS,
    providerName: 'Xe khách Cô Hai',
    price: '~450.000đ',
    outbound: {
      departureTime: '18:00',
      departureLocation: 'BX Miền Đông cũ (Bình Thạnh)',
      arrivalTime: '05:00',
      arrivalLocation: 'Trước cửa nhà Tú'
    },
    inbound: {
      departureTime: '16:00',
      departureLocation: 'Nhà Tú',
      arrivalTime: '04:00 - 05:00',
      arrivalLocation: 'BX Miền Đông'
    },
    note: 'Xe giường nằm phòng lớn, tiện nghi.'
  },
  {
    id: 'hcm-plane',
    city: City.HCM,
    type: TransportType.PLANE,
    providerName: 'Vietnam Airlines',
    price: '~1.032.000đ (Chiều đi)',
    outbound: {
      departureTime: '07:35 (Sáng T7)',
      departureLocation: 'SGN (Tân Sơn Nhất)',
      arrivalTime: '08:40',
      arrivalLocation: 'TBB (Tuy Hòa)',
      description: 'Sau đó đi xe trung chuyển lên nhà (~1h30p).'
    },
    note: 'Nên bay sáng Thứ 7 cho khỏe.'
  },
  {
    id: 'hcm-plane-return',
    city: City.HCM,
    type: TransportType.PLANE,
    providerName: 'Máy bay (Chiều về)',
    price: 'VNA ~1.175k / VJ ~1.216k',
    inbound: {
      departureTime: '16:45 (VNA) hoặc 18:30 (VJ)',
      departureLocation: 'Sân bay Pleiku',
      arrivalTime: 'Chiều/Tối',
      arrivalLocation: 'SGN'
    },
    note: 'Lộ trình về: 13:00-14:00 đi xe từ nhà lên Pleiku (3.5 tiếng). 16:30 có mặt sân bay.',
    importantWarning: 'Nếu đi Vietnam Airlines (16:45) thì Phải đi từ Phú Túc lên Pleiku lúc 12:00 trưa.'
  }
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    title: "Tiết kiệm & Tiện lợi nhất",
    icon: "wallet",
    description: "Đi xe giường nằm. Lên xe lúc 17h-18h chiều, ngủ một đêm, 5h-6h sáng tới tận cửa nhà.",
    cities: [City.HUE, City.DANANG, City.HCM]
  },
  {
    title: "Nhanh & Khỏe",
    icon: "clock",
    description: "Đi: Bay sáng T7 đến Tuy Hòa (VNA). Về: Chiều CN bay từ Pleiku về Sài Gòn (VNA).",
    cities: [City.HCM]
  },
  {
    title: "Trải nghiệm",
    icon: "star",
    description: "Đi tàu hỏa chuyến đêm đến Ga Tuy Hòa. Báo trước giờ tàu để nhà sắp xe đón.",
    cities: [City.HUE, City.DANANG]
  }
];