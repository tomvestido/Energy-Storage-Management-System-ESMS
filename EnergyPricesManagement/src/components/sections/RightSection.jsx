import './RightSection.css';
import { BatteryMedium } from 'lucide-react';

function RightSection(props){

    return(
        <>  
            <div className='section-element'>             
                <div className='container-headline'>
                    <BatteryMedium className='img' size={32} color="#20B202" strokeWidth={1.25} absoluteStrokeWidth />               
                    <text className='section-headline'>Charging intervals</text>
                </div>

                <p className='text-light'>Selected time in the interval 00:00 - 05:00</p>
                <p className='text-semibold'>{props.selectedHourChargeInterval1}</p>

                <p className='text-light'>Minimum energy price in the interval 00:00 - 05:00</p>
                <p className='text-semibold'>{props.minimumEnergyPriceChargeInterval1}</p>

                <p className='text-light'>Selected time in the interval 10:00 - 18:00</p>
                <p className='text-semibold'>{props.selectedHourChargeInterval2}</p>   

                <p className='text-light'>Minimum energy price in the interval 10:00 - 18:00</p>
                <p className='text-semibold'>{props.minimumEnergyPriceChargeInterval2}</p>
                
            </div>          
        </>
    )   
}

export default RightSection