import './style.css';
import Input from "../../components/Input"
import Button from '../../components/Button';
import HeaderLogo from '../../components/HeaderLogo';
// import logo from "../../assets/logo.png"


const Login = () => {

    return (
        <div className="containerLogin">
            {/* <div className="containerLogo">
                <img src={logo} className="loginLogo" alt="Rozetka logo" />
            </div> */}
            <HeaderLogo/>
            <Input isLoggedInput={true}/>
            <Input isLoggedInput={false}/>
            <Button />
        </div>
    )
}

export default Login;