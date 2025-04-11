import React from 'react'
import styles from './Form.module.css'

const Step2 = () => {
  return (
    <div className={styles.step2}>
      <div className={styles.form1}>
        <label htmlFor='tamanho'>Tamanho da mudança</label>
        <select id='tamanho' name='tamanhos' className={styles.select}>
          <option value="grande">Grande porte</option>
          <option value="medio">Médio porte</option>
          <option value="pequeno">Pequeno porte</option>
        </select>
      </div>

      <div className={styles.form2}>
        <label htmlFor='mudanca'>Tipo de mudança</label>
        <div className={styles.radio}>
          <input type="radio" id="residencial" value="residencial" name="mudanca" />
          <label htmlFor="residencial">Residencial</label>

          <input type="radio" id="industrial" value="industrial" name="mudanca" />
          <label htmlFor="industrial"> Industrial</label>
        </div>
      </div>

      <div className={styles.form3}>
        <label htmlFor="descricao">Descrição do móveis</label>
        <textarea id="descricao" placeholder='Descrição dos movéis' />
      </div>


      <div className={styles.form4}>
        <label htmlFor="obs">Observações/Comentários</label>
        <textarea id="obs" placeholder='Suas observações'></textarea>
      </div>

    </div>
  )
}

export default Step2
