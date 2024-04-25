import './index.scss'
const Button = ({value, btnColor}) => {
    return (
        <button className={btnColor}>{value}</button>
    )
}

export default Button