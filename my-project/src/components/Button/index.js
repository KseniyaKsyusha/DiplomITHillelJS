import './style.css';

const Button = ({ type, className, onClick, value }) => {
    return (
        <button type={type} className={className} onClick={onClick}>{value}</button>
    )    
}

export default Button;

