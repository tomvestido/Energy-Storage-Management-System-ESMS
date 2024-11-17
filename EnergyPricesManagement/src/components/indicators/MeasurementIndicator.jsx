import './MeasurementIndicator.css';
import PropTypes from 'prop-types'

function MeasurementIndicator(props) {
       
    return (
        <>
            <div className="rectangle-measurement">
                <div className={props.style}>{props.description}</div>
                <div className="rectangle2-value">{props.value}</div>
            </div>
        </>
    )
}

// wskazanie wymaganych typow danych dla props
MeasurementIndicator.propTypes = {
    style: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default MeasurementIndicator