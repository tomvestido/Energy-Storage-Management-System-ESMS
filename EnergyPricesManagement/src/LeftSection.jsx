import './Styles.css'

function LeftSection(props){

    return(
        <>  
            <div className='section-element'>
                <h1 className='headline'>Discharging intervals</h1>

                <p className='text-light'>Selected time in the interval 06:00 - 09:00</p>
                <p className='text-semibold'>{props.selectedHourRechargeInterval1}</p>

                <p className='text-light'>Maximum energy price in the interval 06:00 - 09:00</p>
                <p className='text-semibold'>{props.minimumEnergyPriceRechargeInterval1}</p>

                <p className='text-light'>Selected time in the interval 19:00 - 23:00</p>
                <p className='text-semibold'>{props.selectedHourRechargeInterval2}</p>   

                <p className='text-light'>Maximum energy price in the interval 19:00 - 23:00</p>
                <p className='text-semibold'>{props.minimumEnergyPriceRechargeInterval2}</p>

            </div>
        </>
    )   
}

export default LeftSection