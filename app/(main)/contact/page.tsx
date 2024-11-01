'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {
	Form,
	FormControl,
	FormField,
	FormMessage,
	FormLabel,
	FormItem,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { contactSchema, Icontact } from '@/schema/contactSchema';

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
	() => import('react-leaflet').then((mod) => mod.MapContainer),
	{ ssr: false },
);
const TileLayer = dynamic(
	() => import('react-leaflet').then((mod) => mod.TileLayer),
	{ ssr: false },
);
const Marker = dynamic(
	() => import('react-leaflet').then((mod) => mod.Marker),
	{ ssr: false },
);
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
	ssr: false,
});

// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';

// Import Leaflet icon
import L from 'leaflet';
import { zodResolver } from '@hookform/resolvers/zod';

export default function ContactPage() {
	const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
	const [chatMessages, setChatMessages] = useState<
		{ sender: string; message: string }[]
	>([]);
	const [currentMessage, setCurrentMessage] = useState('');

	const form = useForm<Icontact>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	});

	const {
		handleSubmit,
		reset,
		control,
		formState: { isSubmitting },
	} = form;

	const onSubmit = (values: Icontact) => {
		alert(JSON.stringify(values, null, 2));
		reset();
	};
	const handleChatSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (currentMessage.trim()) {
			setChatMessages([
				...chatMessages,
				{ sender: 'User', message: currentMessage },
			]);
			setCurrentMessage('');
			// Simulate a response from the support team
			setTimeout(() => {
				setChatMessages((prev) => [
					...prev,
					{
						sender: 'Support',
						message:
							'Thank you for your message. Our team will get back to you shortly.',
					},
				]);
			}, 1000);
		}
	};

	// Replace with your actual store location
	const storeLocation: [number, number] = [4.0511, 9.7085];

	// Define the custom icon
	const customIcon = new L.Icon({
		iconUrl: '/icon-map.png',
		iconSize: [32, 41],
		iconAnchor: [16, 41],
		popupAnchor: [0, -41],
	});

	return (
		<div className='min-h-screen '>
			<header className='shadow-sm  py-12  dark:bg-slate-900 bg-gray-200/25'>
				<div className='container space-y-4'>
					<h1 className='text-3xl font-bold'>Contact Us</h1>
					<p className='mt-1 text-lg text-gray-500'>
						We&apos;re here to help and answer any question you might have.
					</p>
				</div>
			</header>
			<main className='container py-7'>
				<div className='px-4 py-6 sm:px-0'>
					<div className='flex flex-col lg:flex-row gap-8'>
						<div className='lg:w-1/2'>
							<h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
							<div className='space-y-4 mb-8'>
								<div className='flex items-center'>
									<Mail className='h-6 w-6 text-gray-400 mr-2' />
									<span>meyazone@gmail.com</span>
								</div>
								<div className='flex items-center'>
									<Phone className='h-6 w-6 text-gray-400 mr-2' />
									<span>+237 672 54 22 25</span>
								</div>
								<div className='flex items-center'>
									<MapPin className='h-6 w-6 text-gray-400 mr-2' />
									<span>Meyazone E-commerce St, Douala Cameroon</span>
								</div>
							</div>

							<Form {...form}>
								<form
									action='#'
									onSubmit={handleSubmit(onSubmit)}
									className='space-y-4'
								>
									<FormField
										control={control}
										name='name'
										render={({ field }) => (
											<FormItem>
												<FormLabel htmlFor='name'>Name</FormLabel>
												<FormControl>
													<Input
														id='name'
														placeholder='Your name there...'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={control}
										name='email'
										render={({ field }) => (
											<FormItem>
												<FormLabel htmlFor='email'>Email</FormLabel>
												<FormControl>
													<Input
														id='email'
														placeholder='Your email there...'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={control}
										name='message'
										render={({ field }) => (
											<FormItem>
												<FormLabel htmlFor='message'>Message</FormLabel>
												<FormControl>
													<Textarea
														className='resize-none'
														id='message'
														rows={6}
														placeholder='Your message there...'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<Button
										type='submit'
										disabled={isSubmitting}
										className='w-full'
									>
										{isSubmitting ? 'Send...' : 'Send Message'}
									</Button>
								</form>
							</Form>
						</div>
						{/* location map */}
						<div className='lg:w-1/2 mt-8 lg:mt-0 '>
							<div className='mb-3'>
								<h2 className='text-2xl font-semibold'>Our Location</h2>
								<p className='text-sm text-gray-500'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Voluptatem, cumque?
								</p>
							</div>
							<div className='h-64 rounded-lg overflow-hidden mb-8 z-10 relative'>
								<MapContainer
									center={storeLocation}
									zoom={13}
									style={{ height: '100%', width: '100%' }}
								>
									<TileLayer
										url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
									/>
									<Marker position={storeLocation} icon={customIcon}>
										<Popup>
											Our Store Location <br /> Meyazone E-commerce St, Douala
											cameroon
										</Popup>
									</Marker>
								</MapContainer>
							</div>
							<h2 className='text-2xl font-semibold  mb-4'>
								Frequently Asked Questions
							</h2>
							<Accordion type='single' collapsible className='w-full'>
								<AccordionItem value='item-1'>
									<AccordionTrigger>
										What are your shipping rates?
									</AccordionTrigger>
									<AccordionContent>
										Our shipping rates vary depending on the destination and the
										size of the order. For orders over $100, we offer free
										shipping within the continental US.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value='item-2'>
									<AccordionTrigger>How can I track my order?</AccordionTrigger>
									<AccordionContent>
										Once your order has been shipped, you will receive a
										tracking number via email. You can use this number to track
										your package on our website or the carrier&apos;s website.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value='item-3'>
									<AccordionTrigger>
										What is your return policy?
									</AccordionTrigger>
									<AccordionContent>
										We offer a 30-day return policy for most items. The product
										must be in its original condition and packaging. Please
										contact our customer service team to initiate a return.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
				</div>
			</main>

			{/* Live chat message */}
			<Dialog open={isLiveChatOpen} onOpenChange={setIsLiveChatOpen}>
				<DialogTrigger asChild>
					<Button className='fixed bottom-4 left-4 rounded-full p-4'>
						<MessageCircle className='h-6 w-6' />
					</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Live Chat Support</DialogTitle>
					</DialogHeader>
					<div className='h-64 overflow-y-auto border rounded p-2 mb-4'>
						{chatMessages.map((msg, index) => (
							<div
								key={index}
								className={`mb-2 ${
									msg.sender === 'User' ? 'text-right' : 'text-left'
								}`}
							>
								<span
									className={`inline-block p-2 rounded ${
										msg.sender === 'User'
											? 'bg-blue-100 dark:bg-gray-100 dark:text-slate-800'
											: 'bg-myprimary text-slate-800'
									}`}
								>
									{msg.message}
								</span>
							</div>
						))}
					</div>
					<form onSubmit={handleChatSubmit} className='flex gap-2'>
						<Input
							type='text'
							value={currentMessage}
							onChange={(e) => setCurrentMessage(e.target.value)}
							placeholder='Type your message...'
							className='flex-grow'
						/>
						<Button type='submit'>Send</Button>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
}
