import { Button } from "../../Components/Button";
import {Page} from "../../Components/Page"
import {WearDetailContainer,WearImageContainer,WearDetailContent} from "./styles"

const WearDetail = () => {

  return (
    <Page>
      <WearDetailContainer>
        <WearImageContainer>
          <img src="https://hmcolombia.vtexassets.com/arquivos/ids/1833172-483-725/Camisa-le%C3%B1adora-de-algodon---Red-Checked---H-M-CO.jpg?v=637928777918300000" alt="" />
        </WearImageContainer>
        <WearDetailContent>
          <h3>Camisa Leñadora</h3>
          <h4>2 meses / Masculino</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quae reprehenderit blanditiis cupiditate eius dolorem nobis odit ratione veniam illo temporibus adipisci quis minus esse recusandae, eum, voluptatibus ut quibusdam.</p>
        </WearDetailContent>
      </WearDetailContainer>
      <Button text="Compra" />
    </Page>
  )

}

export default WearDetail;
