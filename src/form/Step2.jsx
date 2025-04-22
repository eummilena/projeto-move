import React, { useState } from 'react'
import styles from './Form.module.css'
import Select from '../components/Select'
import Radio from '../components/Radio';
import Textarea from '../components/Textarea';

const Step2 = () => {
  const [tamMudanca, setTamMudanca] = useState('');
  const [tipMudanca, setTipMudanca] = useState('');

  const textarea = [
    {
      id: 'descricao',
      label: 'Descrição do móveis',
      placeholder: 'Descrição do móveis',
    },
    {
      id: 'obs',
      label: 'Comentários/Observações',
      placeholder: 'Comentários/Observações',
    },
  ]

  const stylesTextarea = {
    obs: styles.form3,
    descricao: styles.form4
  }




  return (
    <div className={styles.step2}>
      <div className={styles.form1}>
        <label htmlFor='tamanho'>Tamanho da mudança</label>
        <Select
          className={styles.select}
          options={['Grande porte', 'Médio porte', 'Pequeno porte']}
          value={tamMudanca}
          setValue={setTamMudanca}
          id='tamanho'
        />
      </div>

      <div className={styles.form2}>
        <label htmlFor='mudanca'>Tipo de mudança</label>
        <div className={styles.radio}>
          <div >
            <Radio
              options={['Residencial', 'Industrial']}
              value={tipMudanca}
              setValue={setTipMudanca}
            />
          </div>
        </div>
      </div>

      {textarea.map(({ id, label, placeholder }) => {

        return (
          <div className={stylesTextarea[id]} key={id} >
            <Textarea
              id={id}
              label={label}
              placeholder={placeholder}
            />
          </div>)
      })
      }
    </div>
  )
}

export default Step2
