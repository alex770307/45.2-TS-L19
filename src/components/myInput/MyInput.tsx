// function MyInput({ name, type, placeholder, label }) {
//     return (
//         <div>
//              <label htmlFor={name}>{label}</label>
//             <input
//                 name={name}
//                 type={type}
//                 placeholder={placeholder}
//             />
//         </div>
//     )
// }

// export default MyInput;



// interface IMyInputProps {
//   name: string;
//   type: string;
//     placeholder?: string;
//     label: string;
// }

// function MyInput({ name, type, placeholder, label }: IMyInputProps) {
//     return (
//         <div>
//              <label htmlFor={name}>{label}</label>
//             <input
//                 name={name}
//                 type={type}
//                 placeholder={placeholder}
//             />
//         </div>
//     )
// }

// export default MyInput;




/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './myInput.module.css';
import { FormikProps } from 'formik';

interface IMyInputProps {
  name: string;
  type: 'password' | 'text' | 'number' | 'email';
  placeholder: string;
  label: string;
  formik: FormikProps<any>;
}

function MyInput({ name, type, placeholder, label, formik }: IMyInputProps) {
  return (
    <div className={styles.inputContainer}>
      {/* если у нас будет ошибка, то label заменится на ее текст */}
      {formik?.errors[name] ? <label className={styles.error} htmlFor={name}>{formik.errors[name] as string}</label> : <label htmlFor={name}>{label}</label>}
      {/* мы используем значение для ключа из переменной name потому что они с value должны совпадать */}
      <input value={formik?.values[name]} onChange={formik.handleChange} placeholder={placeholder} name={name} type={type} />
    </div>
  );
}

export default MyInput;