import LoginStyles from "./_login.module.scss"
import loginImg from "../../assets/images/pablo-sign-in.png"
import logo from "../../assets/images/logo.png"
import LoginForm from "./LoginForm"

type Props = {}

export default function index({ }: Props) {
  return (
    <div className={LoginStyles.login__container}>

      {/* LOGIN IMAGE AT THE LEFT */}
      <div className={LoginStyles.login__left}>
        <img src={logo} className={LoginStyles.logo} alt='LendSqr Logo' />

          <div className={LoginStyles.login__ImageContainer}>
            <img
              src={loginImg}
              alt="Welcome to LendSqr. Kindly login below with your login details"
              className={LoginStyles.login__image}
            />
          </div>
        </div>

        {/* LOGIN FORM SECTION */}
        <div className={LoginStyles.login__FormContainer} >
          <h2 className={LoginStyles.login__title}>Welcome!</h2>
          <h2 className={LoginStyles.login__instruction}>Enter details to login.</h2>
          
          <LoginForm />
        </div>
      </div>
      )
}