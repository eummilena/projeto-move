import React from 'react'

const Select = ({ id, options, value, setValue, ...props }) => {

    return (
        <select
            value={value}
            id={id}
            onChange={({ target }) => setValue(target.value)}
            {...props}
        >
            <option value="" disabled>
                Selecione
            </option>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export default Select