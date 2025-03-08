import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './task13.module.css';
import MyButton from '../../components/myButton/MyButton';

interface IFormValues {
    model: string;
    creator: string;
    email: string;
};

const schema = Yup.object().shape({
    model: Yup
        .number()
        .typeError('model is a number')
        .required('model is required')
        .integer('model is integer')
        .min(100, 'model number is more than 100')
        .max(1500, 'model number is less than 1500'),
    creator: Yup
        .string()
        .typeError('creator is a string')
        .required('creator is required'),
    email: Yup
        .string()
        .typeError('email is a string')
        .email('incorrect email format')
        .max(50, 'less than 50 symbols, please')
});

export default function Task13(): JSX.Element {

    const formik = useFormik({
        initialValues: {
            model: '1000',
            creator: 'skynet',
            email: 'skynet@gmail.com'
        } as IFormValues,
        validationSchema: schema,
        validateOnChange: false,
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm();
        }
    });

    return (
        <div>
            <h2>Task 13 YUP validation 🔐</h2>
            <form onSubmit={formik.handleSubmit} className={styles.robotForm}>

                <input value={formik.values.model} onChange={formik.handleChange}
                    name='model' type="text" placeholder='model' />
                <p>{formik.errors.model}</p>
                <input value={formik.values.creator} onChange={formik.handleChange}
                    name='creator' type="text" placeholder='creator' />
                <p>{formik.errors.creator}</p>
                <input value={formik.values.email} onChange={formik.handleChange}
                    name='email' type="text" placeholder='email' />
                <p>{formik.errors.email}</p>

                <MyButton text='send' />

            </form>

        </div>
    )
}