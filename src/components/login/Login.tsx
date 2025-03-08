
import * as Yup from 'yup';
import { useFormik } from "formik";
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import { useAppDispatch } from '../../app/hooks';
import { loginAction } from '../../features/auth/authAction';



const schema = Yup.object().shape({
  username: Yup
    .string().required('username is required'),
  password: Yup
    .string().min(8, 'password must be at least 8 symbols long').required('password is required')
});

export default function Login(): JSX.Element {

  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      username: 'emilys',
      password: 'emilyspass'
    } as { username: string; password: string; },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values) => {
      dispatch(loginAction(values))
      console.log(values);
      
    }
  });

  return (
    <div>
      <h2>Login 🔐</h2>
      <form onSubmit={formik.handleSubmit}>
        <MyInput label="username: " placeholder="type your username" type="text" name="username" formik={formik} />
        <MyInput label="password: " placeholder="type your password" type="password" name="password" formik={formik} />
        <MyButton type="submit" text="sign in" />
      </form>
    </div>
  );
}