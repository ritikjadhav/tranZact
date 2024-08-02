import { z } from 'zod';

export const UserInput = z.object({
    id: z.string(),
    email: z.string().email().optional(),
    name: z.string().optional(),
    phone: z.string({ 
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }),
    password: z.string({ 
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }),
})