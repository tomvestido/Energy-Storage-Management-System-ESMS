import './BatterySoCAnimation.css';
import PropTypes from 'prop-types'

function BatterySoCAnimation(props){
    return(
        <>
            <div className='reactangle-battery-soc'>    
                <div className='reactangle-dynamic' style={{width:props.stateOfCharge}}>
        
                </div>
            </div>
        </>
    )
}

// wskazanie wymaganych typow danych dla props
BatterySoCAnimation.propTypes = {
    stateOfCharge: PropTypes.number.isRequired
}

export default BatterySoCAnimation