import React from 'react'
import styles from './Form.module.css'
import Input from '../components/Input'

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
  return (
    <div className={styles.step1} >
      {formStep.map(({ id, label, type }) => (
        <div key={id} className={`${id === 'nome' && styles.form1} ${id === 'sobrenome' && styles.form2} ${id === 'email' && styles.form3} ${id === 'telefone' && styles.form4} `}>
          <label htmlFor={id}>{label}</label>
          <Input type={type} id={id} />
        </div>
      ))}
    </div>
  )
}

export default Step1
