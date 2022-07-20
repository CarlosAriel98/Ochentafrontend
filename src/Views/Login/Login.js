import Page from "../../Components/Page";

const LoginUx = ({
  onSignInClick = () => { },
  onLoginClick = () => { }
}) => {
  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Iniciar seccion"
    >
      <form>
      <fieldset>
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" value="" />
        </fieldset>
        <fieldset>
          <label htmlFor="">Contraseña</label>
          <input type="password" name="" id="" value="" />
        </fieldset>
        <button onClick={onSignInClick}>Iniciar seccion</button>
        <button onClick={onLoginClick}>Crear cuenta</button>
      </form>
    </Page>
  );
}
export default LoginUx;
