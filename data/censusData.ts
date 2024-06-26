const censusData = [
  {
    province: 1,
    district: 1,
    area_name: 'taplejung',
    type: 'pop_size',
    total: 120590,
  },
  {
    province: 1,
    district: 2,
    area_name: 'sankhuwasabha',
    type: 'pop_size',
    total: 158041,
  },
  {
    province: 1,
    district: 3,
    area_name: 'solukhumbu',
    type: 'pop_size',
    total: 104851,
  },
  {
    province: 1,
    district: 4,
    area_name: 'okhaldhunga',
    type: 'pop_size',
    total: 139552,
  },
  {
    province: 1,
    district: 5,
    area_name: 'khotang',
    type: 'pop_size',
    total: 175298,
  },
  {
    province: 1,
    district: 6,
    area_name: 'bhojpur',
    type: 'pop_size',
    total: 157923,
  },
  {
    province: 1,
    district: 7,
    area_name: 'dhankuta',
    type: 'pop_size',
    total: 150599,
  },
  {
    province: 1,
    district: 8,
    area_name: 'terhathum',
    type: 'pop_size',
    total: 88731,
  },
  {
    province: 1,
    district: 9,
    area_name: 'panchthar',
    type: 'pop_size',
    total: 172400,
  },
  {
    province: 1,
    district: 10,
    area_name: 'ilam',
    type: 'pop_size',
    total: 279534,
  },
  {
    province: 1,
    district: 11,
    area_name: 'jhapa',
    type: 'pop_size',
    total: 998054,
  },
  {
    province: 1,
    district: 12,
    area_name: 'morang',
    type: 'pop_size',
    total: 1148156,
  },
  {
    province: 1,
    district: 13,
    area_name: 'sunsari',
    type: 'pop_size',
    total: 926962,
  },
  {
    province: 1,
    district: 14,
    area_name: 'udayapur',
    type: 'pop_size',
    total: 340721,
  },
  {
    province: 2,
    district: 15,
    area_name: 'saptari',
    type: 'pop_size',
    total: 706255,
  },
  {
    province: 2,
    district: 16,
    area_name: 'siraha',
    type: 'pop_size',
    total: 739953,
  },
  {
    province: 2,
    district: 17,
    area_name: 'dhanusa',
    type: 'pop_size',
    total: 867747,
  },
  {
    province: 2,
    district: 18,
    area_name: 'mahottari',
    type: 'pop_size',
    total: 706994,
  },
  {
    province: 2,
    district: 19,
    area_name: 'sarlahi',
    type: 'pop_size',
    total: 862470,
  },
  {
    province: 2,
    district: 20,
    area_name: 'rautahat',
    type: 'pop_size',
    total: 813573,
  },
  {
    province: 2,
    district: 21,
    area_name: 'bara',
    type: 'pop_size',
    total: 763137,
  },
  {
    province: 2,
    district: 22,
    area_name: 'parsa',
    type: 'pop_size',
    total: 654471,
  },
  {
    province: 3,
    district: 23,
    area_name: 'dolakha',
    type: 'pop_size',
    total: 172767,
  },
  {
    province: 3,
    district: 24,
    area_name: 'sindhupalchok',
    type: 'pop_size',
    total: 262624,
  },
  {
    province: 3,
    district: 25,
    area_name: 'rasuwa',
    type: 'pop_size',
    total: 46689,
  },
  {
    province: 3,
    district: 26,
    area_name: 'dhading',
    type: 'pop_size',
    total: 325710,
  },
  {
    province: 3,
    district: 27,
    area_name: 'nuwakot',
    type: 'pop_size',
    total: 263391,
  },
  {
    province: 3,
    district: 28,
    area_name: 'kathmandu',
    type: 'pop_size',
    total: 2041587,
  },
  {
    province: 3,
    district: 29,
    area_name: 'bhaktapur',
    type: 'pop_size',
    total: 432132,
  },
  {
    province: 3,
    district: 30,
    area_name: 'lalitpur',
    type: 'pop_size',
    total: 551667,
  },
  {
    province: 3,
    district: 31,
    area_name: 'kavrepalanchok',
    type: 'pop_size',
    total: 364039,
  },
  {
    province: 3,
    district: 32,
    area_name: 'ramechhap',
    type: 'pop_size',
    total: 170302,
  },
  {
    province: 3,
    district: 33,
    area_name: 'sindhuli',
    type: 'pop_size',
    total: 300026,
  },
  {
    province: 3,
    district: 34,
    area_name: 'makwanpur',
    type: 'pop_size',
    total: 466073,
  },
  {
    province: 3,
    district: 35,
    area_name: 'chitawan',
    type: 'pop_size',
    total: 719859,
  },
  {
    province: 4,
    district: 36,
    area_name: 'gorkha',
    type: 'pop_size',
    total: 251027,
  },
  {
    province: 4,
    district: 37,
    area_name: 'manang',
    type: 'pop_size',
    total: 5658,
  },
  {
    province: 4,
    district: 38,
    area_name: 'mustang',
    type: 'pop_size',
    total: 14452,
  },
  {
    province: 4,
    district: 39,
    area_name: 'myagdi',
    type: 'pop_size',
    total: 107033,
  },
  {
    province: 4,
    district: 40,
    area_name: 'kaski',
    type: 'pop_size',
    total: 600051,
  },
  {
    province: 4,
    district: 41,
    area_name: 'lamjung',
    type: 'pop_size',
    total: 155852,
  },
  {
    province: 4,
    district: 42,
    area_name: 'tanahu',
    type: 'pop_size',
    total: 321153,
  },
  {
    province: 4,
    district: 43,
    area_name: 'nawalparasi (bardaghat susta east)',
    type: 'pop_size',
    total: 378079,
  },
  {
    province: 4,
    district: 44,
    area_name: 'syangja',
    type: 'pop_size',
    total: 253024,
  },
  {
    province: 4,
    district: 45,
    area_name: 'parbat',
    type: 'pop_size',
    total: 130887,
  },
  {
    province: 4,
    district: 46,
    area_name: 'baglung',
    type: 'pop_size',
    total: 249211,
  },
  {
    province: 5,
    district: 47,
    area_name: 'rukum (east)',
    type: 'pop_size',
    total: 56786,
  },
  {
    province: 5,
    district: 48,
    area_name: 'rolpa',
    type: 'pop_size',
    total: 234793,
  },
  {
    province: 5,
    district: 49,
    area_name: 'pyuthan',
    type: 'pop_size',
    total: 232019,
  },
  {
    province: 5,
    district: 50,
    area_name: 'gulmi',
    type: 'pop_size',
    total: 246494,
  },
  {
    province: 5,
    district: 51,
    area_name: 'arghakhanchi',
    type: 'pop_size',
    total: 177086,
  },
  {
    province: 5,
    district: 52,
    area_name: 'palpa',
    type: 'pop_size',
    total: 245027,
  },
  {
    province: 5,
    district: 53,
    area_name: 'nawalparasi (bardaghat susta west)',
    type: 'pop_size',
    total: 386868,
  },
  {
    province: 5,
    district: 54,
    area_name: 'rupandehi',
    type: 'pop_size',
    total: 1121957,
  },
  {
    province: 5,
    district: 55,
    area_name: 'kapilbastu',
    type: 'pop_size',
    total: 682961,
  },
  {
    province: 5,
    district: 56,
    area_name: 'dang',
    type: 'pop_size',
    total: 674993,
  },
  {
    province: 5,
    district: 57,
    area_name: 'banke',
    type: 'pop_size',
    total: 603194,
  },
  {
    province: 5,
    district: 58,
    area_name: 'bardiya',
    type: 'pop_size',
    total: 459900,
  },
  {
    province: 6,
    district: 59,
    area_name: 'dolpa',
    type: 'pop_size',
    total: 42774,
  },
  {
    province: 6,
    district: 60,
    area_name: 'mugu',
    type: 'pop_size',
    total: 64549,
  },
  {
    province: 6,
    district: 61,
    area_name: 'humla',
    type: 'pop_size',
    total: 55394,
  },
  {
    province: 6,
    district: 62,
    area_name: 'jumla',
    type: 'pop_size',
    total: 118349,
  },
  {
    province: 6,
    district: 63,
    area_name: 'kalikot',
    type: 'pop_size',
    total: 145292,
  },
  {
    province: 6,
    district: 64,
    area_name: 'dailekh',
    type: 'pop_size',
    total: 252313,
  },
  {
    province: 6,
    district: 65,
    area_name: 'jajarkot',
    type: 'pop_size',
    total: 189360,
  },
  {
    province: 6,
    district: 66,
    area_name: 'rukum (west)',
    type: 'pop_size',
    total: 166740,
  },
  {
    province: 6,
    district: 67,
    area_name: 'salyan',
    type: 'pop_size',
    total: 238515,
  },
  {
    province: 6,
    district: 68,
    area_name: 'surkhet',
    type: 'pop_size',
    total: 415126,
  },
  {
    province: 7,
    district: 69,
    area_name: 'bajura',
    type: 'pop_size',
    total: 138523,
  },
  {
    province: 7,
    district: 70,
    area_name: 'bajhang',
    type: 'pop_size',
    total: 189085,
  },
  {
    province: 7,
    district: 71,
    area_name: 'darchula',
    type: 'pop_size',
    total: 133310,
  },
  {
    province: 7,
    district: 72,
    area_name: 'baitadi',
    type: 'pop_size',
    total: 242157,
  },
  {
    province: 7,
    district: 73,
    area_name: 'dadeldhura',
    type: 'pop_size',
    total: 139602,
  },
  {
    province: 7,
    district: 74,
    area_name: 'doti',
    type: 'pop_size',
    total: 204831,
  },
  {
    province: 7,
    district: 75,
    area_name: 'achham',
    type: 'pop_size',
    total: 228852,
  },
  {
    province: 7,
    district: 76,
    area_name: 'kailali',
    type: 'pop_size',
    total: 904666,
  },
  {
    province: 7,
    district: 77,
    area_name: 'kanchanpur',
    type: 'pop_size',
    total: 513757,
  },
];

export const getDistrictDataByAreaName = (areaName: string) => {
  return censusData.find(
    (data) => data.area_name.toLowerCase() === areaName.toLowerCase(),
  );
};

export const getDistrictData = (districtId: number) => {
  return censusData.find((data) => data.district === districtId);
};
