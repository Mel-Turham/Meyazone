import { z } from 'zod';

// Define constants for reusable values
const USERNAME_LENGTH = { min: 2, max: 30 };
const PASSWORD_LENGTH = { min: 8, max: 16 };

// Define password regex pattern
const PASSWORD_PATTERN =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

const createLengthMessage = (
	field: string,
	{ min, max }: { min: number; max: number },
) => ({
	tooShort: `${field} must contain at least ${min} characters.`,
	tooLong: `${field} must not exceed ${max} characters.`,
});

const usernameMessages = createLengthMessage('Username', USERNAME_LENGTH);
const passwordMessages = createLengthMessage('Password', PASSWORD_LENGTH);

export const vendorSchema = z
	.object({
		username: z
			.string()
			.trim()
			.min(USERNAME_LENGTH.min, { message: usernameMessages.tooShort })
			.max(USERNAME_LENGTH.max, { message: usernameMessages.tooLong }),
		email: z
			.string()
			.email({ message: 'Please provide a valid email address.' })
			.trim(),
		password: z
			.string()
			.trim()
			.min(PASSWORD_LENGTH.min, { message: passwordMessages.tooShort })
			.max(PASSWORD_LENGTH.max, { message: passwordMessages.tooLong })
			.regex(PASSWORD_PATTERN, {
				message:
					'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
			}),
		confirmPassword: z.string().trim(),
		phoneNumber: z
			.string()
			.trim()
			.min(8, 'Phone number is required')
			.refine((value) => value.startsWith('+'), {
				message: 'Phone number must be in international format',
			}),
		storeName: z.string().min(1, 'Store name is required'),
		categories: z
			.array(z.string())
			.nonempty('At least one category must be selected'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match.',
		path: ['confirmPassword'],
	});

export type IVendor = z.infer<typeof vendorSchema>;
