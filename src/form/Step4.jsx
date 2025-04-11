import React from 'react'
import Button from '../components/Button'
import styles from './Form.module.css'
import Check from '../assets/images/check.svg?react'
import Subtitle from '../components/Subtitle'
import Subtitle4 from '../components/Subtitle4'

const Step4 = ({ setForm }) => {

  return (
    <div className={styles.step4}>
      <img src={Check} className={styles.check} />
      <Subtitle subtitle={'Tudo pronto.'} />
      <Subtitle4 subtitle4={'Em instantes você receberá o orçamento em seu e-mail.'} />
      <Button className={styles.buttonEnd} onClick={() => setForm(false)} >Fechar janela</Button>
    </div>
  )
}

export default Step4
