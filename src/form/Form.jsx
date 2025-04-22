import React, { useEffect, useState } from 'react'
import styles from './Form.module.css'
import Subtitle from '../components/Subtitle'
import { FaCircleXmark } from "react-icons/fa6";
import Steps from './Steps'
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Button from '../components/Button';



const Form = ({ setForm }) => {

    const [step, setStep] = useState(1);

    const nextStep = (e) => {
        e.preventDefault();
        setStep((prev) => Math.min(prev + 1, 4));
    }
    const prevStep = (e) => {
        e.preventDefault();
        setStep((prev) => Math.max(prev - 1, 1));
    }

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'Escape') { setForm(false); }
        }
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [setForm]);




    return (
        <section className={styles.modalForm}>

            <div className={styles.form} >
                <div className={styles.modalButton}>
                    <Button onClick={() => setForm(false)} className={styles.close} >&#10005;</Button>
                </div>
                <Subtitle subtitle="Vamos começar ?" />
                <Steps stepActual={step} />
                <form className={styles.forms} onSubmit={(event) => event.preventDefault()}>

                    <div>
                        {step === 1 && <Step1 />}
                        {step === 2 && <Step2 />}
                        {step === 3 && <Step3 />}
                        {step === 4 && <Step4 setForm={setForm} />}
                    </div>
                    {step < 4 ? (
                        <div className={styles.buttonContent}>
                            {step < 4 && <Button className={styles.buttonBack} onClick={prevStep} disabled={step === 1}> Voltar</Button>}
                            {step < 4 && <Button className={styles.buttonNext} onClick={nextStep}> Próximo</Button>}
                        </div>
                    ) : null}

                </form>
            </div>
        </section>

    )
}

export default Form
