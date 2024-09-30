import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CustomerForm from '@/components/CustomerForm ';
import VendorForm from '@/components/VendorForm';
import DriverForm from '@/components/DriverForm';

export default function RegisterForm() {
	return (
		<Card className='w-5/12'>
			<CardHeader>
				<CardTitle>Create an Account</CardTitle>
				<CardDescription>
					Create new account today to reap the benefits of a personalized
					shopping experience.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Tabs defaultValue='customer' className='w-full'>
					<TabsList className='w-full grid grid-cols-3 mb-5'>
						<TabsTrigger value='customer'>Customer</TabsTrigger>
						<TabsTrigger value='vendor'>Vendor</TabsTrigger>
						<TabsTrigger value='driver'>Driver</TabsTrigger>
					</TabsList>
					<TabsContent value='customer'>
						<CustomerForm />
					</TabsContent>
					<TabsContent value='vendor'>
						<VendorForm />
					</TabsContent>
					<TabsContent value='driver'>
						<DriverForm />
					</TabsContent>
				</Tabs>
			</CardContent>
			<CardFooter className='flex items-start space-y-4 flex-col'>
				<h3 className='scroll-m-6 text-lg'>
					Sign up today and you will be able to :
				</h3>
				<ul className='space-y-2'>
					{[
						'Speed your way through checkout',
						'Track your orders easily',
						'Keep a record of all your purchases',
					].map((item, index) => {
						return (
							<li key={index} className='flex items-center gap-3 text-sm'>
								<Check className='w-5 h-5 text-myprimary' />
								{item}
							</li>
						);
					})}
				</ul>
			</CardFooter>
		</Card>
	);
}
