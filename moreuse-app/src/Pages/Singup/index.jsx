import {Page} from "../../Components/Page";
import {Button} from "../../Components/Button";
import {FormContainer,FormControl} from "../../globalStyles"
import { useForm } from "react-hook-form";

export const SingUp = () => {

  const {register,handleSubmit, formState:{errors}} = useForm();

  const onSubmitSingUp = (data) => {
    console.log('data',data);
  }

  return (
    <Page title="Regístrarse">
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitSingUp)}>
          <FormControl>
            <label>Nombre</label>
            <input type="text" {...register("name",{required: true})}/>
            {errors.name?.type === 'required' && <span>Campo requerido</span>}
          </FormControl>

          <FormControl>
            <label>Correo</label>
            <input type="email" {...register("emailAddress",{required: true,
              pattern: /^[A-Za-z]+[A-Za-z0-9_\.]*@[A-Za-z0-9]+\.[A-Za-z0-9]+/i})}/>
              {errors.emailAddress?.type === 'required' && <span>Campo requerido</span>}
              {errors.emailAddress?.type === 'pattern' && <span>Debes ingresar un correo válido</span>}
          </FormControl>

          <FormControl>
            <label>Dirección</label>
            <input type="text" />
          </FormControl>

          <FormControl>
            <label>Celular</label>
            <input type="tel" {...register("tel",{required:true, maxLength:10, pattern: /^[1-9]+$/})}/>
              {errors.tel?.type === 'required' && <span>Campo requerido</span>}
              {errors.tel?.type === 'pattern' && <span>Formato no permitido</span>}
              {errors.tel?.type === 'maxLength' && <span>Máximo 10 caracteres</span>}
          </FormControl>

          <FormControl>
            <label>Contraseña</label>
            <input type="password" {...register("password",{required: true,minLength:8})}/>
              {errors.password?.type === 'required' && <span>Campo requerido</span>}
              {errors.password?.type === 'minLength' && <span>Mínimo 8 caracteres</span>}
          </FormControl>

          <Button type='submit' text="Registrar" />
        </form>
      </FormContainer>
    </Page>
  )
}

export default SingUp;
