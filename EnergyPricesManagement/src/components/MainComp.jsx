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

            // funkcja czyszczaca
            return () => {
                clearInterval(timer);
            }
        } else {
            setStatus('Stopped');
        }
    }, [hourCounter, hour]) 

    return (
        <>  
            <PriceList />

            <div className='section'> 
                <LeftSection />
                <CenterSection />
                <RightSection />
            </div>

            <div className='section'>
                <button className='button-4' 
                onClick={() => setHourCounter(1)}
                >Start</button>
                <button className='button-4' 
                onClick={() => setHourCounter(0)}
                    
                >Stop</button>
                <p className='text-transparent'>{hour}</p>
                <p className='text-transparent'>{status}</p>
                <p className='text-transparent'>{bmsStatus}</p>
                

            </div>

    
        </>
    )
}

export default MainComp