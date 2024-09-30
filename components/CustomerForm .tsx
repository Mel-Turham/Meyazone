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
import { RegisterForm, registerSchema } from '@/schema/registerSchema';
import { Input } from '@/components/ui/input';
import { useCallback } from 'react';

const CustomerForm = () => {
	const form = useForm<RegisterForm>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});
	const {
		handleSubmit,
		control,
		reset,
		formState: { isSubmitted },
	} = form;

	const onSubmit = useCallback(
		(values: RegisterForm) => {
			console.log(values);
			reset();
		},
		[reset],
	);
	return (
		<Form {...form}>
			<form action='#' onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
				<FormField
					control={control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input
									type='text'
									placeholder='Enter your user name...'
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
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type='email' placeholder='Enter your email' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type='password'
									placeholder='Enter your password ...'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name='confirmPassword'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<Input
									type='password'
									placeholder='Confirm the password'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' disabled={isSubmitted} className='w-full'>
					{isSubmitted ? 'Register as customer...' : 'Register'}
				</Button>
			</form>
		</Form>
	);
};

export default CustomerForm;
