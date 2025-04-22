import React from 'react'
import styles from './Form.module.css'
import Input from '../components/Input'
import useForm from '../hook/useForm'


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

const stylesInput = {
  address: styles.input1,
  cidade: styles.input2,
  estado: styles.input3,
  cep: styles.input4,
}




const Step3 = () => {

  const cep = useForm('cep');
  const adrress = useForm();
  const cidade = useForm();
  const estado = useForm();

  const datas = { cep, adrress, cidade, estado }

  return (
    <div className={styles.step3}>
      {formStep3.map(({ label, type, id }) => (
        <div key={id} className={stylesInput[id]}>
          <Input
            label={label}
            id={id}
            type={type}
            {...datas[id]}
          />
        </div>
      ))}
    </div>
  )
}

export default Step3
