import LoginStyle from "./_login.module.scss"
import InputField from '../../components/form/inputFields/input/Input'
import CommonInputStyles from "../../components/form/inputFields/_common-input-styles.module.scss"
import usePasswordToggle from "../../hooks/usePasswordToggle"


const LoginForm = () => {
  const [InputType, Icon] = usePasswordToggle();
  
  return (
    <form className={LoginStyle.loginForm}>
      <InputField type="email" name="email" placeholder="Email"/>
      <InputField 
        type={InputType}
        name="password" 
        placeholder="Password" 
        icon={Icon}
        iconClassName={CommonInputStyles.iconRight} 
      />
      <a href="#resetPassword" className={LoginStyle.fpassword}>forget Password? </a>
      <input type="submit" value="Log in" className= {LoginStyle.login__btn} />
    </form>
  )
}

export default LoginForm