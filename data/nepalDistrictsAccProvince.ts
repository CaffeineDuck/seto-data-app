interface EachProvince {
  province: string;
  districts: string[];
}

export const districtsAccProvince: EachProvince[] = [
  {
    province: 'Koshi',
    districts: [
      'Bhojpur',
      'Dhankuta',
      'Ilam',
      'Jhapa',
      'Khotang',
      'Morang',
      'Okhaldhunga',
      'Panchthar',
      'Sankhuwasabha',
      'Solukhumbu',
      'Sunsari',
      'Taplejung',
      'Terhathum',
      'Udayapur',
    ],
  },
  {
    province: 'Madhesh',
    districts: [
      'Bara',
      'Parsa',
      'Dhanusa',
      'Mahottari',
      'Rautahat',
      'Saptari',
      'Sarlahi',
      'Siraha',
    ],
  },
  {
    province: 'Bagmati',
    districts: [
      'Bhaktapur',
      'Chitwan',
      'Dhading',
      'Dolakha',
      'Kathmandu',
      'Kavrepalanchok',
      'Lalitpur',
      'Makwanpur',
      'Nuwakot',
      'Ramechhap',
      'Rasuwa',
      'Sindhuli',
      'Sindhupalchok',
    ],
  },
  {
    province: 'Gandaki',
    districts: [
      'Baglung',
      'Gorkha',
      'Kaski',
      'Lamjung',
      'Manang',
      'Mustang',
      'Myagdi',
      'Nawalparasi (East)',
      'Nawalparasi (West)',
      'Parbat',
      'Syangja',
      'Tanahun',
    ],
  },
  {
    province: 'Lumbini',
    districts: [
      'Arghakhanchi',
      'Banke',
      'Bardiya',
      'Dang Deukhuri',
      'Rukum (East)',
      'Gulmi',
      'Kapilvastu',
      'Palpa',
      'Pyuthan',
      'Rolpa',
      'Rupandehi',
    ],
  },
  {
    province: 'Karnali',
    districts: [
      'Dailekh',
      'Dolpa',
      'Humla',
      'Jajarkot',
      'Jumla',
      'Kalikot',
      'Mugu',
      'Salyan',
      'Surkhet',
      'Rukum (West)',
    ],
  },
  {
    province: 'Sudurpashchim',
    districts: [
      'Achham',
      'Baitadi',
      'Bajhang',
      'Bajura',
      'Dadeldhura',
      'Darchula',
      'Doti',
      'Kailali',
      'Kanchanpur',
    ],
  },
];

export const getProvinces = () => {
  const provinces: {
    value: string;
    label: string;
  }[] = [];
  districtsAccProvince.map((province) =>
    provinces.push({
      value: province.province,
      label: province.province,
    }),
  );

  return provinces;
};

export const getDistricts = (province: string) => {
  const districts: {
    value: string;
    label: string;
  }[] = [];

  const selectedProvince = districtsAccProvince.find(
    (p) => p.province === province,
  );

  selectedProvince?.districts.map((district) =>
    districts.push({
      value: district,
      label: district,
    }),
  );

  return selectedProvince ? districts : [];
};
