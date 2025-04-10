import React from 'react'
import styles from './Form.module.css'


const formStep3 = [
  {
    label: "Endereço para retirada",
    type: "text",
    id: "address",
  },
  {
    label: "Cidade",
    type: "text",
    id: "cidade",
  },
  {
    label: "Estado",
    type: "text",
    id: "estado",
  },
  {
    label: "CEP",
    type: "text",
    id: "cep",
  }
]

const Step3 = () => {
  return (
    <div className={styles.step3}>
      {formStep3.map(({ label, type, id }) => (
        <div className={` ${id === 'address' && styles.input1} ${id === 'cidade' && styles.input2} ${id === 'estado' && styles.input3} ${id === 'cep' && styles.input4} `}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} />
        </div>
      ))}
    </div>
  )
}

export default Step3
