import React from 'react'
import styles from './Move.module.css'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import Subtitle4 from '../components/Subtitle4'
import Video from '../components/Video'
import play from '../assets/images/play-button.svg'

const Move = () => {
    const [showVideo, setShowVideo] = React.useState(false);

    
    

  return (
      <section className={styles.move}>
          <div className={styles.notebook}>
              <img src={ play} alt="botão play"  onClick={() => setShowVideo(true)} />
                    {showVideo && <Video showVideo={showVideo} setShowVideo={setShowVideo } />}
          </div>
          <div className={styles.description}> 
              <Subtitle subtitle="Faça sua mudança com segurança e sem dor de cabeça." />
              <Text text="Em apenas alguns cliques você pode receber imediatamente um orçamento com preço fixo personalizado de acordo com suas necessidades." />
              <Text text="Fazemos um esforço extra para garantir que voçê possa relaxar completamente no dia da mudança.  Já movermos mais de 8.000 apenas no ano passado." />
              <Subtitle4 subtitle4="Veja nossa história" className={styles.textOrange}  />
             
        
          </div>
      </section>
      
  )
   
}

export default Move
