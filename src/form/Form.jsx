import React,{useState} from 'react'
import styles from './Form.module.css'
import Subtitle from '../components/Subtitle'
import Steps from './Steps'
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const Form = () => {

    const [step, setStep] = useState(1);

        const nextStep = (e) => {
            e.preventDefault(); 
            setStep((prev) => Math.min(prev + 1, 4));
        } 
        const prevStep = (e) => {
            e.preventDefault();
            setStep((prev) => Math.max(prev - 1, 1));
        } 
    

    return (
        <section className={styles.form}>
            <Subtitle subtitle="Vamos começar ?" />
            <Steps stepActual={step}/>
        <form className={styles.forms} onSubmit={(event) => event.preventDefault()}>
                <div className={styles.forms}>
                     {step === 1 && <Step1 />}
                     {step === 2 && <Step2 />}
                     {step === 3 && <Step3 />}
                     {step === 4 && <Step4 />}
                 </div>     
                <div className={styles.buttonContent}>
                   {step < 4 && <button className={styles.buttonBack} onClick={prevStep} disabled={step === 1}> Voltar</button>}
                    {step < 4 && <button className={styles.buttonNext} onClick={nextStep}> Próximo</button> }
                    {step > 4 && null}
                </div>
        </form> 
      </section>
    
  )
}

export default Form
