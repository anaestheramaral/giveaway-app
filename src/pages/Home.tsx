import { Container } from "./styles"
import { useState } from "react"
import { NewGiveawayModal } from "../components/NewGiveawayModal";

export const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const steps = {
    step1: "01",
    step2: "02",
    step3: "03"
  }
  const [currentStep, setCurrentStep] = useState(steps.step1);

  function handleCurrentStep(i: string){
    setCurrentStep(i)
  }

  const onRequestClose= () => {
    setIsOpen(false);
    setCurrentStep(steps.step1)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <Container>
      <header>
        <h1>Insta Giveaway</h1>
      </header>

      <main>
        <h3>Bem-vindo ao Insta Giveaway</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem amet fugit odio consequatur tenetur ipsa aut quae architecto quibusdam.
        </p>
        <button onClick={openModal}>Iniciar um sorteio</button>
        <NewGiveawayModal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose} 
          steps={steps}
          handleCurrentStep={handleCurrentStep}
          currentStep={currentStep}
        />
      </main>

      <footer>
          O que há de novo? - Como Funciona? <br />
          Copyright xxxx xxxxxx. Todos os Direitos Reservados.<br />
         {/* Termos de Uso - Política de Privacidade - Contato */}
         <nav>
          <a href="kjhfsdjk">Termos de Uso</a> |
          <a href="kjhfds"> Política de Privacidade</a> |
          <a href="kjhsd"> Contato</a>
         </nav>
      </footer>
      <div></div>
    </Container>
  )
}
