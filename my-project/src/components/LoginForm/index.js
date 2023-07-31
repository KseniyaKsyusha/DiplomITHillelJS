import './style.css';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";




const LoginForm = () => {

  const [percentBar, setPercentBar] = useState('');
  const [passInputChange, setPassInputChange] = useState('');
  const [passInputClasses, setPassInputClasses] =
    useState('loginInput');
  const [toggleIcon, setToggleIcon] = useState(<IoEyeOff />);
  const [toggleIconClasses, setToggleIconClasses] = useState(
    'toggle-icon-passive'
  );
  const [passLabel, setPassLabel] = useState('Strength');
  const [type, setType] = useState('password');

  const addClass = (className) => {
    setPercentBar('');
    if (className) {
      setPercentBar(className);
    }
  };

  const handlePassInput = (e) => {
    setPassInputChange(e.target.value);
    if (passInputChange.length === 0) {
      setPassLabel('Strength');
      addClass();
    } else if (passInputChange.length <= 4) {
      setPassLabel('Weak');
      addClass('weak');
    } else if (passInputChange.length <= 7) {
      setPassLabel('Not Bad');
      addClass('average');
    } else {
      setPassLabel('Strong');
      addClass('strong');
    }
  };

  const togglePassInput = (e) => {
    if (type === 'password') {
      setType('text');
      setToggleIcon(<IoEye />);
    } else {
      setType('password');
      setToggleIcon(<IoEyeOff />);
    }
  };


  ////////////////////////////////////////////////
  const [isShown, setIsShown] = useState(false);
  const toggleEye = (event) => {
    event.preventDefault();
    if (!isShown) {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  }
  //////////////////////////////////////////////////

  return (
    <form className='loginForm'>

      <input
        id="login"
        name="login"
        type="text"
        placeholder="User name"
        className="loginInput"
      />

      <div >
        <input
          id="password"
          name="password"
          placeholder="Password"
          className="loginInput"
        />

        <i className="eye_icon" onClick={toggleEye}>
          {isShown ? <IoEye /> : <IoEyeOff />}
        </i>

      </div>


      <div className='input-group'>
        <input
          type={type}
          className={passInputClasses}
          placeholder='Enter your password'
          value={passInputChange}
          onChange={handlePassInput}
        />
        <span
          onClick={togglePassInput}
          className={`toggle ${toggleIconClasses}`}
        >
          {toggleIcon}
        </span>
     
      </div>
      <div className='pass-strength'>
        <div className='strength-percent'>
          <span className={percentBar}></span>
        </div>
        <span className='strength-label'>{passLabel}</span>
      </div>

      <button type="submit" className="loginButton">Login</button>

    </form>
  );
}

export default LoginForm;