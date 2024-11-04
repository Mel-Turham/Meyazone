import {
  brain_1,
  brain_2,
  brain_3,
  brain_4,
  brain_5,
  brain_6,
  user_1,
  user_2,
  user_3,
  user_4,
  user_5,
  user_6,
  user_7,
  user_8,
} from '@/public';
import { Department, ImageType, UsersType, Category, BlogPost } from '@/types';

const CategroryLinks = [
  {
    link: 'Best Deals',
    href: '#',
  },
  {
    link: 'TV & Video',
    href: '#',
  },
  {
    link: 'Cameras',
    href: '#',
  },
  {
    link: 'Audio',
    href: '#',
  },
  {
    link: 'Smartphones',
    href: '#',
  },
  {
    link: 'Gps & Navi',
    href: '#',
  },
  {
    link: 'Computers',
    href: '#',
  },
  {
    link: 'Portable audio',
    href: '#',
  },
  {
    link: 'Accessories',
    href: '#',
  },
];

const users: UsersType[] = [
  {
    userId: 1,
    userName: 'Liam Turner',
    userImage: user_1,
    userFeedback:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
  },
  {
    userId: 2,
    userName: 'Alex Smith',
    userImage: user_2,
    userFeedback:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
  },
  {
    userId: 3,
    userName: 'Taylor Laurent',
    userImage: user_3,
    userFeedback:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
  },
  {
    userId: 4,
    userName: 'Casey Rossi',
    userImage: user_4,
    userFeedback:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
  },
  {
    userId: 5,
    userName: 'Mel Turham',
    userImage: user_5,
    userFeedback:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
  },
  {
    userId: 6,
    userName: 'Willam',
    userImage: user_6,
    userFeedback:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
  },
  {
    userId: 7,
    userName: 'Sara',
    userImage: user_7,
    userFeedback:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
  },
  {
    userId: 8,
    userName: 'John Doe',
    userImage: user_8,
    userFeedback:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
  },
  {
    userId: 9,
    userName: 'Melvine',
    userImage: user_1,
    userFeedback:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
  },
  {
    userId: 10,
    userName: 'Manuella',
    userImage: user_3,
    userFeedback:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
  },
];

const BrandsImages: ImageType[] = [
  {
    id: 1,
    imageName: brain_1,
  },
  {
    id: 2,
    imageName: brain_2,
  },
  {
    id: 3,
    imageName: brain_3,
  },
  {
    id: 4,
    imageName: brain_4,
  },
  {
    id: 5,
    imageName: brain_5,
  },
  {
    id: 6,
    imageName: brain_6,
  },
];

const departments: Department[] = [
  {
    id: 1,
    name: 'Value of the Day',
  },
  {
    id: 2,
    name: 'Top 100 Offers',
  },
  {
    id: 3,
    name: 'New Arrivals',
  },
  {
    id: 4,
    name: 'Computers & Accessories',
    bgImage: '/images/computers-accessories-bg.jpg', // Image de fond pour hover
    megaMenu: [
      {
        id: 1,
        categoryName: 'Computers & Accessories',
        links: [
          { id: 1, label: 'All Computers & Accessories' },
          { id: 2, label: 'Laptops, Desktops & Monitors' },
          { id: 3, label: 'Printers & Ink' },
          { id: 4, label: 'Networking & Internet Devices' },
          { id: 5, label: 'Computer Accessories' },
          { id: 6, label: 'Software' },
        ],
      },
      {
        id: 2,
        categoryName: 'Office & Stationery',
        links: [
          { id: 1, label: 'All Office & Stationery' },
          { id: 2, label: 'All Computers & Accessories' },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Cameras, Audio & Video',
    bgImage: '/images/cameras-audio-video-bg.jpg', // Image de fond pour hover
    megaMenu: [
      {
        id: 1,
        categoryName: 'Cameras & Photography',
        links: [
          { id: 1, label: 'Lenses' },
          { id: 2, label: 'Camera Accessories' },
          { id: 3, label: 'Security & Surveillance' },
          { id: 4, label: 'Binoculars & Telescopes' },
          { id: 5, label: 'Camcorders' },
        ],
      },
      {
        id: 2,
        categoryName: 'Audio & Video',
        links: [
          { id: 1, label: 'All Video & Audio' },
          { id: 2, label: 'Headphones & Speakers' },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Mobiles & Tablets',
    bgImage: '/images/mobiles-tablets-bg.jpg', // Image de fond pour hover
    megaMenu: [
      {
        id: 1,
        categoryName: 'Mobiles & Tablets',
        links: [
          { id: 1, label: 'All Mobile Phones' },
          { id: 2, label: 'Smartphones' },
          { id: 3, label: 'Refurbished Mobiles' },
        ],
      },
    ],
  },
];

// fake db

const categories: Category[] = [
  {
    id: 1,
    name: 'Électronique',
    image: '/product-102.png',
    subCategories: [
      {
        id: 101,
        name: 'Smartphones',
        image: '/product-87.png',
        products: [
          {
            id: 1001,
            name: 'iPhone 14 Pro Max',
            image: '/product-88.png',
            subImages: ['', ''],
            stock: 50,
            oldPrice: 1299,
            price: 1199,
            details:
              "Le dernier modèle d'iPhone avec la puce A16 Bionic et un écran Super Retina XDR.",
            specifications: {
              brand: 'Apple',
              screenSize: '6.7 pouces',
              storage: '256 Go',
              camera: '48 MP',
              battery: '4323 mAh',
              os: 'iOS 16',
            },
            createdAt: '2023-09-15T10:00:00Z',
            ratings: {
              average: 4.8,
              count: 1250,
            },
          },

          {
            id: 1901,
            name: 'Samsung Galaxy S23 Ultra',
            image: '/sam1.webp',
            subImages: ['', ''],
            stock: 45,
            oldPrice: 1399,
            price: 1299,
            details:
              'Flagship Samsung smartphone with S Pen support and advanced camera system.',
            specifications: {
              brand: 'Samsung',
              screenSize: '6.8 pouces',
              storage: '512 Go',
              camera: '200 MP',
              battery: '5000 mAh',
              os: 'Android 13',
            },
            createdAt: '2023-02-17T09:00:00Z',
            ratings: {
              average: 4.7,
              count: 980,
            },
          },
          {
            id: 1902,
            name: 'Google Pixel 7 Pro',
            image: '/product-90.png',
            subImages: ['', ''],
            stock: 30,
            oldPrice: 999,
            price: 899,
            details:
              "Google's premium smartphone with advanced AI capabilities and excellent camera performance.",
            specifications: {
              brand: 'Google',
              screenSize: '6.7 pouces',
              storage: '256 Go',
              camera: '50 MP',
              battery: '5000 mAh',
              os: 'Android 13',
            },
            createdAt: '2022-10-06T14:30:00Z',
            ratings: {
              average: 4.6,
              count: 750,
            },
          },
          {
            id: 1903,
            name: 'OnePlus 11',
            image: '/product-89.png',
            subImages: ['', ''],
            stock: 35,
            oldPrice: 899,
            price: 799,
            details:
              'Powerful OnePlus flagship with Hasselblad camera system and fast charging.',
            specifications: {
              brand: 'OnePlus',
              screenSize: '6.7 pouces',
              storage: '256 Go',
              camera: '50 MP',
              battery: '5000 mAh',
              os: 'OxygenOS 13',
            },
            createdAt: '2023-01-04T11:15:00Z',
            ratings: {
              average: 4.5,
              count: 620,
            },
          },
          {
            id: 1904,
            name: 'Xiaomi 13 Pro',
            image: '/product-93.png',
            subImages: ['', ''],
            stock: 40,
            oldPrice: 1099,
            price: 999,
            details:
              "Xiaomi's premium offering with Leica optics and high-end specifications.",
            specifications: {
              brand: 'Xiaomi',
              screenSize: '6.73 pouces',
              storage: '512 Go',
              camera: '50 MP',
              battery: '4820 mAh',
              os: 'MIUI 14',
            },
            createdAt: '2022-12-11T16:45:00Z',
            ratings: {
              average: 4.4,
              count: 480,
            },
          },
          {
            id: 1905,
            name: 'Sony Xperia 1 V',
            image: '/product-92.png',
            subImages: ['', ''],
            stock: 25,
            oldPrice: 1399,
            price: 1299,
            details:
              "Sony's flagship with professional-grade camera features and 4K display.",
            specifications: {
              brand: 'Sony',
              screenSize: '6.5 pouces',
              storage: '256 Go',
              camera: '48 MP',
              battery: '5000 mAh',
              os: 'Android 13',
            },
            createdAt: '2023-05-24T10:30:00Z',
            ratings: {
              average: 4.3,
              count: 320,
            },
          },
          {
            id: 1906,
            name: 'Asus ROG Phone 7 Ultimate',
            image: '/product-94.png',
            subImages: ['', ''],
            stock: 20,
            oldPrice: 1499,
            price: 1399,
            details:
              'Ultimate gaming smartphone with advanced cooling system and high refresh rate display.',
            specifications: {
              brand: 'Asus',
              screenSize: '6.78 pouces',
              storage: '512 Go',
              camera: '50 MP',
              battery: '6000 mAh',
              os: 'Android 13',
            },
            createdAt: '2023-04-13T13:00:00Z',
            ratings: {
              average: 4.6,
              count: 280,
            },
          },
          {
            id: 1907,
            name: 'Oppo Find X6 Pro',
            image: '/product-91.png',
            subImages: [],
            stock: 30,
            oldPrice: 1199,
            price: 1099,
            details:
              "Oppo's high-end smartphone with versatile camera system and fast charging capabilities.",
            specifications: {
              brand: 'Oppo',
              screenSize: '6.82 pouces',
              storage: '512 Go',
              camera: '50 MP',
              battery: '5000 mAh',
              os: 'ColorOS 13',
            },
            createdAt: '2023-03-21T15:45:00Z',
            ratings: {
              average: 4.5,
              count: 410,
            },
          },
          {
            id: 1908,
            name: 'Motorola Edge 40 Pro',
            image: '/redmi.webp',
            subImages: ['', ''],
            stock: 35,
            oldPrice: 999,
            price: 899,
            details:
              "Motorola's flagship with curved display and impressive camera capabilities.",
            specifications: {
              brand: 'Motorola',
              screenSize: '6.67 pouces',
              storage: '256 Go',
              camera: '50 MP',
              battery: '4600 mAh',
              os: 'Android 13',
            },
            createdAt: '2023-04-04T12:15:00Z',
            ratings: {
              average: 4.4,
              count: 350,
            },
          },
        ],
      },
      {
        id: 102,
        name: 'Télévisions',
        image: '/product-28.png',
        products: [
          {
            id: 1022,
            name: 'LG OLED C1 65 pouces',
            image: '/product-28.png',
            subImages: ['', ''],
            stock: 25,
            oldPrice: 2499,
            price: 2199,
            details:
              'TV OLED 4K avec processeur α9 Gen4 AI et Dolby Vision IQ.',
            specifications: {
              brand: 'LG',
              screenSize: '65 pouces',
              resolution: '4K OLED',
              smartFeatures: 'webOS, ThinQ AI, Apple AirPlay 2',
              ports: '4 HDMI 2.1, 3 USB',
            },
            createdAt: '2023-06-15T14:45:00Z',
            ratings: {
              average: 4.8,
              count: 1200,
            },
          },
          {
            id: 1023,
            name: 'Sony Bravia XR A80J 55 pouces',
            image: '/product-27.png',
            subImages: ['', ''],
            stock: 20,
            oldPrice: 1799,
            price: 1599,
            details:
              'TV OLED 4K avec processeur cognitif XR et Acoustic Surface Audio+.',
            specifications: {
              brand: 'Sony',
              screenSize: '55 pouces',
              resolution: '4K OLED',
              smartFeatures: 'Google TV, Chromecast built-in, Apple AirPlay',
              ports: '4 HDMI (2 HDMI 2.1), 3 USB',
            },
            createdAt: '2023-05-20T11:30:00Z',
            ratings: {
              average: 4.7,
              count: 950,
            },
          },
          {
            id: 1024,
            name: 'TCL 6-Series 75 pouces',
            image: '/product-11.png',
            subImages: ['', ''],
            stock: 15,
            oldPrice: 1499,
            price: 1299,
            details: 'TV QLED 4K avec Mini-LED et contrôle vocal mains libres.',
            specifications: {
              brand: 'TCL',
              screenSize: '75 pouces',
              resolution: '4K QLED',
              smartFeatures: 'Roku TV, Amazon Alexa, Google Assistant',
              ports: '4 HDMI 2.1, 1 USB',
            },
            createdAt: '2023-07-05T09:15:00Z',
            ratings: {
              average: 4.5,
              count: 780,
            },
          },
          {
            id: 1025,
            name: 'Hisense U8G 55 pouces',
            image: '/product-31.png',
            subImages: ['', ''],
            stock: 35,
            oldPrice: 999,
            price: 849,
            details: 'TV ULED 4K avec Quantum Dot et Full Array Local Dimming.',
            specifications: {
              brand: 'Hisense',
              screenSize: '55 pouces',
              resolution: '4K ULED',
              smartFeatures:
                'Android TV, Chromecast built-in, Google Assistant',
              ports: '4 HDMI (2 HDMI 2.1), 2 USB',
            },
            createdAt: '2023-04-10T16:20:00Z',
            ratings: {
              average: 4.4,
              count: 620,
            },
          },
          {
            id: 1026,
            name: 'Vizio P-Series Quantum X 85 pouces',
            image: '/product-64.png',
            subImages: ['', ''],
            stock: 10,
            oldPrice: 2999,
            price: 2699,
            details: 'TV QLED 4K avec Local Dimming à 384 zones et HDR1400.',
            specifications: {
              brand: 'Vizio',
              screenSize: '85 pouces',
              resolution: '4K QLED',
              smartFeatures: 'SmartCast, Apple AirPlay 2, Chromecast built-in',
              ports: '4 HDMI 2.1, 1 USB',
            },
            createdAt: '2023-03-25T13:40:00Z',
            ratings: {
              average: 4.6,
              count: 450,
            },
          },
          {
            id: 1027,
            name: 'Philips 8000 series 50 pouces',
            image: '/product-5.png',
            subImages: ['', ''],
            stock: 40,
            oldPrice: 799,
            price: 699,
            details: 'TV LED 4K avec Ambilight 3 côtés et HDR10+.',
            specifications: {
              brand: 'Philips',
              screenSize: '50 pouces',
              resolution: '4K LED',
              smartFeatures:
                'Android TV, Google Assistant, Chromecast built-in',
              ports: '4 HDMI, 2 USB',
            },
            createdAt: '2023-08-01T10:50:00Z',
            ratings: {
              average: 4.3,
              count: 580,
            },
          },
        ],
      },
      {
        id: 103,
        name: 'Ordinateurs',
        image: '/product-6.png',
        products: [
          {
            id: 1031,
            name: 'Ordinateur portable ultrabook',
            image: '/product-2.png',
            subImages: ['', ''],
            stock: 25,
            oldPrice: 1499,
            price: 1299,
            details:
              'Ordinateur portable fin et léger avec processeur haute performance.',
            specifications: {
              brand: 'Dell',
              processor: 'Intel Core i7',
              ram: '16 Go',
              storage: '512 Go SSD',
              screenSize: '13.3 pouces',
              os: 'Windows 11',
            },
            createdAt: '2023-06-05T11:45:00Z',
            ratings: {
              average: 4.7,
              count: 620,
            },
          },
          {
            id: 1032,
            name: 'Dell XPS 13',
            image: '/product-3.png',
            subImages: ['', ''],
            stock: 30,
            oldPrice: 1599,
            price: 1399,
            details:
              'Ultrabook haut de gamme avec écran InfinityEdge et performances exceptionnelles.',
            specifications: {
              brand: 'Dell',
              processor: 'Intel Core i7-1165G7',
              ram: '16 Go',
              storage: '512 Go SSD',
              screenSize: '13.4 pouces',
              os: 'Windows 11',
            },
            createdAt: '2023-07-15T10:30:00Z',
            ratings: {
              average: 4.8,
              count: 750,
            },
          },
          {
            id: 5032,
            name: 'MacBook Air M2',
            image: '/product-95.png',
            subImages: ['', ''],
            stock: 25,
            price: 1199,
            details:
              'Le MacBook Air le plus fin et le plus léger, maintenant avec la puce M2.',
            specifications: {
              brand: 'Apple',
              processor: 'Apple M2',
              ram: '8 Go',
              storage: '256 Go SSD',
              screenSize: '13.6 pouces',
              os: 'macOS',
            },
            createdAt: '2023-08-01T14:45:00Z',
            ratings: {
              average: 4.9,
              count: 620,
            },
          },
          {
            id: 1033,
            name: 'Lenovo ThinkPad X1 Carbon',
            image: '/product-96.png',
            subImages: ['', ''],
            stock: 20,
            oldPrice: 1799,
            price: 1599,
            details:
              'Ordinateur portable professionnel ultra-léger avec une excellente autonomie.',
            specifications: {
              brand: 'Lenovo',
              processor: 'Intel Core i7-1165G7',
              ram: '16 Go',
              storage: '1 To SSD',
              screenSize: '14 pouces',
              os: 'Windows 11 Pro',
            },
            createdAt: '2023-06-20T09:15:00Z',
            ratings: {
              average: 4.7,
              count: 480,
            },
          },

          {
            id: 1048,
            name: 'HP Spectre x360',
            image: '/product-36.png',
            subImages: ['', ''],
            stock: 15,
            oldPrice: 1499,
            price: 1299,
            details:
              'Ordinateur portable convertible haut de gamme avec écran tactile OLED.',
            specifications: {
              brand: 'HP',
              processor: 'Intel Core i7-1165G7',
              ram: '16 Go',
              storage: '1 To SSD',
              screenSize: '13.5 pouces',
              os: 'Windows 11',
            },
            createdAt: '2023-08-10T13:15:00Z',
            ratings: {
              average: 4.7,
              count: 410,
            },
          },
          {
            id: 1049,
            name: 'ASUS ROG Zephyrus G14',
            image: '/product-8.png',
            subImages: ['', ''],
            stock: 20,
            price: 1499,
            details:
              'Ordinateur portable de jeu compact et puissant avec écran haute fréquence.',
            specifications: {
              brand: 'ASUS',
              processor: 'AMD Ryzen 9 5900HS',
              ram: '32 Go',
              storage: '1 To SSD',
              screenSize: '14 pouces',
              os: 'Windows 11',
            },
            createdAt: '2023-07-22T16:40:00Z',
            ratings: {
              average: 4.8,
              count: 560,
            },
          },
          {
            id: 1050,
            name: 'Microsoft Surface Laptop 4',
            image: '/product-7.png',
            subImages: ['', ''],
            stock: 25,
            oldPrice: 1299,
            price: 1099,
            details:
              'Ordinateur portable élégant avec écran tactile PixelSense et clavier Alcantara.',
            specifications: {
              brand: 'Microsoft',
              processor: 'AMD Ryzen 5 4680U',
              ram: '8 Go',
              storage: '256 Go SSD',
              screenSize: '13.5 pouces',
              os: 'Windows 11',
            },
            createdAt: '2023-06-30T09:50:00Z',
            ratings: {
              average: 4.6,
              count: 380,
            },
          },
          {
            id: 1047,
            name: 'Acer Swift 3',
            image: '/product-99.png',
            subImages: ['g', 'g'],
            stock: 40,
            price: 699,
            details:
              'Ordinateur portable abordable avec de bonnes performances pour une utilisation quotidienne.',
            specifications: {
              brand: 'Acer',
              processor: 'AMD Ryzen 5 5500U',
              ram: '8 Go',
              storage: '512 Go SSD',
              screenSize: '14 pouces',
              os: 'Windows 11',
            },
            createdAt: '2023-09-05T11:20:00Z',
            ratings: {
              average: 4.3,
              count: 320,
            },
          },
        ],
      },
      {
        id: 104,
        name: 'Audio',
        image: '/product-68.png',
        products: [
          {
            id: 1042,
            name: 'Écouteurs intra-auriculaires sans fil',
            image: '/product-68.png',
            subImages: ['', ''],
            stock: 75,
            price: 199,
            details:
              'Écouteurs true wireless avec un son immersif et une excellente autonomie.',
            specifications: {
              brand: 'Apple',
              type: 'In-ear',
              batteryLife: '24 heures (avec boîtier)',
              connectivity: 'Bluetooth 5.0',
              waterResistance: 'IPX4',
            },
            createdAt: '2023-08-10T09:15:00Z',
            ratings: {
              average: 4.8,
              count: 1250,
            },
          },
          {
            id: 1043,
            name: 'Enceinte Bluetooth portable',
            image: '/product-67.png',
            subImages: ['', ''],
            stock: 60,
            oldPrice: 149,
            price: 129,
            details:
              'Enceinte portable robuste avec un son puissant et une batterie longue durée.',
            specifications: {
              brand: 'JBL',
              type: 'Portable',
              batteryLife: '20 heures',
              connectivity: 'Bluetooth 5.1',
              waterproofRating: 'IPX7',
            },
            createdAt: '2023-06-05T14:30:00Z',
            ratings: {
              average: 4.6,
              count: 890,
            },
          },
          {
            id: 1044,
            name: 'Barre de son avec caisson de basses',
            image: '/product-65.png',
            subImages: ['	', ''],
            stock: 30,
            price: 399,
            details:
              'Barre de son 3.1 canaux avec caisson de basses sans fil pour un son home cinéma immersif.',
            specifications: {
              brand: 'Samsung',
              channels: '3.1',
              totalPower: '340W',
              connectivity: 'HDMI, Bluetooth, Wi-Fi',
              dolbyAtmos: 'Compatible',
            },
            createdAt: '2023-07-20T11:45:00Z',
            ratings: {
              average: 4.5,
              count: 620,
            },
          },
          {
            id: 1045,
            name: 'Platine vinyle Bluetooth',
            image: '/product-63.png',
            subImages: ['', ''],
            stock: 25,
            oldPrice: 299,
            price: 249,
            details:
              'Platine vinyle avec connectivité Bluetooth pour une écoute sans fil de vos disques préférés.',
            specifications: {
              brand: 'Audio-Technica',
              driveMechanism: 'Courroie',
              speeds: '33-1/3, 45 RPM',
              connectivity: 'Bluetooth, RCA',
              builtInPreamp: 'Oui',
            },
            createdAt: '2023-05-15T16:20:00Z',
            ratings: {
              average: 4.4,
              count: 380,
            },
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Mode',
    image: '/product-15.png',
    subCategories: [
      {
        id: 201,
        name: 'Vêtements',
        image: '/product-50.png',
        products: [
          {
            id: 2001,
            name: 'T-shirt en coton',
            image: '/product-50.png',
            subImages: [],
            stock: 100,
            oldPrice: 29,
            price: 19,
            details:
              'T-shirt en coton 100%, disponible en plusieurs tailles et couleurs.',
            createdAt: '2023-08-20T14:30:00Z',
            ratings: {
              average: 4.3,
              count: 520,
            },
          },
          {
            id: 2002,
            name: 'Pull-over en laine mérinos',
            image: '/product-10.png',
            subImages: ['', ''],
            stock: 75,
            oldPrice: 129,
            price: 99,
            details:
              "Pull-over doux et chaud en laine mérinos, parfait pour l'hiver.",
            specifications: {
              material: '100% laine mérinos',
              fit: 'Regular fit',
              care: 'Lavage à la main',
              origin: 'Fabriqué en Italie',
            },
            createdAt: '2023-09-15T10:30:00Z',
            ratings: {
              average: 4.7,
              count: 320,
            },
          },
          {
            id: 2003,
            name: 'Pull-over à col roulé en cachemire',
            image: '/product-11.png',
            subImages: ['', ''],
            stock: 50,
            oldPrice: 199,
            price: 159,
            details:
              'Pull-over luxueux en cachemire avec col roulé pour un style élégant.',
            specifications: {
              material: '100% cachemire',
              fit: 'Slim fit',
              care: 'Nettoyage à sec recommandé',
              origin: 'Fabriqué en Écosse',
            },
            createdAt: '2023-08-28T14:45:00Z',
            ratings: {
              average: 4.9,
              count: 180,
            },
          },
          {
            id: 2004,
            name: 'Pull-over à motif jacquard',
            image: '/product-12.png',
            subImages: ['', ''],
            stock: 60,
            price: 79,
            details:
              'Pull-over avec motif jacquard nordique, parfait pour les fêtes.',
            specifications: {
              material: '80% laine, 20% polyamide',
              fit: 'Regular fit',
              care: 'Lavage en machine à 30°C',
              origin: 'Fabriqué en Norvège',
            },
            createdAt: '2023-10-05T09:15:00Z',
            ratings: {
              average: 4.5,
              count: 240,
            },
          },
          {
            id: 2005,
            name: 'Pull-over en coton bio à col V',
            image: '/product-13.png',
            subImages: ['', ''],
            stock: 90,
            oldPrice: 69,
            price: 59,
            details:
              'Pull-over léger en coton bio avec col V, idéal pour la mi-saison.',
            specifications: {
              material: '100% coton biologique',
              fit: 'Relaxed fit',
              care: 'Lavage en machine à 40°C',
              origin: 'Fabriqué au Portugal',
            },
            createdAt: '2023-07-20T11:30:00Z',
            ratings: {
              average: 4.4,
              count: 410,
            },
          },
          {
            id: 2006,
            name: 'Pull-over oversize en mohair',
            image: '/product-14.png',
            subImages: ['', ''],
            stock: 40,
            price: 139,
            details:
              'Pull-over oversize doux et moelleux en mohair pour un look tendance.',
            specifications: {
              material: '70% mohair, 30% polyamide',
              fit: 'Oversize',
              care: 'Lavage à la main',
              origin: 'Fabriqué en France',
            },
            createdAt: '2023-09-02T16:20:00Z',
            ratings: {
              average: 4.6,
              count: 150,
            },
          },
          {
            id: 2007,
            name: 'Pull-over en maille torsadée',
            image: '/product-15.png',
            subImages: ['', ''],
            stock: 70,
            oldPrice: 89,
            price: 75,
            details:
              'Pull-over classique en maille torsadée, chaud et confortable.',
            specifications: {
              material: '100% coton',
              fit: 'Regular fit',
              care: 'Lavage en machine à 30°C',
              origin: 'Fabriqué en Irlande',
            },
            createdAt: '2023-08-10T13:45:00Z',
            ratings: {
              average: 4.3,
              count: 280,
            },
          },
          {
            id: 2008,
            name: 'Pull-over en alpaga à col châle',
            image: '/product-16.png',
            subImages: ['.jpg', '.jpg'],
            stock: 35,
            price: 179,
            details:
              'Pull-over luxueux en alpaga avec col châle, doux et chaleureux.',
            specifications: {
              material: '100% alpaga',
              fit: 'Regular fit',
              care: 'Nettoyage à sec uniquement',
              origin: 'Fabriqué au Pérou',
            },
            createdAt: '2023-09-25T08:30:00Z',
            ratings: {
              average: 4.8,
              count: 95,
            },
          },
          {
            id: 2009,
            name: 'Pull-over en laine recyclée à motifs géométriques',
            image: '/product-17.png',
            subImages: ['', ''],
            stock: 55,
            oldPrice: 109,
            price: 89,
            details:
              'Pull-over éco-responsable en laine recyclée avec motifs géométriques modernes.',
            specifications: {
              material: '80% laine recyclée, 20% polyester recyclé',
              fit: 'Slim fit',
              care: 'Lavage en machine à 30°C, cycle délicat',
              origin: 'Fabriqué en Espagne',
            },
            createdAt: '2023-10-12T15:00:00Z',
            ratings: {
              average: 4.5,
              count: 130,
            },
          },
          {
            id: 2018,
            name: "Pull-over en laine d'agneau à col châle",
            image: '/product-18.png',
            subImages: ['', ''],
            stock: 55,
            oldPrice: 149,
            price: 129,
            details:
              "Pull-over chaud et doux en laine d'agneau avec un élégant col châle.",
            specifications: {
              material: "100% laine d'agneau",
              fit: 'Regular fit',
              care: 'Nettoyage à sec recommandé',
              origin: 'Fabriqué en Irlande',
            },
            createdAt: '2023-09-22T10:15:00Z',
            ratings: {
              average: 4.6,
              count: 180,
            },
          },
          {
            id: 2019,
            name: 'Pull-over en coton à motif aran',
            image: '/product-19.png',
            subImages: ['', ''],
            stock: 70,
            price: 89,
            details:
              'Pull-over en coton avec motif aran traditionnel, parfait pour toutes les saisons.',
            specifications: {
              material: '100% coton',
              fit: 'Relaxed fit',
              care: 'Lavage en machine à 30°C',
              origin: 'Fabriqué au Portugal',
            },
            createdAt: '2023-08-30T14:30:00Z',
            ratings: {
              average: 4.4,
              count: 220,
            },
          },
          {
            id: 2020,
            name: 'Pull-over en cachemire à col roulé fin',
            image: '/product-39.png',
            subImages: ['', ''],
            stock: 40,
            oldPrice: 199,
            price: 169,
            details:
              'Pull-over léger en cachemire avec col roulé fin, idéal pour un look élégant.',
            specifications: {
              material: '100% cachemire',
              fit: 'Slim fit',
              care: 'Lavage à la main',
              origin: 'Fabriqué en Écosse',
            },
            createdAt: '2023-10-05T09:45:00Z',
            ratings: {
              average: 4.8,
              count: 150,
            },
          },
          {
            id: 2021,
            name: 'Pull-over en laine mérinos à motif fair isle',
            image: '/product-48.png',
            subImages: ['', ''],
            stock: 60,
            price: 139,
            details:
              'Pull-over en laine mérinos avec motif fair isle traditionnel, chaud et stylé.',
            specifications: {
              material: '100% laine mérinos',
              fit: 'Regular fit',
              care: 'Lavage en machine à 30°C, cycle laine',
              origin: 'Fabriqué en Norvège',
            },
            createdAt: '2023-09-18T11:20:00Z',
            ratings: {
              average: 4.7,
              count: 190,
            },
          },
          {
            id: 2022,
            name: 'Pull-over en alpaga à col V profond',
            image: '/product-50.png',
            subImages: ['', ''],
            stock: 45,
            oldPrice: 179,
            price: 149,
            details:
              'Pull-over luxueux en alpaga avec un col V profond pour un look sophistiqué.',
            specifications: {
              material: '100% alpaga',
              fit: 'Relaxed fit',
              care: 'Nettoyage à sec uniquement',
              origin: 'Fabriqué au Pérou',
            },
            createdAt: '2023-10-12T15:30:00Z',
            ratings: {
              average: 4.5,
              count: 120,
            },
          },
          {
            id: 2023,
            name: 'Pull-over en coton bio à rayures bretonnes',
            image: '/product-51.png',
            subImages: ['', ''],
            stock: 80,
            price: 79,
            details:
              'Pull-over classique en coton bio avec rayures bretonnes, parfait pour un style marin.',
            specifications: {
              material: '100% coton biologique',
              fit: 'Regular fit',
              care: 'Lavage en machine à 40°C',
              origin: 'Fabriqué en France',
            },
            createdAt: '2023-08-25T13:10:00Z',
            ratings: {
              average: 4.3,
              count: 250,
            },
          },
          {
            id: 2024,
            name: 'Pull-over en mohair et soie à manches ballon',
            image: '/product-52.png',
            subImages: ['', ''],
            stock: 35,
            price: 159,
            details:
              'Pull-over doux et léger en mélange mohair et soie avec des manches ballon tendance.',
            specifications: {
              material: '70% mohair, 30% soie',
              fit: 'Oversized fit',
              care: 'Lavage à la main',
              origin: 'Fabriqué en Italie',
            },
            createdAt: '2023-10-20T16:45:00Z',
            ratings: {
              average: 4.6,
              count: 95,
            },
          },
        ],
      },
      {
        id: 202,
        name: 'Chaussures',
        image: '/product-29.png',
        products: [
          {
            id: 13934,
            name: 'Baskets éco-responsables unisexes',
            image: '/product-60.png',
            subImages: ['', ''],
            stock: 100,
            oldPrice: 129,
            price: 99,
            details:
              'Baskets légères et confortables fabriquées à partir de matériaux recyclés.',
            specifications: {
              brand: 'EcoStep',
              type: 'Sneakers',
              material: 'Polyester recyclé et caoutchouc naturel',
              sole: 'Caoutchouc recyclé',
              color: 'Gris/Blanc',
            },
            createdAt: '2023-06-15T10:20:00Z',
            ratings: {
              average: 4.7,
              count: 520,
            },
          },
          {
            id: 2022,
            name: 'Escarpins responsables à talon moyen',
            image: '/product-33.png',
            subImages: ['', ''],
            stock: 75,
            oldPrice: 159,
            price: 129,
            details:
              'Escarpins élégants fabriqués à partir de cuir végétal et de matériaux durables.',
            specifications: {
              brand: 'GreenGlam',
              type: 'Escarpins',
              material: 'Cuir végétal',
              sole: 'Caoutchouc naturel',
              color: 'Noir',
            },
            createdAt: '2023-07-02T14:30:00Z',
            ratings: {
              average: 4.5,
              count: 310,
            },
          },
          {
            id: 2023,
            name: 'Chaussures de ville éco-conçues',
            image: '/product-38.png',
            subImages: ['', ''],
            stock: 60,
            oldPrice: 189,
            price: 149,
            details:
              'Chaussures de ville élégantes et durables, fabriquées à partir de matériaux recyclés.',
            specifications: {
              brand: 'UrbanEco',
              type: 'Chaussures de ville',
              material: 'Cuir recyclé et tissu recyclé',
              sole: 'Caoutchouc naturel',
              color: 'Marron',
            },
            createdAt: '2023-05-20T09:45:00Z',
            ratings: {
              average: 4.6,
              count: 280,
            },
          },
          {
            id: 2024,
            name: 'Sandales à talons responsables',
            image: '/product-46.png',
            subImages: ['', ''],
            stock: 50,
            oldPrice: 139,
            price: 109,
            details:
              'Sandales à talons élégantes fabriquées à partir de matériaux durables et éthiques.',
            specifications: {
              brand: 'EcoChic',
              type: 'Sandales à talons',
              material: 'Liège et tissu recyclé',
              sole: 'Caoutchouc naturel',
              color: 'Beige',
            },
            createdAt: '2023-06-30T11:15:00Z',
            ratings: {
              average: 4.4,
              count: 190,
            },
          },
          {
            id: 2025,
            name: 'Mocassins unisexes éco-responsables',
            image: '/product-47.png',
            subImages: ['', ''],
            stock: 80,
            oldPrice: 149,
            price: 119,
            details:
              'Mocassins confortables et élégants fabriqués à partir de matériaux durables.',
            specifications: {
              brand: 'EcoComfort',
              type: 'Mocassins',
              material: 'Cuir végétal et coton biologique',
              sole: 'Caoutchouc recyclé',
              color: 'Bleu marine',
            },
            createdAt: '2023-07-10T13:40:00Z',
            ratings: {
              average: 4.8,
              count: 420,
            },
          },
          {
            id: 2026,
            name: 'Bottines à talons éco-conçues',
            image: '/product-56.png',
            subImages: ['', ''],
            stock: 40,
            oldPrice: 199,
            price: 169,
            details:
              'Bottines à talons élégantes fabriquées à partir de matériaux recyclés et durables.',
            specifications: {
              brand: 'GreenStep',
              type: 'Bottines à talons',
              material: 'Cuir recyclé',
              sole: 'Caoutchouc naturel',
              color: 'Bordeaux',
            },
            createdAt: '2023-08-05T15:20:00Z',
            ratings: {
              average: 4.6,
              count: 150,
            },
          },
          {
            id: 2027,
            name: 'Baskets de sport éco-performantes',
            image: '/product-47.png',
            subImages: ['', ''],
            stock: 90,
            oldPrice: 159,
            price: 129,
            details:
              'Baskets de sport haute performance fabriquées à partir de matériaux recyclés.',
            specifications: {
              brand: 'EcoAthletic',
              type: 'Chaussures de sport',
              material: 'Mesh recyclé et fibres naturelles',
              sole: 'Caoutchouc recyclé',
              color: 'Vert/Noir',
            },
            createdAt: '2023-07-25T08:50:00Z',
            ratings: {
              average: 4.7,
              count: 380,
            },
          },
          {
            id: 2028,
            name: 'Derbies responsables unisexes',
            image: '/product-38.png',
            subImages: ['', ''],
            stock: 70,
            oldPrice: 179,
            price: 149,
            details:
              'Derbies élégantes et durables, fabriquées à partir de matériaux éco-responsables.',
            specifications: {
              brand: 'EcoClassic',
              type: 'Derbies',
              material: 'Cuir tanné végétal',
              sole: 'Caoutchouc naturel',
              color: 'Cognac',
            },
            createdAt: '2023-08-15T10:30:00Z',
            ratings: {
              average: 4.5,
              count: 220,
            },
          },
        ],
      },

      {
        id: 203,
        name: 'Accessoires',
        image: '/product-26.png',
        products: [
          {
            id: 2031,
            name: 'Ceinture en cuir classique',
            image: '/product-26.png',
            subImages: [],
            stock: 40,
            price: 35,
            details:
              'Ceinture en cuir véritable, disponible en différentes tailles.',
            createdAt: '2023-03-30T08:55:00Z',
            ratings: {
              average: 4.6,
              count: 780,
            },
          },
          // Nouvelles montres
          {
            id: 2032,
            name: 'Montre connectée EcoSmart',
            image: '/product-22.png',
            subImages: ['', ''],
            stock: 50,
            price: 199,
            details:
              'Montre connectée avec boîtier en aluminium recyclé et bracelet en matériaux durables.',
            createdAt: '2023-09-15T10:30:00Z',
            ratings: { average: 4.7, count: 320 },
          },
          {
            id: 2033,
            name: 'Montre solaire GreenTime',
            image: '/product-23.png',
            subImages: ['', ''],
            stock: 30,
            price: 149,
            details: 'Montre à énergie solaire avec cadran en bois recyclé.',
            createdAt: '2023-08-20T14:45:00Z',
            ratings: { average: 4.5, count: 180 },
          },
          {
            id: 2034,
            name: 'Montre minimaliste EcoSlim',
            image: '/product-24.png',
            subImages: ['', ''],
            stock: 40,
            price: 129,
            details:
              'Montre au design épuré avec boîtier en acier inoxydable recyclé.',
            createdAt: '2023-07-10T09:15:00Z',
            ratings: { average: 4.6, count: 250 },
          },
          {
            id: 2035,
            name: 'Montre de sport EcoTrack',
            image: '/product-25.png',
            subImages: ['', ''],
            stock: 35,
            price: 179,
            details:
              "Montre de sport avec fonctions de suivi d'activité et bracelet en plastique océanique recyclé.",
            createdAt: '2023-09-05T11:30:00Z',
            ratings: { average: 4.8, count: 290 },
          },
          // Nouvelles ceintures
          {
            id: 2036,
            name: 'Ceinture tressée EcoFlex',
            image: '/product-26.png',
            subImages: ['', ''],
            stock: 60,
            price: 45,
            details:
              'Ceinture tressée élastique fabriquée à partir de matériaux recyclés.',
            createdAt: '2023-08-12T13:20:00Z',
            ratings: { average: 4.4, count: 150 },
          },
          {
            id: 2037,
            name: 'Ceinture en liège NatureBelt',
            image: '/product-20.png',
            subImages: ['', ''],
            stock: 45,
            price: 55,
            details:
              'Ceinture écologique en liège naturel avec boucle en métal recyclé.',
            createdAt: '2023-07-25T15:45:00Z',
            ratings: { average: 4.6, count: 180 },
          },
          {
            id: 2038,
            name: 'Ceinture réversible DualEco',
            image: '/product-26.png',
            subImages: ['', ''],
            stock: 50,
            price: 65,
            details:
              'Ceinture réversible en cuir végétal, deux couleurs en une.',
            createdAt: '2023-09-02T10:10:00Z',
            ratings: { average: 4.7, count: 210 },
          },
          {
            id: 2039,
            name: 'Ceinture en chanvre HempStyle',
            image: '/product-21.png',
            subImages: ['', ''],
            stock: 55,
            price: 40,
            details: 'Ceinture durable en chanvre avec boucle en bois recyclé.',
            createdAt: '2023-08-18T14:30:00Z',
            ratings: { average: 4.3, count: 130 },
          },
          // Nouveaux sacs à dos
          {
            id: 2040,
            name: 'Sac à dos urbain EcoCity',
            image: '/product-70.png',
            subImages: ['', ''],
            stock: 40,
            price: 89,
            details:
              'Sac à dos urbain en polyester recyclé avec compartiment pour ordinateur portable.',
            createdAt: '2023-09-10T11:00:00Z',
            ratings: { average: 4.8, count: 280 },
          },
          {
            id: 2041,
            name: 'Sac à dos de randonnée GreenTrail',
            image: '/product-71.png',
            subImages: ['', ''],
            stock: 30,
            price: 129,
            details:
              "Sac à dos de randonnée robuste en nylon recyclé avec système d'hydratation intégré.",
            createdAt: '2023-07-30T09:45:00Z',
            ratings: { average: 4.9, count: 320 },
          },
          {
            id: 2042,
            name: 'Sac à dos minimaliste EcoSlim',
            image: '/product-72.png',
            subImages: ['', ''],
            stock: 50,
            price: 69,
            details: 'Sac à dos léger et compact en toile de coton biologique.',
            createdAt: '2023-08-05T13:15:00Z',
            ratings: { average: 4.5, count: 190 },
          },
          {
            id: 2043,
            name: 'Sac à dos antivol SecureEco',
            image: '/product-73.png',
            subImages: ['', ''],
            stock: 35,
            price: 99,
            details:
              'Sac à dos antivol en matériaux recyclés avec poches cachées et fermetures sécurisées.',
            createdAt: '2023-09-20T15:30:00Z',
            ratings: { average: 4.7, count: 240 },
          },
          {
            id: 2044,
            name: 'Sac à dos convertible EcoFlex',
            image: '/product-74.png',
            subImages: ['', ''],
            stock: 45,
            price: 109,
            details:
              'Sac à dos convertible en besace, fabriqué à partir de bouteilles en plastique recyclées.',
            createdAt: '2023-08-25T10:20:00Z',
            ratings: { average: 4.6, count: 170 },
          },
        ],
      },
    ],
  },
];

// Exemple de 10 posts de blog avec des descriptions longues

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Comment booster vos ventes en e-commerce',
    description: `Le monde de l'e-commerce évolue rapidement et les stratégies de vente doivent suivre. 
    Dans cet article, nous explorons différentes méthodes pour booster vos ventes en ligne, 
    notamment l'optimisation du parcours client, l'utilisation des campagnes marketing personnalisées, 
    et l'importance des promotions ciblées. Nous aborderons aussi les erreurs fréquentes à éviter pour 
    maximiser vos conversions et fidéliser votre clientèle.`,
    customTitle: 'Booster vos ventes en ligne',
    tags: ['ventes', 'stratégie', 'e-commerce'],
    author: 'Marie Lefebvre',
    publishDate: new Date('2024-01-05'),
  },
  {
    id: '2',
    title: 'Les meilleures plateformes de paiement pour 2024',
    description: `Choisir la bonne plateforme de paiement pour votre boutique en ligne peut être complexe. 
    Cet article compare les principales plateformes de paiement en 2024, y compris PayPal, Stripe, et 
    d'autres solutions émergentes. Nous examinerons leurs avantages, leurs coûts, et leur facilité 
    d'intégration, afin de vous aider à choisir la solution la mieux adaptée à votre e-commerce.`,
    videoUrl: 'https://example.com/video1.mp4',
    tags: ['paiement', 'plateforme', 'e-commerce'],
    author: 'Pierre Dubois',
    publishDate: new Date('2024-02-10'),
  },
  {
    id: '3',
    title: 'Guide SEO pour les sites e-commerce',
    description: `Le référencement naturel (SEO) est essentiel pour attirer du trafic vers votre site e-commerce. 
    Dans cet article, nous couvrons les meilleures pratiques SEO pour améliorer le positionnement de vos 
    produits sur Google. Vous apprendrez comment optimiser vos descriptions de produits, structurer vos 
    pages, utiliser des balises appropriées, et améliorer la vitesse de chargement de votre site.`,
    customTitle: 'Avis clients et e-commerce',
    tags: ['SEO', 'référencement', 'e-commerce'],
    author: 'Sophie Martin',
    publishDate: new Date('2024-03-15'),
  },
  {
    id: '4',
    title: "L'importance des avis clients pour votre e-commerce",
    description: `Les avis clients jouent un rôle crucial dans la décision d'achat des consommateurs. 
    Dans cet article, nous expliquons comment encourager vos clients à laisser des avis positifs et 
    comment gérer les critiques négatives de manière constructive. Nous parlerons aussi de l'impact 
    des avis sur votre taux de conversion et la réputation de votre boutique.`,
    imageUrl: 'https://example.com/image4.jpg',
    tags: ['avis clients', 'confiance', 'e-commerce'],
    author: 'Luc Durand',
    publishDate: new Date('2024-04-20'),
  },
  {
    id: '5',
    title: 'Tendances e-commerce en 2024',
    description: `L'année 2024 s'annonce riche en innovations pour l'e-commerce. Nous vous proposons un tour 
    d'horizon des tendances clés qui influenceront le secteur, telles que l'intelligence artificielle, 
    le commerce vocal, les expériences d'achat en réalité augmentée, et l'importance croissante de la 
    durabilité. Restez à la pointe de ces tendances pour garantir la compétitivité de votre boutique en ligne.`,
    imageUrl: 'https://example.com/image5.jpg',
    tags: ['tendances', 'e-commerce', '2024'],
    author: 'Julie Bernard',
    publishDate: new Date('2024-05-12'),
  },
  {
    id: '6',
    title: 'Les erreurs à éviter en e-commerce',
    description: `De nombreuses erreurs peuvent freiner la croissance d'une boutique en ligne. Dans cet article, 
    nous passons en revue les erreurs les plus fréquentes que font les entrepreneurs e-commerce, telles que 
    la mauvaise gestion des stocks, le manque d'optimisation mobile, et l'absence de stratégie marketing claire. 
    Éviter ces erreurs peut vous aider à garantir le succès de votre boutique.`,
    tags: ['erreurs', 'conseils', 'e-commerce'],
    customTitle: 'Choisir le bon CMS pour votre e-commerce',
    author: 'Jean Dupont',
    publishDate: new Date('2024-06-25'),
  },
  {
    id: '7',
    title: "Optimiser l'expérience utilisateur pour augmenter les conversions",
    description: `L'expérience utilisateur (UX) est un facteur crucial pour augmenter vos ventes en ligne. 
    Cet article vous montre comment optimiser le design de votre boutique pour offrir une navigation fluide, 
    améliorer l'accessibilité et réduire les frictions lors du processus de paiement. Une UX soignée peut 
    considérablement améliorer votre taux de conversion.`,
    videoUrl: 'https://example.com/video2.mp4',
    tags: ['UX', 'conversion', 'e-commerce'],
    author: 'Camille Richard',
    publishDate: new Date('2024-07-30'),
  },
  {
    id: '8',
    title: "Le marketing d'influence dans l'e-commerce",
    description: `Le marketing d'influence est devenu un levier puissant pour promouvoir vos produits. 
    Dans cet article, nous détaillons comment identifier les bons influenceurs pour votre niche, 
    structurer vos collaborations, et mesurer l'impact de vos campagnes d'influence. Nous aborderons 
    également les risques et avantages liés à cette stratégie.`,
    imageUrl: 'https://example.com/image8.jpg',
    tags: ['marketing', 'influence', 'e-commerce'],
    author: 'Antoine Laurent',
    publishDate: new Date('2024-08-18'),
  },
  {
    id: '9',
    title: 'Comment choisir le bon CMS pour votre boutique en ligne',
    description: `Choisir le bon système de gestion de contenu (CMS) est essentiel pour la réussite de votre 
    boutique en ligne. Ce guide vous aidera à comparer les différentes plateformes comme Shopify, 
    WooCommerce et Magento, en fonction de vos besoins spécifiques : facilité d'utilisation, flexibilité, 
    coût et support. Nous vous proposons une analyse détaillée pour faciliter votre choix.`,
    imageUrl: 'https://example.com/image9.jpg',
    tags: ['CMS', 'comparatif', 'e-commerce'],
    author: 'Isabelle Rousseau',
    publishDate: new Date('2024-09-05'),
  },
  {
    id: '10',
    title: "Les meilleures pratiques de gestion d'inventaire en e-commerce",
    description: `Une gestion efficace de l'inventaire est essentielle pour éviter les ruptures de stock et 
    garantir la satisfaction de vos clients. Dans cet article, nous partageons des conseils pour optimiser 
    la gestion de vos stocks, utiliser des outils de suivi en temps réel, et prévoir les tendances 
    de demande. Une gestion fluide de l'inventaire peut améliorer votre rentabilité et l'expérience client.`,
    customTitle: 'Choisir le bon CMS pour votre e-commerce',
    tags: ['gestion', 'inventaire', 'e-commerce'],
    author: 'Alexandre Fournier',
    publishDate: new Date('2024-10-15'),
  },
];

// Sample data for charts
const revenueData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
];

const userGrowthData = [
  { name: 'Jan', customers: 1000, vendors: 200, delivery: 150 },
  { name: 'Feb', customers: 1200, vendors: 220, delivery: 170 },
  { name: 'Mar', customers: 1400, vendors: 240, delivery: 190 },
  { name: 'Apr', customers: 1600, vendors: 260, delivery: 210 },
  { name: 'May', customers: 1800, vendors: 280, delivery: 230 },
  { name: 'Jun', customers: 2000, vendors: 300, delivery: 250 },
];

const recentOrders = [
  {
    id: '1',
    product: 'Laptop',
    customer: 'John Doe',
    status: 'Delivered',
    amount: '$999',
  },
  {
    id: '2',
    product: 'Smartphone',
    customer: 'Jane Smith',
    status: 'In Progress',
    amount: '$699',
  },
  {
    id: '3',
    product: 'Headphones',
    customer: 'Bob Johnson',
    status: 'Pending',
    amount: '$149',
  },
  {
    id: '4',
    product: 'Tablet',
    customer: 'Alice Brown',
    status: 'Delivered',
    amount: '$399',
  },
  {
    id: '5',
    product: 'Smartwatch',
    customer: 'Charlie Davis',
    status: 'In Progress',
    amount: '$249',
  },
];

export {
  CategroryLinks,
  users,
  BrandsImages,
  departments,
  categories,
  blogPosts,
  recentOrders,
  userGrowthData,
  revenueData,
};
