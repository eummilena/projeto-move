import React from 'react'
import Button from '../components/Button'
import styles from './Form.module.css'

const Step4 = () => {
  return (
    <div>
         <h2>Tudo pronto.</h2>
        <h2>Em instantes você receberá o orçamento em seu e-mail.</h2>
      <Button text="Fechar janela" className={styles.buttonEnd}></Button>
    </div>
  )
}

export default Step4
