import { Page } from "../../Components/Page";
import { WearItem } from "./Components/WearItem";
import { WearListContainer } from "./styles"


const WEAR_LIST = [
  {
    _id: 1,
    image:'https://hmcolombia.vtexassets.com/arquivos/ids/1833172-483-725/Camisa-le%C3%B1adora-de-algodon---Red-Checked---H-M-CO.jpg?v=637928777918300000',
    name:'Camisa leñadora',
    target:'2 meses',
    gender: 'Masculino'
  },
  {
    _id: 2,
    image:'https://falabella.scene7.com/is/image/FalabellaCO/882606038_1?wid=1500&hei=1500&qlt=70',
    name:'Pantalon corto',
    target:'6 meses',
    gender: 'Masculino'
  },
  {
    _id: 3,
    image:'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'Vestido',
    target:'2 años',
    gender: 'Femenino'
  },
  {
    _id: 4,
    image:'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'Vestido',
    target:'2 años',
    gender: 'Femenino'
  }
  ,
  {
    _id: 5,
    image:'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'Vestido',
    target:'2 años',
    gender: 'Femenino'
  }
  ,
  {
    _id: 6,
    image:'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'Vestido',
    target:'2 años',
    gender: 'Femenino'
  }
  ,
  {
    _id: 7,
    image:'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name:'Vestido',
    target:'2 años',
    gender: 'Femenino'
  }

];

const Home = () => {

  return (
    <Page>
      <WearListContainer>
        {
          WEAR_LIST.map((item,key) => <WearItem key={key} {...item}/>)
        }
      </WearListContainer>
    </Page>
  )
}

export default Home;

