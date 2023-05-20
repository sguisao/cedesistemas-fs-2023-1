import {Link} from "react-router-dom";
import { MenuContainer , MenuItemsWrapper, MenuCloseWrapper } from "./styles";
import { IoClose } from "react-icons/io5"
import { useContext } from "react";
import { MenuContext } from "../../Contexts/MenuContext";

const OptionsMenu = [
  {
    name:"Inicio",
    path:"/"
  },
  {
    name:"Perfil",
    path:"/profile"
  },
  {
    name:"Mis prendas",
    path:"/my-clothes"
  },
  {
    name:"Iniciar Sesión",
    path:"/login"
  }
]

export const Menu = () => {

  const {menuState, onChangeOpenCloseMenu} = useContext(MenuContext);

  return (
    <MenuContainer isShown={ menuState.isOpen }>
      <MenuCloseWrapper onClick={onChangeOpenCloseMenu}>
        <IoClose />
      </MenuCloseWrapper>
      <MenuItemsWrapper>
        {
          OptionsMenu.map((item,index) => (
              <Link key={index} to={item.path}><li>{item.name}</li></Link>
            )
          )
        }
      </MenuItemsWrapper>
    </MenuContainer>
  )
}
