import { useEffect, useState } from "react";
import { Page } from "../../Components/Page";
import { WearItem } from "./Components/WearItem";
import { WearListContainer } from "./styles";
import { HTTP_METHODS, httpRequest } from "../../Utils/HttpRequest";


const Home = () => {

  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    requestClothes();
  }, []);

  const requestClothes = async () => {
    try {
      const response = await httpRequest({ method: HTTP_METHODS.GET, endpoint: '/clothes' });
      const data = response.data.clothes;
      setClothes(data);
    } catch (error) {
      setClothes([]);
    }
  }
  return (
    <Page>
      <WearListContainer>
        {
          clothes.map((item, key) => <WearItem key={key} {...item} /> )
        }
      </WearListContainer>
    </Page>
  )
}

export default Home;

