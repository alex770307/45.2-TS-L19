import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import styles from './formGender.module.css';
import MyButton from '../../components/myButton/MyButton';

interface IFormGenderProps {
  count: number;
  name: string;
  gender: string;
  probability: number;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .typeError('name is a string')
    .required('name is required')
    .min(3, 'Oops! Your name is too short')
    .max(30, 'Great! Your name is too long')
    .matches(/^[а-яА-ЯёЁa-zA-Z]+$/, 'Use only alphabet letters')
})

export default function FormGender(): JSX.Element {
  const [genderData, setGenderData] = useState<IFormGenderProps | null>(null);

  const formic = useFormik({
    initialValues: {
      name: "",
      gender: "",
      probability: 0,
    } as IFormGenderProps,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          `https://api.genderize.io/?name=${values.name}`
        );
        const data = await response.json();
        setGenderData(data);
        console.log(data)
        formic.resetForm();
      } catch (error) {
        console.error("Error", error);
      }
    },
  });

const handleClean =()=>{
  setGenderData(null);
};
  return (
    <div>
      <h2>Know your gender</h2>
      <form onSubmit={formic.handleSubmit} className={styles.form}>
        <input
          value={formic.values.name}
          onChange={formic.handleChange}
          name="name"
          type="text"
          placeholder="name"
        />
        <MyButton func={handleClean} text="send" />
      </form>
      <span style={{color:'blue'}}>{formic.errors.name}</span>
      {genderData && (
        <div className={styles.genderInfo}>
          <h3>Gender information</h3>
          <p>Name: {genderData.name}</p>
          <p>Gender: {genderData.gender}</p>
          <p>Probability: {genderData.probability * 100} %</p>
        </div>
      )}
    </div>
  );
}