import { PhotosContent } from "./styles";
import {FiArrowRight} from "react-icons/fi";


export const Step02 = () => {

  return (
    <PhotosContent>
      <h4>Selecione o post para o sorteio</h4>
      <div>
        <label>
          <input type="radio" name="post" value="1"/>
          <img src="https://picsum.photos/200/200?/random=1" alt=""/>
        </label>
        <label>
          <input type="radio" name="post" value="2"/>
          <img src="https://picsum.photos/200/200?/random=2" alt=""/>
        </label>
        <label>
          <input type="radio" name="post" value="3"/>
          <img src="https://picsum.photos/200/200?/random=3" alt=""/>
        </label>
        <label>
          <input type="radio" name="post" value="4"/>
          <img src="https://picsum.photos/200/200?/random=4" alt=""/>
        </label><label>
          <input type="radio" name="post" value="5"/>
          <img src="https://picsum.photos/200/200?/random=5" alt=""/>
        </label><label>
          <input type="radio" name="post" value="6"/>
          <img src="https://picsum.photos/200/200?/random=6" alt=""/>
        </label>
        
      </div>
      <button type="button">Continuar
        <FiArrowRight />
      </button>
      
    </PhotosContent>
  )
}
