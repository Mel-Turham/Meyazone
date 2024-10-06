import { z } from 'zod';

export const contactSchema = z.object({
	name: z.string().trim().min(2, 'Name must be at least 2 characters'),
	email: z.string().trim().email('Please provide a valid email'),
	message: z
		.string()
		.trim()
		.min(2, 'Please provide message ')
		.max(255, 'Message must be at most 255 characters'),
});

export type Icontact = z.infer<typeof contactSchema>;
