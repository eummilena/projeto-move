import React from 'react'

const Radio = ({ options, value, setValue, ...props }) => {
    return (

        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            {options.map((option) => (

                <label style={{ display: 'flex', gap: '10px' }} key={option}>
                    <input
                        type="radio"
                        value={option}
                        checked={value === option}
                        onChange={({ target }) => setValue(target.value)}
                        {...props}
                    />
                    {option}
                </label>

            ))}

        </div >
    )
}

export default Radio