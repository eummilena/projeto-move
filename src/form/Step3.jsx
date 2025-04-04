import React from 'react'

const Step3 = () => {
  return (
    <div>
          <label htmlFor="address">Endereço para retirada</label>
        <input type="text" id="address" />
        <label htmlFor='cidade'> Cidade</label>
        <input type="text" id='cidade' />
        <label htmlFor='estado'> Estado</label>
        <input type="text" id='estado' />
        <label htmlFor="cep">CEP</label>
        <input type="text" id="cep" />
    </div>
  )
}

export default Step3
