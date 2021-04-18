import {Container} from "./styles"

interface stepsStatusProps  {
  step1: string;
  step2: string;
  step3: string
}
export const ModalHeader = (props: stepsStatusProps) => {
  return (
    <Container>
      <div className="step-container">
        <span className={props.step1}>1</span>
        <span>Passo 1</span>
      </div>
      <div className="step-container">
        <span className={props.step2}>2</span>
        <span>Passo 2</span>
      </div>
      <div className="step-container">
        <span className={props.step3}>3</span>
        <span>Passo 3</span>
      </div>
    </Container>
  )
}
