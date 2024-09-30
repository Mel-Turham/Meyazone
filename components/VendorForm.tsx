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
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { useCallback, useMemo } from 'react';
import { vendorSchema, IVendor } from '@/schema/vendorSchema';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { MultiSelect } from '@/components/ui/multi-select';

const categories = [
	{ value: 'chaussures', label: 'Chaussures' },
	{ value: 'électronique', label: 'Electronique' },
	{ value: 'vêtements', label: 'Vêtements' },
	{ value: 'pull over', label: 'Pull over' },
	{ value: 'accessoires', label: 'Accessoires' },
	{ value: 'maison', label: 'Maison' },
	{ value: 'beauté', label: 'Beauté' },
	{ value: 'sport', label: 'Sport' },
];

const VendorForm = () => {
	const form = useForm<IVendor>({
		resolver: zodResolver(vendorSchema),
		defaultValues: {
			username: '',
			email: '',
			phoneNumber: '',
			password: '',
			confirmPassword: '',
			categories: [],
			storeName: '',
		},
	});

	const {
		handleSubmit,
		control,
		reset,
		formState: { isSubmitting },
	} = form;

	const onSubmit = useCallback(
		async (values: IVendor) => {
			console.log(values);
			reset();
		},
		[reset],
	);

	const formFields = useMemo(
		() => [
			{
				name: 'username',
				label: 'Username',
				type: 'text',
				placeholder: 'Enter your username',
			},
			{
				name: 'email',
				label: 'Email',
				type: 'email',
				placeholder: 'Enter your email',
			},
			{
				name: 'storeName',
				label: 'Your store name',
				type: 'text',
				placeholder: 'Enter your store name',
			},
			{
				name: 'password',
				label: 'Password',
				type: 'password',
				placeholder: 'Enter your password',
			},
			{
				name: 'confirmPassword',
				label: 'Confirm Password',
				type: 'password',
				placeholder: 'Confirm password',
			},
		],
		[],
	);

	return (
		<Form {...form}>
			<form
				className='grid grid-cols-2 gap-4'
				onSubmit={handleSubmit(onSubmit)}
				aria-label='Vendor registration form'
			>
				{formFields.map(({ name, label, type, placeholder }) => (
					<FormField
						key={name}
						control={control}
						name={name as keyof IVendor}
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor={name}>{label}</FormLabel>
								<FormControl>
									<Input
										id={name}
										type={type}
										placeholder={placeholder}
										{...field}
										aria-label={label}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}

				<FormField
					control={control}
					name='phoneNumber'
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor='phoneNumber'>Phone</FormLabel>
							<FormControl>
								<PhoneInput
									id='phoneNumber'
									international
									defaultCountry='CM'
									{...field}
									className='border border-slate-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
									aria-label='Phone number'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name='categories'
					render={({ field }) => (
						<FormItem className='col-span-2'>
							<FormLabel htmlFor='categories'>Categories</FormLabel>
							<FormControl>
								<MultiSelect
									onValueChange={field.onChange}
									options={categories}
									{...field}
									maxCount={3}
									variant='inverted'
									modalPopover={true}
									placeholder='Select categories'
									aria-label='Select categories'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					className='w-full col-span-2 disabled:hover:cursor-not-allowed'
					type='submit'
					disabled={isSubmitting}
					aria-label='Register as a vendor'
				>
					{isSubmitting ? 'Registering...' : 'Register'}
				</Button>
			</form>
		</Form>
	);
};

export default VendorForm;
