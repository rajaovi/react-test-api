import './button.scss'

const Button = ({value, btnColor}) => {
    return (
        <button className={`button ${btnColor}`}>{value}</button>
    )
}

export default Button