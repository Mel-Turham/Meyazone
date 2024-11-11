'use client';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { MultiSelect } from '@/components/ui/multi-select';
import { Select } from '@/components/ui/select';
import { IDriver, DriverSchema } from '@/schema/driverSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const DriverForm = () => {
	const form = useForm<IDriver>({
		resolver: zodResolver(DriverSchema),
		defaultValues: {
			username: '',
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
			password: '',
			confirmPassword: '',
			licenseNumber: '',
			vehicleType: undefined,
		},
	});

	const {
		handleSubmit,
		reset,
		control,
		formState: { isSubmitting },
	} = form;

	const onSubmit = useCallback(
		async (values: IDriver) => {
			alert(JSON.stringify(values, null, 2));
			reset();
		},
		[reset],
	);

	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='grid grid-cols-2 gap-x-2 gap-y-4'
			>
				{/* user name field */}
				<FormField
					control={control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor='username'>Username</FormLabel>
							<FormControl>
								<Input
									id='username'
									type='text'
									placeholder='Enter your username'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* firstName field */}
				<FormField
					control={control}
					name='firstName'
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor='firstName'>firstName</FormLabel>
							<FormControl>
								<Input
									id=''
									type='text'
									placeholder='Enter your firstName'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* lastname field */}
				<FormField
					control={control}
					name='lastName'
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor='lastName'>lastName</FormLabel>
							<FormControl>
								<Input
									id='lastName'
									type='text'
									placeholder='Enter your lastName'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* email field */}
				<FormField
					control={control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor='email'>Email</FormLabel>
							<FormControl>
								<Input
									id='email'
									type='email'
									placeholder='Enter your email'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* phone number field */}
				<FormField
					control={control}
					name='phoneNumber'
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor='phone'>Phone</FormLabel>
							<FormControl>
								<PhoneInput
									id='phone'
									defaultCountry='CM'
									international
									{...field}
									className='border border-slate-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* licenseNumber field */}
				<FormField
					control={control}
					name='licenseNumber'
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor='licenseNumber'>Licence number</FormLabel>
							<FormControl>
								<Input
									id='licenceNumber'
									type='text'
									placeholder='Enter your licence number'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* password field */}
				<FormField
					control={control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor='password'>Password</FormLabel>
							<FormControl>
								<Input
									id='password'
									type='password'
									placeholder='Enter your password'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* confirm password field */}
				<FormField
					control={control}
					name='confirmPassword'
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor='confirmPassword'>Confirm password</FormLabel>
							<FormControl>
								<Input
									id='confirmPassword'
									type='password'
									placeholder='Confirm your password'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* vehicleType */}
				<FormField
					control={control}
					name='vehicleType'
					render={({ field }) => (
						<FormItem className='col-span-2'>
							<FormLabel htmlFor='vehicleType'>Vehicle Type</FormLabel>
							<FormControl>
								<MultiSelect
									options={[
										{ value: 'motorcycle', label: 'Motorcycle' },
										{ value: 'car', label: 'Car' },
										{ value: 'bicycle', label: 'Bicycle' },
										{ value: 'truck', label: 'Truck' },
									]}
									onValueChange={(values) => field.onChange(values)}
									variant={'inverted'}
									maxCount={3}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' className='col-span-2' disabled={isSubmitting}>
					{isSubmitting ? '	Register as Driver...' : 'Register'}
				</Button>
			</form>
		</Form>
	);
};

export default DriverForm;
