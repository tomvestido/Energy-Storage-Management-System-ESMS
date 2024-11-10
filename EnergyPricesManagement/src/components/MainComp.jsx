import LeftSection from '../LeftSection.jsx'
import RightSection from '../RightSection.jsx'
import CenterSection from '../CenterSection.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import PriceList from './PriceList.jsx'
import './MainComp.css'

function MainComp() {
    const [hour, setHour] = useState(0);
    const [hourCounter, setHourCounter] = useState(0);
    const [status, setStatus] = useState('Stopped');
    const [bmsStatus, setBmsStatus] = useState('Inaction');
    const [stateOfCharge, setStateOfCharge] = useState(74);
    const [chargePower , setChargePower] = useState(0);
    const [rechargePower , setRechargePower] = useState(0);
    
    // odliczanie godziny
    useEffect(() => {
        if(hourCounter == 1) {
            const timer = setInterval(() => {
                setHour(hour => hour + 1);
            }, 1000);

            setStatus('Running');

            if(hour == 23) {
                setHour(0);
            }

            if(hour == 6) {
                setBmsStatus('Charging');
            }

            if(hour == 10) {
                setBmsStatus('Inaction');
            }

            // funkcja czyszczaca
            return () => {
                clearInterval(timer);
            }
        } else {
            setStatus('Stopped');
        }
    }, [hourCounter, hour]) 

    useEffect(() => {
        if(bmsStatus == 'Charging') {
            const timer = setInterval(() => {
                setStateOfCharge(stateOfCharge => stateOfCharge + 1);
            }, 1000);

            // funkcja czyszczaca
            return () => {
                clearInterval(timer);
            }
        }


    }, [stateOfCharge, bmsStatus])

    return (
        <>  
            <PriceList />

            <div className='section-panels'> 
                <LeftSection />
                <CenterSection bmsStatus={bmsStatus} batterySoC={stateOfCharge} chargePower={chargePower} rechargePower={rechargePower} />
                <RightSection />
            </div>

            <div className='control-panel'>
                <button className='button-4' 
                onClick={() => setHourCounter(1)}
                >Start</button>

                <button className='button-4' 
                onClick={() => setHourCounter(0)}        
                >Stop</button>

                <button className='button-4' 
                onClick={() => setHour(0)}        
                >Reset</button>
            </div>

            <p className='text-transparent'>Hour = {hour}</p>
            <p className='text-transparent'>Status = {status}</p>
    
        </>
    )
}

export default MainComp