import './PriceIndicator.css'
import PropTypes from 'prop-types'
import { CircleArrowDown } from 'lucide-react'

function PriceIndicator(props) {
       

    if (props.decision == true) {
        return (
            <div className="container-all">

                <div className="decision">
                    <CircleArrowDown width={70} height={30} /> 
                </div>  

                <div className="rectangle">
                    <div className={props.style}>{props.hour}</div>
                    <div className="rectangle-value">{props.price}</div> 
                </div> 

       
            
            </div>
        )
    } else {
        return (
            <>
            <div className="container-all">
                <div className="rectangle">
                    <div className={props.style}>{props.hour}</div>
                    <div className="rectangle-value">{props.price}</div>             
                </div>   
            </div>
            </>
        )
    }
}

// wskazanie wymaganych typow danych dla props
PriceIndicator.propTypes = {
    hour: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default PriceIndicator