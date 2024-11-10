import '../Styles.css'
import PropTypes from 'prop-types'

function MeasurementIndicator(props) {
       
    return (
        <>
            <div className="rectangle2">
                <div className="rectangle2-header">{props.description}</div>
                <div className="rectangle2-value">{props.value}</div>
            </div>
        </>
    )
}

// wskazanie wymaganych typow danych dla props
MeasurementIndicator.propTypes = {
    description: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}

export default MeasurementIndicator