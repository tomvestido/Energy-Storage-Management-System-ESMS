import './CenterSection.css'
import MeasurementIndicator from './components/MeasurementIndicator.jsx'

function CenterSection(props){

    return(
        <>  
            <div className='section-element'> 
                
                <div className='container-white'>
                    <MeasurementIndicator description="Down threshold"/>
                    <MeasurementIndicator description="Status" value={props.bmsStatus}/>
                    <MeasurementIndicator description="Up threshold"/>
                </div>

                <div className='container-white'>
                    <progress  className='battery-fill' value={props.batterySoC}  max={100} min={0}  />

                </div>

                <div className='container-white'>
                    <MeasurementIndicator description="Recharging power" value={props.chargePower}/>
                    <MeasurementIndicator description="State of Charge" value={props.batterySoC + " %"}/>
                    <MeasurementIndicator description="Charging power" value={props.rechargePower}/>
                </div>
     
            </div>    
        </>
    )   
}

export default CenterSection