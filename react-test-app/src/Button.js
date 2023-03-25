export const Button = (props) => {
    /*const pressed = () =>{
      return alert('presinado')
        
    }*/
    return (
        <button onClick={props.onPress}>{ props.name }</button>
    )
}