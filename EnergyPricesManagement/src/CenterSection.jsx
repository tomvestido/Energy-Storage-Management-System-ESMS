import './Styles.css'
import MeasurementIndicator from './MeasurementIndicator.jsx'

function CenterSection(){

    return(
        <>  
            <div className='section-element'> 
                
                <div className='container-white'>
                    <MeasurementIndicator/>
                    <MeasurementIndicator/>
                    <MeasurementIndicator/>
                </div>

                



                <div className='container-white'>
                    <MeasurementIndicator/>
                    <MeasurementIndicator/>
                    <MeasurementIndicator/>
                </div>
     
            </div>    
        </>
    )   
}

export default CenterSection