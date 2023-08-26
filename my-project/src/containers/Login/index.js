import './style.css';
import Input from "../../components/Input"
//import Button from '../../components/Button';
import HeaderLogo from '../../components/HeaderLogo';
// import logo from "../../assets/logo.png"


const Login = () => {

    return (
        <form className='loginForm'>
            <div className="containerLogin">
                {/* <div className="containerLogo">
                <img src={logo} className="loginLogo" alt="Rozetka logo" />
            </div> */}
                <HeaderLogo />
                <Input isLoggedInput={true} />
                <Input isLoggedInput={false} />
                {/* <Button /> */}
                <button type="submit" className="loginButton">Login</button>
            </div>
        </form>
    )
}

export default Login;