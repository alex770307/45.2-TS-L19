import { useFormik } from 'formik';
import MyButton from '../../components/myButton/MyButton'
import styles from './task12.module.css'

interface IFormValues {
  nickname: string;
  email: string;
  password: string;
}

export default function Task12(): JSX.Element {

const formik =useFormik({
  initialValues:{
    nickname: '',
    email: ''
  } as IFormValues,
 onSubmit: (values: IFormValues, {resetForm})=>{
  console.log(values);
resetForm();
 }
});


  return (
    <div>
      <h2>Lesson12 Formik 📝</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>

       
        <input value={formik.values.nickname} onChange={formik.handleChange} 
        name="nickname" type="text" placeholder='nickname'/>
        <input value={formik.values.email} onChange={formik.handleChange} 
        name="email" type="email" placeholder='email'/>
         <input value={formik.values.password} onChange={formik.handleChange} 
        name="password" type="password" placeholder='password'/>

        <MyButton text='send'></MyButton>
      </form>
      
    </div>
  )
}
