import React from 'react'
import styles from './Form.module.css'
import Input from '../components/Input'
import useForm from '../hook/useForm'

const formStep = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'sobrenome',
    label: 'Sobrenome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'telefone',
    label: 'Telefone',
    type: 'text',
  },
]




const Step1 = () => {

  const Styles = {
    nome: styles.form1,
    sobrenome: styles.form2,
    email: styles.form3,
    telefone: styles.form4,
  };

  const nome = useForm();
  const sobrenome = useForm();
  const email = useForm('email');
  const telefone = useForm();


  const datas = { nome, sobrenome, email, telefone }

  return (
    <div className={styles.step1} >
      {formStep.map(({ id, label, type }) => {
        return (
          <div key={id} className={Styles[id]}>
            <Input
              type={type}
              id={id}
              label={label}
              name={id}
              {...datas[id]}
            />

          </div>)
      }


      )}
    </div>
  )
}

export default Step1
