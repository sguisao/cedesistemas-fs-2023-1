import { WearItemContainer} from './styles'
import {WearItemImage} from "./styles"

export const WearItem = ({ image,name,target,gender }) => {

  return (
    <WearItemContainer>
      <WearItemImage>
        <div>
          <img width="100px" alt="wear" src={image} />
        </div>
      </WearItemImage>
      <h3>{name}</h3>
      <h5>{target} / {gender}</h5>
    </WearItemContainer>
  )
};
