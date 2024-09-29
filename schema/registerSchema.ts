import { z } from 'zod';

// Define constants for reusable values
const MIN_USERNAME_LENGTH = 2;
const MAX_USERNAME_LENGTH = 30;
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 16;

// Define password regex pattern
const PASSWORD_PATTERN =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

export const registerSchema = z
	.object({
		username: z
			.string()
			.trim()
			.min(MIN_USERNAME_LENGTH, {
				message: `Username must contain at least ${MIN_USERNAME_LENGTH} characters.`,
			})
			.max(MAX_USERNAME_LENGTH, {
				message: `Username must not exceed ${MAX_USERNAME_LENGTH} characters.`,
			}),
		email: z
			.string()
			.email({
				message: 'Please provide a valid email address.',
			})
			.trim(),
		password: z
			.string()
			.trim()
			.min(MIN_PASSWORD_LENGTH, {
				message: `Password must contain at least ${MIN_PASSWORD_LENGTH} characters.`,
			})
			.max(MAX_PASSWORD_LENGTH, {
				message: `Password must not exceed ${MAX_PASSWORD_LENGTH} characters.`,
			})
			.regex(PASSWORD_PATTERN, {
				message:
					'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
			}),
		confirmPassword: z.string().trim(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match.',
		path: ['confirmPassword'],
	});

// Export the type for the register form based on the schema
export type RegisterForm = z.infer<typeof registerSchema>;
