import { z } from 'zod';

export const contactValidationSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Name is required field',
        }),
        email: z.string().email('Invalid email address').optional(),
        phone: z.string({
            required_error: 'Phone number is required field',
        }),
        address: z.string({
            required_error: 'Address is required field',
        }),
        profile: z.string({
            required_error: 'Profile is required field',
        }),
    }),
});
