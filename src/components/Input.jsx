import React from 'react'

const Input = ({ type, id, label, value, onChange, onBlur, error }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={id} id={id} value={value} onBlur={onBlur} onChange={onChange} />
      {error && <p className='error'>{error}</p>}
    </div>
  )
}

export default Input
