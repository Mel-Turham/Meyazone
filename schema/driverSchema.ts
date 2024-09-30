import * as z from 'zod';

const PASSWORD_PATTERN =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

export const DriverSchema = z
	.object({
		username: z.string().trim().min(2, {
			message: 'Username must be at least 2 characters',
		}),
		firstName: z.string().trim().min(2, {
			message: 'First name must be at least 2 characters',
		}),
		lastName: z.string().trim().min(2, {
			message: 'Last name must be at least 2 characters',
		}),
		email: z.string().email({
			message: 'Please enter a valid email address',
		}),
		phoneNumber: z
			.string()
			.trim()
			.min(8, 'Phone number is required')
			.refine((value) => value.startsWith('+'), {
				message: 'Phone number must be in international format',
			})
			.refine((value) => /^(\+|00)[1-9]\d{1,14}$/.test(value), {
				message: 'Invalid international phone number format',
			}),
		password: z
			.string()
			.min(8, {
				message: 'Password must be at least 8 characters',
			})
			.regex(PASSWORD_PATTERN, {
				message:
					'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
			}),
		confirmPassword: z.string(),
		vehicleType: z
			.array(z.string())
			.nonempty('At least one vehicle must be selected'),
		licenseNumber: z.string().min(5, {
			message: 'License number must be at least 5 characters',
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword'],
	});

export type IDriver = z.infer<typeof DriverSchema>;
