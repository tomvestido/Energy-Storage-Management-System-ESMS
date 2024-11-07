import './Styles.css'

function RightSection(){

    return(
        <>  
            <div className='section-element'>
               
                <h1 className='headline'>Charging intervals</h1>

                <p className='text-light'>Selected time in the interval 23:00 - 05:00</p>
                <p className='text-semibold'>00:00</p>

                <p className='text-light'>Minimum energy price in the interval 23:00 - 05:00</p>
                <p className='text-semibold'>243.10 PLN</p>

                <p className='text-light'>Selected time in the interval 10:00 - 18:00</p>
                <p className='text-semibold'>13:00</p>   

                <p className='text-light'>Minimum energy price in the interval 10:00 - 18:00</p>
                <p className='text-semibold'>76.60 PLN</p>
                
            </div>
            
        </>
    )   
}

export default RightSection