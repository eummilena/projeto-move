import React from 'react'

const Textarea = ({ id, label, placeholder }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} placeholder={placeholder} />
        </>
    )
}

export default Textarea