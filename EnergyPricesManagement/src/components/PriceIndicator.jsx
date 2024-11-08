import './PriceIndicator.css'
import PropTypes from 'prop-types'

function PriceIndicator(props) {
       
    return (
        <>
            <div className="rectangle">
                <div className={props.style}>{props.hour}</div>
                <div className="rectangle-value">{props.price}</div>
            </div>
        </>
    )
}

// wskazanie wymaganych typow danych dla props
PriceIndicator.propTypes = {
    hour: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default PriceIndicator