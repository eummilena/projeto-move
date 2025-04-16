import React from 'react'
import styles from './Form.module.css'

const steps = [
    {
        step: 1,
        title: 'Suas informações',
        line: '_______________'
    },
    {
        step: 2,
        title: 'Itens da mudança',
        line: '_______________'
    },
    {
        step: 3,
        title: 'Sua localização',
        line: '_______________'
    },
    {
        step: 4,
        title: 'Localização Entrega',
        line: ''

    },

]



const Steps = ({ stepActual }) => {
    const isMobile = window.innerWidth <= 900;

    return (
        <>
            <div className={styles.steps}>
                {steps.map((step) => (
                    isMobile ? (
                        step.step === stepActual ?
                            (<div className={`${styles.steps}`} key={step.step}>
                                <span className={`${styles.step} ${styles.stepOn}`}>{step.step}</span>
                                <p>{step.title}</p>
                            </div>) : null
                    ) : (
                        <div className={`${styles.steps} 
                     `} key={step.step} >
                            <span className=
                                {`${styles.step}
                             ${step.step <= stepActual ? styles.stepOn : styles.stepOff}
                             `}>{step.step}</span>
                            <p className={`${step.step <= stepActual ? styles.active : styles.inative}`}>{step.title}</p>
                            {step.line && <span className={`${step.step <= stepActual ? styles.active : styles.inative}`}>{step.line}</span>}
                        </div>
                    )

                ))}
            </div>
        </>
    )
}





export default Steps
