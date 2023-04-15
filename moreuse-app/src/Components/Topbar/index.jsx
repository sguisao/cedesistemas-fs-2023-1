import {IoMenu} from "react-icons/io5"
import { MenuIconContainer, TopbarContainer } from "./styles"
export const Topbar = () => {

  return (
    <TopbarContainer>
      <MenuIconContainer>
        <IoMenu />
      </MenuIconContainer>
      <div>
        <img alt="logo" width="150px" src="assets/logo.png" />
      </div>
    </TopbarContainer>
  )
}
