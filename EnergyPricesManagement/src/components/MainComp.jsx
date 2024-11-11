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
    const [downThreshold, setDownThreshold] = useState(0);
    const [upThreshold, setUpThreshold] = useState(25);


    const energyPricesRechargeInterval1 = prices.energyPrices.slice(6, 10);
    const minimumEnergyPriceRechargeInterval1 = Math.min(...energyPricesRechargeInterval1);
    const selectedHourInRechargeInterval1 = energyPricesRechargeInterval1.indexOf(minimumEnergyPriceRechargeInterval1);

    
    
    // odliczanie godziny
    useEffect(() => {
        if(hourCounter == 1) {
            setStatus('Running');
            const timer = setInterval(() => {
                setHour(hour => hour + 1);
            }, 1000);
            

            

       

            if(hour == (selectedHourInRechargeInterval1 + 6) && stateOfCharge > downThreshold) {
                setBmsStatus('Recharging');

            } else if (hour == (selectedHourInRechargeInterval1 + 6) && stateOfCharge < downThreshold) {
                setBmsStatus('Inaction');

            }

            if(hour == 10) {
                setBmsStatus('Inaction');
            }

            if(hour == 23) {
                setHour(0);
            }

            return () => {
                clearInterval(timer);
            }

        } else {
            setStatus('Stopped');
        }
    }, [hourCounter, hour, stateOfCharge, downThreshold, upThreshold, selectedHourInRechargeInterval1]) 

    useEffect(() => {
        if(bmsStatus == 'Charging') {
            const timer = setInterval(() => {
                setStateOfCharge(stateOfCharge => stateOfCharge + 1);
            }, 1000);

            return () => {
                clearInterval(timer);
            }
        } else if (bmsStatus == 'Recharging') 
        {
            const timer = setInterval(() => {
                setStateOfCharge(stateOfCharge => stateOfCharge - 1);
            }, 1000);

            return () => {
                clearInterval(timer);
            }
        }

    }, [stateOfCharge, bmsStatus])

    return (
        <>  
            <PriceList />

            <div className='section-panels'> 
                <LeftSection selectedHourRechargeInterval1={"0" + (selectedHourInRechargeInterval1 + 6) + ":00"} minimumEnergyPriceRechargeInterval1={minimumEnergyPriceRechargeInterval1}/>
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