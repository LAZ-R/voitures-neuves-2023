import { TYPES } from "./types.js";

export const BRANDS = [
  {
    name: 'Alfa Romeo',
    cars: [
      { name: 'Tonale', type: TYPES[11], units: 3175 }, // SUV
      { name: 'Stelvio', type: TYPES[12], units: 499 }, // SUV
      { name: 'Giulia', type: TYPES[6], units: 235 },
    ],
  },
  {
    name: 'Alpine',
    cars: [
      { name: 'A110', type: TYPES[17], units: 4328 },
    ],
  },
  {
    name: 'Astron Martin',
    cars: [
      { name: 'DBX', type: TYPES[13], units: 32 }, // SUV
      { name: 'Vantage', type: TYPES[17], units: 26 },
      { name: 'DBS', type: TYPES[17], units: 23 },
      { name: 'DB11', type: TYPES[17], units: 6 },
      { name: 'DB12', type: TYPES[17], units: 5 },
      { name: 'Speedster', type: TYPES[17], units: 1 },
    ],
  },
  {
    name: 'Audi',
    cars: [
      { name: 'Q3', type: TYPES[11], units: 10138 }, // SUV
      { name: 'A3', type: TYPES[3], units: 8598 },
      { name: 'A1', type: TYPES[1], units: 8575 },
      { name: 'Q2', type: TYPES[10], units: 5834 }, // SUV
      { name: 'Q5', type: TYPES[12], units: 5266 }, // SUV
      { name: 'Q4 e-Tron', type: TYPES[11], units: 2879 }, // SUV
      { name: 'A4', type: TYPES[6], units: 2367 },
      { name: 'A6', type: TYPES[8], units: 1417 },
      { name: 'A5', type: TYPES[6], units: 1255 },
      { name: 'Q8 e-Tron', type: TYPES[13], units: 988 }, // SUV
      { name: 'Q8', type: TYPES[13], units: 929 }, // SUV
      { name: 'E-tron GT', type: TYPES[17], units: 355 },
      { name: 'TT', type: TYPES[17], units: 336 },
      { name: 'Q7', type: TYPES[13], units: 233 }, // SUV
      { name: 'A7', type: TYPES[8], units: 138 },
      { name: 'A8', type: TYPES[9], units: 86 },
      { name: 'R8', type: TYPES[17], units: 25 },
    ],
  },
  {
    name: 'Bentley',
    cars: [
      { name: 'Bentayaga', type: TYPES[13], units: 28 }, // SUV
      { name: 'Continental GT', type: TYPES[17], units: 24 },
      { name: 'Flying Spur', type: TYPES[9], units: 13 },
    ],
  },
  {
    name: 'BMW',
    cars: [
      { name: 'X1/iX1', type: TYPES[11], units: 16330 }, // SUV
      { name: 'Série 1', type: TYPES[3], units: 10477 },
      { name: 'X3/iX3', type: TYPES[12], units: 6585 }, // SUV
      { name: 'Série 2 Active Tourer', type: TYPES[4], units: 5885 },
      { name: 'Série 4/i4', type: TYPES[6], units: 5140 },
      { name: 'Série 3', type: TYPES[6], units: 4465 },
      { name: 'X5', type: TYPES[13], units: 3127 }, // SUV
      { name: 'X2/iX2', type: TYPES[11], units: 2306 }, // SUV
      { name: 'Série 5', type: TYPES[8], units: 1581 },
      { name: 'Série 2 Grand Coupé', type: TYPES[6], units: 852 },
      { name: 'Série 2 Coupé', type: TYPES[6], units: 818 },
      { name: 'X4', type: TYPES[12], units: 684 }, // SUV
      { name: 'iX', type: TYPES[13], units: 431 }, // SUV
      { name: 'XM', type: TYPES[13], units: 378 }, // SUV
      { name: 'Série 7/i7', type: TYPES[9], units: 204 },
      { name: 'Z4', type: TYPES[17], units: 174 },
      { name: 'X6', type: TYPES[13], units: 88 }, // SUV
    ],
  },
  {
    name: 'Citroën',
    cars: [
      { name: 'C3', type: TYPES[1], units: 59605 },
      { name: 'C4/C4X', type: TYPES[3], units: 20775 },
      { name: 'C3 Aircross', type: TYPES[10], units: 20465 },
      { name: 'C5 Aircross', type: TYPES[11], units: 19683 },
      { name: 'C5X', type: TYPES[6], units: 4195 },
      
      { name: 'Berlingo', type: TYPES[5], units: 833 },
      { name: 'Jumpy', type: TYPES[18], units: 330 },
      { name: 'Spacetourer', type: TYPES[7], units: 51 },
    ],
  },
  {
    name: 'Cupra',
    cars: [
      { name: 'Formentor', type: TYPES[11], units: 8960 }, // SUV
      { name: 'Born', type: TYPES[3], units: 3224 },
      { name: 'Leon', type: TYPES[3], units: 2571 },
      { name: 'Ateca', type: TYPES[10], units: 191 }, // SUV
    ],
  },
  {
    name: 'Dacia',
    cars: [
      { name: 'Sandero', type: TYPES[1], units: 69105 },
      { name: 'Duster', type: TYPES[10], units: 32626 }, // SUV
      { name: 'Spring', type: TYPES[1], units: 29761 },
      { name: 'Jogger', type: TYPES[3], units: 24889 },
      { name: 'Lodgy', type: TYPES[4], units: 10 },
    ],
  },
  {
    name: 'DS',
    cars: [
      { name: 'DS 4', type: TYPES[10], units: 8878 }, // SUV
      { name: 'DS 7', type: TYPES[11], units: 8736 }, // SUV
      { name: 'DS 3', type: TYPES[10], units: 5434 }, // SUV
      { name: 'DS 9', type: TYPES[8], units: 326 },
    ],
  },
  {
    name: 'Ferrari',
    cars: [
      { name: '296', type: TYPES[17], units: 146 },
      { name: 'SF90', type: TYPES[17], units: 60 },
      { name: '812', type: TYPES[17], units: 57 },
      { name: 'Roma', type: TYPES[17], units: 22 },
      { name: 'Portofino', type: TYPES[17], units: 14 },
      { name: 'Purosangue', type: TYPES[13], units: 14 }, // SUV
      { name: 'F8 Tributo', type: TYPES[17], units: 2 },
      { name: 'Daytona SP3', type: TYPES[17], units: 2 },
    ],
  },
  {
    name: 'Fiat',
    cars: [
      { name: '500E', type: TYPES[0], units: 23193 },
      { name: '500', type: TYPES[0], units: 8475 },
      { name: 'Panda', type: TYPES[0], units: 3593 },
      { name: '500X', type: TYPES[10], units: 2653 }, // SUV
      { name: '600', type: TYPES[10], units: 1065 }, // SUV
      { name: 'Tipo', type: TYPES[3], units: 1047 },
      { name: 'Scudo', type: TYPES[18], units: 5 },
    ],
  },
  {
    name: 'Ford',
    cars: [
      { name: 'Puma', type: TYPES[3], units: 23253 },
      { name: 'Kuga', type: TYPES[11], units: 13172 }, // SUV
      { name: 'Fiesta', type: TYPES[1], units: 5153 },
      { name: 'Focus', type: TYPES[3], units: 1966 },
      { name: 'Mustang Mach-e', type: TYPES[12], units: 2496 }, // SUV
      { name: 'Tourneo Custom', type: TYPES[7], units: 975 },
      { name: 'Tourneo Connect', type: TYPES[4], units: 740 },
      { name: 'Ecosport', type: TYPES[10], units: 278 }, // SUV
      { name: 'S-Max', type: TYPES[7], units: 253 },
      { name: 'Explorer', type: TYPES[13], units: 171 }, // SUV
      { name: 'Galaxy', type: TYPES[7], units: 140 },
    ],
  },
  {
    name: 'Honda',
    cars: [
      { name: 'HR-V/e:NY1', type: TYPES[10], units: 1554 }, // SUV
      { name: 'Jazz', type: TYPES[2], units: 1206 },
      { name: 'Civic', type: TYPES[3], units: 1161 },
      { name: 'ZR-V', type: TYPES[11], units: 465 }, // SUV
      { name: 'CR-V', type: TYPES[12], units: 410 }, // SUV
      { name: 'E', type: TYPES[1], units: 85 },
    ],
  },
  {
    name: 'Hyundai',
    cars: [
      { name: 'Tucson', type: TYPES[11], units: 18604 }, // SUV
      { name: 'Kona', type: TYPES[10], units: 12132 }, // SUV
      { name: 'i20', type: TYPES[1], units: 6741 },
      { name: 'Bayon', type: TYPES[10], units: 3970 }, // SUV
      { name: 'i10', type: TYPES[0], units: 2241 },
      { name: 'Ioniq 5', type: TYPES[3], units: 1826 },
      { name: 'Santa Fe', type: TYPES[12], units: 1640 }, // SUV
      { name: 'Ioniq 6', type: TYPES[6], units: 1103 },
      { name: 'i30', type: TYPES[6], units: 925 },
      { name: 'Ioniq', type: TYPES[3], units: 10 },
      { name: 'Nexo', type: TYPES[12], units: 6 },
    ],
  },
  {
    name: 'Jaguar',
    cars: [
      { name: 'E-Pace', type: TYPES[11], units: 678 }, // SUV
      { name: 'F-Pace', type: TYPES[12], units: 238 }, // SUV
      { name: 'I-Pace', type: TYPES[12], units: 48 }, // SUV
      { name: 'XE', type: TYPES[6], units: 21 },
      { name: 'F-Type', type: TYPES[17], units: 13 },
      { name: 'XF', type: TYPES[8], units: 10 },
    ],
  },
  {
    name: 'Jeep',
    cars: [
      { name: 'Compass', type: TYPES[11], units: 2875 }, // SUV
      { name: 'Avenger', type: TYPES[10], units: 2161 }, // SUV
      { name: 'Renegade', type: TYPES[10], units: 1655 }, // SUV
      { name: 'Wrangler', type: TYPES[12], units: 536 }, // SUV
      { name: 'Grand Cherokee', type: TYPES[13], units: 225 }, // SUV
    ],
  },
  {
    name: 'Kia',
    cars: [
      { name: 'Sportage', type: TYPES[11], units: 13407 }, // SUV
      { name: 'Niro', type: TYPES[11], units: 9294 }, // SUV
      { name: 'Picanto', type: TYPES[0], units: 6483 },
      { name: 'Stonic', type: TYPES[3], units: 4848 },
      { name: 'Rio', type: TYPES[1], units: 4665 },
      { name: 'EV6', type: TYPES[6], units: 3062 },
      { name: 'Ceed', type: TYPES[3], units: 2916 },
      { name: 'XCeed', type: TYPES[11], units: 1743 }, // SUV
      { name: 'Sorento', type: TYPES[12], units: 1509 }, // SUV
      { name: 'Proceed', type: TYPES[6], units: 920 },
      { name: 'EV9', type: TYPES[13], units: 204 }, // SUV
      { name: 'Soul', type: TYPES[5], units: 140 }, // SUV
    ],
  },
  {
    name: 'Lamborghini',
    cars: [
      { name: 'Urus', type: TYPES[13], units: 66 }, // SUV
      { name: 'Huracan', type: TYPES[17], units: 58 },
    ],
  },
  {
    name: 'Land Rover',
    cars: [
      { name: 'Range Sport', type: TYPES[13], units: 1968 }, // SUV
      { name: 'Evoque', type: TYPES[10], units: 1720 }, // SUV
      { name: 'Range Rover', type: TYPES[13], units: 999 }, // SUV
      { name: 'Defender', type: TYPES[11], units: 850 }, // SUV
      { name: 'Discovery Sport', type: TYPES[12], units: 806 }, // SUV
      { name: 'Velar', type: TYPES[12], units: 567 }, // SUV
      { name: 'Discovery', type: TYPES[13], units: 7 }, // SUV
    ],
  },
  {
    name: 'Lexus',
    cars: [
      { name: 'NX', type: TYPES[12], units: 2491 }, // SUV
      { name: 'UX', type: TYPES[11], units: 1674 }, // SUV
      { name: 'ES', type: TYPES[8], units: 949 },
      { name: 'RX', type: TYPES[12], units: 484 }, // SUV
      { name: 'RZ', type: TYPES[12], units: 59 }, // SUV
      { name: 'LC', type: TYPES[17], units: 9 },
      { name: 'LS', type: TYPES[9], units: 5 },
      { name: 'LM', type: TYPES[7], units: 4 },
    ],
  },
  {
    name: 'Lotus',
    cars: [
      { name: 'Eletre', type: TYPES[13], units: 124 }, // SUV
      { name: 'Emira', type: TYPES[17], units: 21 },
    ],
  },
  {
    name: 'Maserati',
    cars: [
      { name: 'Grecale', type: TYPES[12], units: 128 }, // SUV
      { name: 'MC20', type: TYPES[17], units: 20 },
      { name: 'Levante', type: TYPES[13], units: 13 },
      { name: 'Granturismo', type: TYPES[17], units: 13 },
      { name: 'Ghibli', type: TYPES[8], units: 12 },
      { name: 'Quattroporte', type: TYPES[9], units: 1 },
    ],
  },
  {
    name: 'Mazda',
    cars: [
      { name: 'CX-30', type: TYPES[11], units: 2377 }, // SUV
      { name: '2', type: TYPES[1], units: 2093 },
      { name: 'CX-60', type: TYPES[12], units: 1732 }, // SUV
      { name: '3', type: TYPES[3], units: 1627 },
      { name: 'MX-5', type: TYPES[17], units: 932 },
      { name: 'MX-30', type: TYPES[11], units: 687 }, // SUV
      { name: 'CX-5', type: TYPES[11], units: 647 },
      { name: '6', type: TYPES[6], units: 1 },
    ],
  },
  {
    name: 'McLaren',
    cars: [
      { name: 'Artura', type: TYPES[17], units: 17 },
      { name: 'GT', type: TYPES[17], units: 5 },
      { name: '720S', type: TYPES[17], units: 4 },
      { name: '765 LT', type: TYPES[17], units: 1 },
      { name: '750S', type: TYPES[17], units: 1 },
    ],
  },
];