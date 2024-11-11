import LeftSection from '../LeftSection.jsx'
import RightSection from '../RightSection.jsx'
import CenterSection from '../CenterSection.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import PriceList from './PriceList.jsx'
import './MainComp.css'
import * as prices from './../data/energyPrices.jsx';

function MainComp() {
    const [hour, setHour] = useState(0);
    const [hourCounter, setHourCounter] = useState(0);
    const [status, setStatus] = useState('Stopped');
    const [bmsStatus, setBmsStatus] = useState('Inaction');
    const [stateOfCharge, setStateOfCharge] = useState(0);
    const [chargePower , setChargePower] = useState(150);
    const [rechargePower , setRechargePower] = useState(100);
    const [downThreshold, setDownThreshold] = useState(5);
    const [upThreshold, setUpThreshold] = useState(25);

    const [tablePricesData, setTablePricesData] = useState(prices.energyPrices);
    const minimumEnergyPriceInterval0609 = Math.min(...tablePricesData);
    const selectedHourInInterval0609 = tablePricesData.indexOf(minimumEnergyPriceInterval0609);

    
    console.log(selectedHourInInterval0609);
    
    // odliczanie godziny
    useEffect(() => {
        if(hourCounter == 1) {
            setStatus('Running');
            const timer = setInterval(() => {
                setHour(hour => hour + 1);
            }, 1000);
            

            

            if(hour == 23) {
                setHour(0);
            }

            if(hour == 6 && stateOfCharge < upThreshold) {
                setBmsStatus('Charging');
            } else if (hour > 6 && stateOfCharge > upThreshold) {
                setBmsStatus('Inaction');
            }

            if(hour == 10) {
                setBmsStatus('Inaction');
            }

            return () => {
                clearInterval(timer);
            }

        } else {
            setStatus('Stopped');
        }
    }, [hourCounter, hour, stateOfCharge, upThreshold]) 

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
                <CenterSection bmsStatus={bmsStatus} batterySoC={stateOfCharge} batterySoCScaled={stateOfCharge * 2.72} chargePower={chargePower} rechargePower={rechargePower} downThreshold={downThreshold} upThreshold={upThreshold}/>
                <RightSection />
            </div>

            <div className='control-panel'>
                <button className='button-4' 
                onClick={() => setHourCounter(1)} disabled={status == 'Running'}
                >Start</button>

                <button className='button-4' 
                onClick={() => setHourCounter(0)} disabled={status == 'Stopped'}       
                >Stop</button>

                <button className='button-4' 
                onClick={() => setHour(0)} disabled={status == 'Stopped'}       
                >Reset</button>
            </div>

            <p className='text-transparent'>Hour = {hour}</p>
            <p className='text-transparent'>Status = {status}</p>
    
        </>
    )
}

export default MainComp