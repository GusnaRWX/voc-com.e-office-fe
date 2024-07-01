import {z} from 'zod';


export const loginSchema = z.object({
    username: z.string().min(1, {message: 'Username is required'}).max(150, {message: 'Username too long, must be less then 150 character'}),
    password: z.string().regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/, {
        message: 'Password must be at least 6 characters with one uppercase letters, one number and one symbol',
    })
})

export const forgotPasswordSchema = z.object({
    email: z.string().email('Email is required')
})