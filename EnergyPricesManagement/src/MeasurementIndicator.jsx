import './Styles.css'
import PropTypes from 'prop-types'

function MeasurementIndicator(props) {
       
    return (
        <>
            <div className="rectangle2">
                <div className="rectangle2-header">{props.hour}</div>
                <div className="rectangle2-value">{props.price}</div>
            </div>
        </>
    )
}

// wskazanie wymaganych typow danych dla props
MeasurementIndicator.propTypes = {
    hour: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default MeasurementIndicator