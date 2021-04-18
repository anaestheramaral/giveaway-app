import Modal from "react-modal";
import { Content, Form } from "./styles";
import {ModalHeader} from "./Modalheader"
import {FiArrowRight} from "react-icons/fi";
import { useState } from "react";
import { Step02 } from "./Step02";

interface StepsProps {
    step1: string;
    step2: string,
    step3: string
}

interface NewGiveawayModalProps {
  steps: StepsProps;
  isOpen: boolean;
  onRequestClose: () => void;
  currentStep: string;
  handleCurrentStep:(currentStep:string) => void;
}

Modal.setAppElement("#root");

interface userDataProps {
  user: string,
  post: string,
}

export function NewGiveawayModal({isOpen, onRequestClose, steps, currentStep, handleCurrentStep}: NewGiveawayModalProps){
  
  
  const [stepsStatus, setStepsStatus] = useState({
    step1: "done",
    step2: "incomplete",
    step3: "incomplete"
  })
  
  const [userData, setUserData] = useState<userDataProps>({
    user: "",
    post: "",
  })
  
  

  function saveDataStep01(){
    setStepsStatus({...stepsStatus, step2: "done"});
    handleCurrentStep(steps.step2);
  }

  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ModalHeader 
        step1={stepsStatus.step1} 
        step2={stepsStatus.step2} 
        step3={stepsStatus.step3}
      />

      <Content>
          <span>Passo {currentStep}</span>
        
        <Form>
          {(currentStep === steps.step1) &&
          
          <div className="step">
            <div>
              <h4>Qual o seu Instagram?</h4>
              <p>Informe pra gente qual é o seu instagram que vamos encontrar o post do seu sorteio 😉 </p>
            </div>

            <strong>Seu perfil do Instagram:</strong>
            <div className="input-container"> 
              <span>@</span>
              <input 
                type="text"
                placeholder="douglas123"
                value={userData.user}
                onChange={e => setUserData({...userData, user: e.target.value})}
              />
            </div>

            <button type="button" onClick={saveDataStep01}>Continuar
              <FiArrowRight />
            </button>
            </div>
          }
          {
            (currentStep === steps.step2) &&
             <Step02 />
          }
          
        </Form>
      </Content>
    </ Modal>
  )
}
