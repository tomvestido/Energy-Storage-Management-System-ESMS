import './CenterSection.css'
import SettingInput from './../inputs/SettingInput.jsx';
import BatterySoCAnimation from '../indicators/BatterySoCAnimation.jsx';

function EditSection(props){

    return(
        <>  
            <div className='section-element'>            
                <div className='container-white'>
                    <SettingInput description="++++" style='rectangle-measurement-header-orange'value={props.downThreshold + " %"}/>
                    <SettingInput description="____" style='rectangle-measurement-header' value={props.upThreshold + " %"}/>
                </div>

                <div className='container-white'>
                    <BatterySoCAnimation stateOfCharge={props.batterySoCScaled}/>
                </div>

                <div className='container-white'>
                    <SettingInput description="Recharging power" style='rectangle-measurement-header-orange' value={props.rechargePower + " kW"}/>
                    <SettingInput description="Charging power" style='rectangle-measurement-header' value={props.chargePower + " kW"}/>
                </div>
     
            </div>    
        </>
    )   
}

export default EditSection