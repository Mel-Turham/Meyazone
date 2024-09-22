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
	user_1,
	user_2,
	user_3,
	user_4,
	user_5,
	user_6,
	user_7,
	user_8,
} from '@/public';
import {
	Department,
	ImageType,
	ProductTypes,
	UsersType,
	Category,
} from '@/types';

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
						subImages: ['neau_1.jpg', 'neau_2.jpg'],
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
						id: 2021,
						name: 'Baskets éco-responsables unisexes',
						image: 'nsables.jpg',
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
						image: '//product-47.png',
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
						image: 'jpg',
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

export {
	products,
	CategroryLinks,
	users,
	BrandsImages,
	departments,
	categories,
};
