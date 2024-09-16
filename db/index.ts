import {
	consal,
	applap,
	appTablet,
	cam4k,
	camera2,
	consal_300,
	gamecabin,
	GoldePhone,
	head1,
	headphonecase,
	Lgphone,
	macPro,
	powerbanck,
	printer,
	redmi,
	redPhone,
	sam2,
	Ultrabooks,
	uniheadphone,
	Watch,
	Whirelesscar,
	WideTv,
	WirelessSound,
	brain_1,
	brain_2,
	brain_3,
	brain_4,
	brain_5,
	brain_6,
} from '@/public';
import { ImageType, ProductTypes, UsersType } from '@/types';

const products: ProductTypes[] = [
	{
		id: 1,
		name: 'Wireless Audio System Multiroom 360',
		image: WirelessSound,
		category: {
			name: ['Audio Speakers', 'TV & Audio'],
		},
		price: 2999,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 2,
		name: 'Tablet Red EliteBook Revolve 810 G2',
		image: appTablet,
		category: {
			name: ['Laptops', 'Laptops'],
		},
		price: 21100,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 3,
		name: 'White Solo 2 Wireless',
		image: uniheadphone,
		category: {
			name: ['Accessories', 'Headphones'],
		},
		price: 248.99,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 4,
		name: 'Smartphone 6S 32GB LTE',
		image: GoldePhone,
		category: {
			name: ['Smart Phones', ' Tablets'],
		},
		price: 300,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 5,
		name: 'Purple NX Mini F1 aparat SMART NX',
		image: camera2,
		category: {
			name: ['Cameras'],
		},
		price: 559,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 6,
		name: 'Full Color LaserJet Pro M452dn',
		image: printer,
		category: {
			name: ['Printers', 'Ink', 'Printers', '', ''],
		},
		price: 1050,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 7,
		name: 'Aerocool EN52377 Dead Silence Gaming Cube Case',
		image: gamecabin,
		category: {
			name: ['Computer Cases', ' Computer'],
		},
		price: 150,
		decription: {
			desc: ['1', '', ''],
		},
	},
	{
		id: 8,
		name: 'Smartphone 6S 32GB LTE',
		image: '',
		category: {
			name: ['Smart Phones ', ' Tablets'],
		},
		price: 1100,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 9,
		name: 'Powerbank 1130 mAh Blue',
		image: powerbanck,
		category: {
			name: ['Accessories', ' Power Banks'],
		},
		price: 200,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 10,
		name: 'Smartwatch 2.0 LTE Wifi Waterproof',
		image: Watch,
		category: {
			name: ['Gadgets', 'Smartwatches'],
		},
		price: 700,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 11,
		name: 'Ultrabook UX305CA-FC050T',
		image: redmi,
		category: {
			name: ['Smart Phones &  Tablets,'],
		},
		price: 1200,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 12,
		name: 'Tablet Red EliteBook Revolve 810 G2',
		image: appTablet,
		category: {
			name: ['Laptops, Laptops '],
		},
		price: 2100,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 13,
		name: '',
		image: headphonecase,
		category: {
			name: ['Accessories', 'Headphone'],
		},
		price: 159,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 14,
		name: 'Headphones USB Wires',
		image: '',
		category: {
			name: ['Accessories', 'Headphone'],
		},
		price: 50,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 15,
		name: 'Ultra Wireless S50 Headphones S50 with',
		image: head1,
		category: {
			name: ['Accessories', 'Headphone'],
		},
		price: 350,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 16,
		name: 'Game Console Controller + USB 3.0 Cable',
		image: consal,
		category: {
			name: ['Game Consoles', 'Video'],
		},
		price: 99,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 17,
		name: 'Wireless Audio System Multiroom 360',
		image: '',
		category: {
			name: ['Audio Speakers', 'TV & Audio'],
		},
		price: 2299,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 18,
		name: 'Tablet White EliteBook Revolve 810 G2',
		image: Ultrabooks,
		category: {
			name: ['Laptops, Laptops '],
		},
		price: 1300,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 19,
		name: 'Laptop Screener CX70 2QF-621XPL 17.3″ 4210',
		image: applap,
		category: {
			name: ['Laptops', 'Laptops & Computers'],
		},
		price: 2399,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 20,
		name: 'Widescreen 4K SUHD TV',
		image: WideTv,
		category: {
			name: ['Home Entertainment', 'TVs'],
		},
		price: 3299,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 21,
		name: 'Tablet Thin EliteBook Renolve 810 G6',
		image: redPhone,
		category: {
			name: ['Smart Phones', 'Tablets'],
		},
		price: 1300,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 22,
		name: 'Apple MacBook Pro MF84HN/A 13-inch',
		image: macPro,
		category: {
			name: ['Computers', 'Latops'],
		},
		price: 1500,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 23,
		name: 'Camera C430W 4k Waterproof',
		image: '',
		category: {
			name: ['Camers', 'cameras'],
		},
		price: 590,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 24,
		name: 'Notebook Widescreen Z51-70 40K6013UPB',
		image: sam2,
		category: {
			name: ['Smart Phones & Tablets'],
		},
		price: 1100,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 25,
		name: 'Smart Camera 6200U with 500GB',
		image: cam4k,
		category: {
			name: ['Cameras', 'Cameras'],
		},
		price: 2999,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 26,
		name: 'Wireless Charger 2040 White',
		image: Whirelesscar,
		category: {
			name: ['Accessories'],
		},
		price: 248,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 27,
		name: 'Smartphones 6S 32GB LTE',
		image: Lgphone,
		category: {
			name: ['Smart Phones'],
		},
		price: 780,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 28,
		name: '',
		image: '',
		category: {
			name: ['', '', '', ''],
		},
		price: 300,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 29,
		name: '',
		image: '',
		category: {
			name: ['', '', '', ''],
		},
		price: 300,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 30,
		name: '',
		image: '',
		category: {
			name: ['', '', '', ''],
		},
		price: 300,
		decription: {
			desc: ['', '', ''],
		},
	},
	{
		id: 31,
		name: '',
		image: '',
		category: {
			name: ['', '', '', ''],
		},
		price: 300,
		decription: {
			desc: ['', '', ''],
		},
	},
];

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
		userImage: '',
		userFeetBack:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
	},
	{
		userId: 2,
		userName: 'Alex Smith',
		userImage: '',
		userFeetBack:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
	},
	{
		userId: 3,
		userName: 'Taylor Laurent',
		userImage: '',
		userFeetBack:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
	},
	{
		userId: 4,
		userName: 'Casey Rossi',
		userImage: '',
		userFeetBack:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
	},
	{
		userId: 5,
		userName: 'Mel Turham',
		userImage: '',
		userFeetBack:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
	},
	{
		userId: 6,
		userName: 'Willam',
		userImage: '',
		userFeetBack:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
	},
	{
		userId: 7,
		userName: 'Sara',
		userImage: '',
		userFeetBack:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
	},
	{
		userId: 8,
		userName: 'John Doe',
		userImage: '',
		userFeetBack:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
	},
	{
		userId: 9,
		userName: 'Melvine',
		userImage: '',
		userFeetBack:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore.',
	},
	{
		userId: 10,
		userName: 'Manuella',
		userImage: '',
		userFeetBack:
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

const departments = [
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
          { id: 1, label: 'All Computers & Accessories' },
          { id: 2, label: 'All Office & Stationery' },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Cameras, Audio & Video',
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


export { products, CategroryLinks, users, BrandsImages , departments};
