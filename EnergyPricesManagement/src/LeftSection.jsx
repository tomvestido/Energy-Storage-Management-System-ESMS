import './Styles.css'

function LeftSection(){

    return(
        <>  
            <div className='section-element'>
               
                <h1 className='headline'>Discharging intervals</h1>

                <p className='text-light'>Selected time in the interval 06:00 - 09:00</p>
                <p className='text-semibold'>07:00</p>


                <p className='text-light'>Maximum energy price in the interval 06:00 - 09:00</p>
                <p className='text-semibold'>381.87 PLN</p>

                <p className='text-light'>Selected time in the interval 19:00 - 22:00</p>
                <p className='text-semibold'>19:00</p>   

                <p className='text-light'>Maximum energy price in the interval 19:00 - 22:00</p>
                <p className='text-semibold'>469.51 PLN</p>

            </div>
            
        </>
    )   
}

export default LeftSection