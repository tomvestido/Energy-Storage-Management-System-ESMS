import './SettingInput.css';
import PropTypes from 'prop-types'

function SettingInput(props) {
       
    return (
        <>
            <div className="rectangle-measurement">
                <div className={props.style}>{props.description}</div>
                <input 
                    type="text" 
                    className="rectangle2-input"
                    value={props.value}
                    onChange={props.onChange}
                ></input>
            </div>
        </>
    )
}

// wskazanie wymaganych typow danych dla props
SettingInput.propTypes = {
    value: PropTypes.number.isRequired
}

export default SettingInput