import { useLocation } from "react-router-dom"
import { Menu } from "../Menu"
import { Topbar } from "../Topbar"
import { PageContainer,PageTitleContainer } from "./styles"
import { useContext, useEffect } from "react"
import { MenuContext } from "../../Contexts/MenuContext"
import { UserContext } from "../../Contexts/UserContext"

export const Page = (props) => {

  const {onCloseMenu} = useContext(MenuContext);
  const { validateSession } = useContext(UserContext);

  const location = useLocation();

  /*uno de los más utilizados en React, permite escuchar el cambio de estado de algo
    funciona como componente de ciclo de vida
    si no coloco nada en [] solo se ejecuta una vez cuando el componente se cargue
  */
  useEffect (() =>{
    //console.log('location',location)
    hideMenu();
    validateSession();
  },[])

  const hideMenu = () => {
    onCloseMenu();
  }

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
