import './Styles.css'
import PropTypes from 'prop-types'

function EnergyPriceIndicator(props) {
       
    return (
        <>
            <div className="rectangle">
                <div className="rectangle-header">{props.hour}</div>
                <div className="rectangle-value">{props.price}</div>
            </div>
        </>
    )
}

// wskazanie wymaganych typow danych dla props
EnergyPriceIndicator.propTypes = {
    hour: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default EnergyPriceIndicator