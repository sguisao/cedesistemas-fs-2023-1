import { Menu } from "../Menu"
import { Topbar } from "../Topbar"
import { PageContainer,PageTitleContainer } from "./styles"

export const Page = (props) => {

  return(
    <PageContainer>
      <Topbar />
      {
        props.title && (
          <PageTitleContainer>
            <h1>{props.title}</h1>
          </PageTitleContainer>
        )
        //props.title ? <h1>Esto es un ternario</h1> : <></>
      }
      <div>
        {props.children}
      </div>
      <Menu />
    </PageContainer>
  )

}
