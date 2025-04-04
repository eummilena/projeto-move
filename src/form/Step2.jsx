import React from 'react'

const Step2 = () => {
  return (
    <div>
       <label htmlFor='tamanho'>Tamanho da mudança</label>
        <select id='tamanho'>
            <option value="grande">Grande porte</option>
            <option value="medio">Médio porte</option>
            <option value="pequeno">Pequeno porte</option>
        </select>
        <div>
            <label htmlFor='quantidade'>Tipo de mudanças</label>
<label htmlFor="">
            <input type="radio" id="residencial" />
            Residencial
        </label>
      

<label htmlFor="">
            <input type="radio" id="industrial" />
            Industrial
        </label>
        </div>

        <label htmlFor="descricao">Descrição do móveis</label>
        <textarea id="descricao" />

        <label htmlFor="obs">Observações/Comentários</label>
        <textarea id="obs"></textarea>
    </div>
  )
}

export default Step2
