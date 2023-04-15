import {Page} from "../../Components/Page";
import {Button} from "../../Components/Button";
import {FormContainer,FormControl} from "../../globalStyles"

export const Singup = () => {

  return (
    <Page title="Regístrarse">
      <FormContainer>
        <form>
          <FormControl>
            <label>Nombre</label>
            <input type="text" />
          </FormControl>
          <FormControl>
            <label>Correo</label>
            <input type="email" />
          </FormControl>
          <FormControl>
            <label>Dirección</label>
            <input type="text" />
          </FormControl>
          <FormControl>
            <label>Celular</label>
            <input type="tel" />
          </FormControl>
          <FormControl>
            <label>Contraseña</label>
            <input type="password" />
          </FormControl>
          <Button text="Registrar" />
        </form>
      </FormContainer>
    </Page>
  )
}

export default Singup;
