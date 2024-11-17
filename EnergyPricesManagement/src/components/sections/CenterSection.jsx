import './CenterSection.css'
import MeasurementIndicator from '../indicators/MeasurementIndicator.jsx'
import BatterySoCAnimation from '../indicators/BatterySoCAnimation.jsx';
import SettingInput from './../inputs/SettingInput.jsx';
import { useState } from 'react';
function CenterSection(props){

    const [downThreshold, setDownThreshold] = useState(props.downThreshold || '');
    const [upThreshold, setUpThreshold] = useState(props.upThreshold || '');
    const [rechargePower, setRechargePower] = useState(props.rechargePower || '');
    const [chargePower, setChargePower] = useState(props.chargePower || '');

    const handleSubmit = () => {
        const data = {
            downThreshold,
            upThreshold,
            rechargePower,
            chargePower,
        };

        if (props.onSubmit) {
            props.onSubmit(data); // Przekazanie danych na zewnątrz komponentu
        }
        props.setShowEditParameters(false);
    };

    if(props.showEditParameters){
        return(
            <>  
                <div className='section-element-edit'>            
                    <div className='container-white-edit'>
                        <SettingInput 
                            description="Down threshold" 
                            style='rectangle-measurement-header-orange' 
                            value={downThreshold}
                            onChange={(e) => setDownThreshold(e.target.value)}/>
                        <SettingInput 
                            description="Up threshold" 
                            style='rectangle-measurement-header'
                            value={upThreshold} 
                            onChange={(e) => setUpThreshold(e.target.value)}/>
                    </div>
    
                    <div className='container-white-edit'>
                        <SettingInput 
                            description="Recharging power" 
                            style='rectangle-measurement-header-orange' 
                            value={rechargePower}
                            onChange={(e) => setRechargePower(e.target.value)}/>
                        <SettingInput 
                            description="Charging power" 
                            style='rectangle-measurement-header' 
                            value={chargePower}
                            onChange={(e) => setChargePower(e.target.value)}/>
                    </div>
              
                    <div className='container-white-edit'>
                        <button 
                            onClick={handleSubmit} 
                            className='button-4'>
                            Accept
                        </button>

                    </div>
                </div>    
            </>
        ) 
    } else {
        return(
            <>  
                <div className='section-element'>            
                    <div className='container-white'>
                        <MeasurementIndicator 
                            description="Down threshold" 
                            style='rectangle-measurement-header-orange'
                            value={props.downThreshold + " %"}/>
                        <MeasurementIndicator 
                            description="Status" 
                            style='rectangle-measurement-header-blue' 
                            value={props.bmsStatus}/>
                        <MeasurementIndicator 
                            description="Up threshold" 
                            style='rectangle-measurement-header' 
                            value={props.upThreshold + " %"}/>
                    </div>
    
                    <div className='container-white'>
                        <BatterySoCAnimation 
                            stateOfCharge={props.batterySoCScaled}
                        />
                    </div>
    
                    <div className='container-white'>
                        <MeasurementIndicator 
                            description="Recharging power" 
                            style='rectangle-measurement-header-orange' 
                            value={props.rechargePower + " kW"}/>
                        <MeasurementIndicator 
                            description="State of Charge" 
                            style='rectangle-measurement-header-blue' 
                            value={props.batterySoC + " %"}/>
                        <MeasurementIndicator 
                            description="Charging power" 
                            style='rectangle-measurement-header' 
                            value={props.chargePower + " kW"}/>
                    </div>
                </div>    
            </>
        ) 
    }
}

export default CenterSection