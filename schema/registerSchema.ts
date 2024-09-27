import { z } from 'zod';

const registerSchema = z
	.object({
		username: z
			.string()
			.trim()
			.min(2, {
				message: 'Username must contain at least 2 characters.',
			})
			.max(30, {
				message: 'Username must not exceed 30 characters.',
			}),
		email: z.string().email({
			message: 'Please provide a valid email address.',
		}),
		password: z
			.string()
			.trim()
			.min(8, {
				message: 'Password must contain at least 8 characters.',
			})
			.max(16, {
				message: 'Password must not exceed 16 characters.',
			})
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
				{
					message:
						'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
				},
			),
		confirmPassword: z.string().trim(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match.',
		path: ['confirmPassword'],
	});

export type IRegisterForm = z.infer<typeof registerSchema>;
