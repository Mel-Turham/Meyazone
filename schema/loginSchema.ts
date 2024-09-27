import { z } from 'zod';

// Define the login schema using Zod
const loginSchema = z.object({
	// Email field validation
	email: z
		.string()
		.email('Please provide a valid email') // Ensure the input is a valid email format
		.trim(), // Remove leading and trailing whitespace
	// Password field validation
	password: z
		.string()
		.min(8, 'Password must be at least 8 characters') // Set minimum length for password
		.max(18, 'Password must be at most 18 characters') // Set maximum length for password
		.trim(), // Remove leading and trailing whitespace
});

// Export the type for the login form based on the schema
export type LoginForm = z.infer<typeof loginSchema>;
