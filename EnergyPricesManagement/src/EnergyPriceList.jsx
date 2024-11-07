import './Styles.css'
import EnergyPriceIndicator from './EnergyPriceIndicator.jsx'  
import LeftSection from './LeftSection.jsx'
import RightSection from './RightSection.jsx'
import CenterSection from './CenterSection.jsx'
import { useState } from 'react'

function EnergyPriceList() {
    const [hour, setHour] = useState(0);
    
    return (
        <>  
            <div className='container'>
            
                <EnergyPriceIndicator hour='00:00' price={69.75}/>
                <EnergyPriceIndicator hour='01:00' price={341.22}/>
                <EnergyPriceIndicator hour='02:00' price={250.75}/>
                <EnergyPriceIndicator hour='03:00' price={124.75}/>
                <EnergyPriceIndicator hour='04:00' price={128.75}/>
                <EnergyPriceIndicator hour='05:00' price={1200.75}/>
                <EnergyPriceIndicator hour='06:00' price={1104.75}/>
                <EnergyPriceIndicator hour='07:00' price={754.75}/>
                <EnergyPriceIndicator hour='08:00' price={854.75}/>
                <EnergyPriceIndicator hour='09:00' price={947.75}/>
                <EnergyPriceIndicator hour='10:00' price={444.75}/>
                <EnergyPriceIndicator hour='11:00' price={69.75}/>
                <EnergyPriceIndicator hour='12:00' price={69.75}/>
                <EnergyPriceIndicator hour='13:00' price={69.75}/>
                <EnergyPriceIndicator hour='14:00' price={69.75}/>
                <EnergyPriceIndicator hour='15:00' price={69.75}/>
                <EnergyPriceIndicator hour='16:00' price={69.75}/>
                <EnergyPriceIndicator hour='17:00' price={69.75}/>
                <EnergyPriceIndicator hour='18:00' price={69.75}/>
                <EnergyPriceIndicator hour='19:00' price={69.75}/>
                <EnergyPriceIndicator hour='20:00' price={69.75}/>
                <EnergyPriceIndicator hour='21:00' price={69.75}/>
                <EnergyPriceIndicator hour='22:00' price={69.75}/>
                <EnergyPriceIndicator hour='23:00' price={69.75}/>
            </div>

            <div className='section'> 
                <LeftSection />
                <CenterSection />
                <RightSection />
            </div>

            <div className='section'>
                <button className='button-4' onClick={
                    () => setHour((hour) => hour + 1)}
                    
                >Start</button>
                <p className='text-light'>{hour}</p>

            </div>

    
        </>
    )
}

export default EnergyPriceList