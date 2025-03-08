import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
    username: Yup
        .string()
        .min(3, 'Username is too short')
        .max(20, 'Username is too long')
        .matches(/^[a-zA-Z0-9_]+$/, 'Use only letters, numbers & _')
        .required('Username is required'),
    email: Yup
        .string()
        .email('Invalid email format')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password is too short')
        .max(32, 'Password is too long')
        .matches(/[a-z]/, 'Must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
        .matches(/\d/, 'Must contain at least one number')
        .matches(/[@$!%*?&]/, 'Must contain at least one special character (@$!%*?&)')
        .required('Password is required'),
    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
});

export const loginSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Invalid email format')
        .required('Email is required'),
    password: Yup
        .string()
        .min(8, 'Password is too short')
        .required('Password is required'),
});