import './Styles.css'

function RightSection(props){

    return(
        <>  
            <div className='section-element'>
               
                <h1 className='headline'>Charging intervals</h1>

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