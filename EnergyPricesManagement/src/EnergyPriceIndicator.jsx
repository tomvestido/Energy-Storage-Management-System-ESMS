import './Styles.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

function EnergyPriceIndicator(props) {
    const [energyPrice, setCount] = useState(69.75)
   
    return (
        <>
            <div className="rectangle">
                <div className="rectangle-header">{props.hour}</div>
                <div className="rectangle-value">{energyPrice}</div>
            </div>
        </>
    )
}

EnergyPriceIndicator.propTypes = {
    hour: PropTypes.string.isRequired // Declare hour as a required string prop
  }

export default EnergyPriceIndicator