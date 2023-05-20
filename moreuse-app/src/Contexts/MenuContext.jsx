import React, {createContext, useState} from "react";

const initialState = {
  isOpen: false
};

export const MenuContext = createContext(initialState);//false,un numero, un objeto, segun la necesidad

export const MenuContextStore = (props) => {

  const [menuState,setMenuState] = useState(initialState);

  const onChangeOpenCloseMenu = () => {
    setMenuState({...menuState, isOpen: !menuState.isOpen });
  }

  const onCloseMenu = () =>{
    setMenuState({...menuState, isOpen: false });
  }

  return (
    <MenuContext.Provider value={{ menuState, onChangeOpenCloseMenu, onCloseMenu }}>
      { props.children }
    </MenuContext.Provider>
  )
}
