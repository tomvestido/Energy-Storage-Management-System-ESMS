import './CenterSection.css'
import MeasurementIndicator from './components/MeasurementIndicator.jsx'
import BatterySoCAnimation from './components/BatterySoCAnimation.jsx';

function CenterSection(props){

    return(
        <>  
            <div className='section-element'>            
                <div className='container-white'>
                    <MeasurementIndicator description="Down threshold" style='rectangle-measurement-header-orange'value={props.downThreshold + " %"}/>
                    <MeasurementIndicator description="Status" style='rectangle-measurement-header-blue' value={props.bmsStatus}/>
                    <MeasurementIndicator description="Up threshold" style='rectangle-measurement-header' value={props.upThreshold + " %"}/>
                </div>

                <div className='container-white'>
                    <BatterySoCAnimation stateOfCharge={props.batterySoCScaled}/>
                </div>

                <div className='container-white'>
                    <MeasurementIndicator description="Recharging power" style='rectangle-measurement-header-orange' value={props.rechargePower + " kW"}/>
                    <MeasurementIndicator description="State of Charge" style='rectangle-measurement-header-blue' value={props.batterySoC + " %"}/>
                    <MeasurementIndicator description="Charging power" style='rectangle-measurement-header' value={props.chargePower + " kW"}/>
                </div>
     
            </div>    
        </>
    )   
}

export default CenterSection