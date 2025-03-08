import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { registerSchema, loginSchema } from './validationSchemas';
import styles from './homework13.module.css';
import MyButton from '../../components/myButton/MyButton';

interface IFormValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Homework13(): JSX.Element {
    
    const registerFormik = useFormik({
        initialValues: {
            username: 'Alex_7',
            email: 'alex_7@gmail.com',
            password: '',
            confirmPassword: ''
        } as IFormValues,
        validationSchema: registerSchema,
        validateOnChange: false,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
        }

    });

    const loginFormik = useFormik({
        initialValues: {
            email: 'alex_7@gmail.com',
            password: ''
        } as IFormValues,
        validationSchema: loginSchema,
        validateOnChange: false,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
        }
    })

    return (
        <div className={styles.formContainer}>
            <h2>Homework13</h2>
            <form onSubmit={registerFormik.handleSubmit} className={styles.loginForm}>
                <input value={registerFormik.values.username}
                    onChange={registerFormik.handleChange}
                    name='username' type="text" placeholder='username' />
                    {registerFormik.errors && <p>{registerFormik.errors.username}</p>}
                <input value={registerFormik.values.email}
                    onChange={registerFormik.handleChange}
                    name='email' type="text" placeholder='email' />
                    {registerFormik.errors && <p>{registerFormik.errors.email}</p>}
                <input value={registerFormik.values.password}
                    onChange={registerFormik.handleChange}
                    name='password' type="password" placeholder='password' />
                      {registerFormik.errors && <p>{registerFormik.errors.password}</p>}
                <input value={registerFormik.values.confirmPassword}
                    onChange={registerFormik.handleChange}
                    name='confirmPassword' type="password" placeholder='confirmPassword' />
                    {registerFormik.errors && <p>{registerFormik.errors.confirmPassword}</p>}

                <MyButton text='register' />
            </form><br />
            
            <form onSubmit={loginFormik.handleSubmit} className={styles.loginForm}>
                <input value={loginFormik.values.email} onChange={loginFormik.handleChange}
                    name='email' type="text" placeholder='email' />
                    {loginFormik.errors && <p>{loginFormik.errors.email}</p>}

                <input value={loginFormik.values.password} onChange={loginFormik.handleChange}
                    name='password' type="password" placeholder='password' />
                    {loginFormik.errors && <p>{loginFormik.errors.password}</p>}
                <MyButton text='login' />
            </form>

        </div>
    )
}