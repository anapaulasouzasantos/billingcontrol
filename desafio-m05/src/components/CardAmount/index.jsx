import './styles.css'

const CardAmount = ({ title, value, icon, bgcolor }) => {
    return (
        <div className='container-card-amount' style={{backgroundColor: bgcolor}}>
            <img src={icon}></img>
            <div className='amount-data'>
                <span className='amount-title'>{title}</span>
                <span className='amount-value'>{value}</span>
            </div>
        </div>
    )
}

export default CardAmount;