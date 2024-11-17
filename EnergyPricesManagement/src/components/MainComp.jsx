import LeftSection from './sections/LeftSection.jsx'
import RightSection from './sections/RightSection.jsx'
import CenterSection from './sections/CenterSection.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import PriceList from './PriceList.jsx'
import './MainComp.css'
import * as prices from './../data/energyPrices.jsx';
import ThemeChangeButton from './buttons/ThemeChangeButton.jsx';
import Clock from './indicators/Clock.jsx';

function MainComp() {
    const [hour, setHour] = useState(0);
    const [hourCounter, setHourCounter] = useState(0);
    const [status, setStatus] = useState('Stopped');
    const [bmsStatus, setBmsStatus] = useState('Inaction');
    const [stateOfCharge, setStateOfCharge] = useState(50);
    const [chargePower, setChargePower] = useState(150);
    const [rechargePower, setRechargePower] = useState(100);
    const [downThreshold, setDownThreshold] = useState(20);
    const [upThreshold, setUpThreshold] = useState(80);
    const [showEditParameters, setShowEditParameters] = useState(false);

    // przedziały rozładowania 6-9 oraz 19-23
    const energyPricesRechargeInterval1 = prices.energyPrices.slice(6, 10);
    const maximumEnergyPriceRechargeInterval1 = Math.max(...energyPricesRechargeInterval1);
    const selectedHourInRechargeInterval1 = energyPricesRechargeInterval1.indexOf(maximumEnergyPriceRechargeInterval1);
    
    const energyPricesRechargeInterval2 = prices.energyPrices.slice(19, 23);
    const maximumEnergyPriceRechargeInterval2 = Math.max(...energyPricesRechargeInterval2);
    const selectedHourInRechargeInterval2 = energyPricesRechargeInterval2.indexOf(maximumEnergyPriceRechargeInterval2);

    // przedziały ładowania 0-5 oraz 10-18
    const energyPricesChargeInterval1 = prices.energyPrices.slice(0, 6);
    const minimumEnergyPriceChargeInterval1 = Math.min(...energyPricesChargeInterval1);
    const selectedHourInChargeInterval1 = energyPricesChargeInterval1.indexOf(minimumEnergyPriceChargeInterval1);

    const energyPricesChargeInterval2 = prices.energyPrices.slice(10, 19);
    const minimumEnergyPriceChargeInterval2 = Math.min(...energyPricesChargeInterval2);
    const selectedHourInChargeInterval2 = energyPricesChargeInterval2.indexOf(minimumEnergyPriceChargeInterval2);

    // odliczanie godziny
    useEffect(() => {
        if(hourCounter == 1) 
        {
            setStatus('Running');
            const timer = setInterval(() => {
                setHour(hour => hour + 1);
            }, 3000);

            if(hour == 23) {
                setHour(0);
            }

            return () => {
                clearInterval(timer);
            }
        }
    }, [hourCounter, hour]);

    useEffect(() => {
        if(hourCounter == 1) {                 
            if(hour == (selectedHourInRechargeInterval1 + 6) && stateOfCharge > downThreshold) {
                setBmsStatus('Recharging');

            } else if (hour == (selectedHourInChargeInterval1) && stateOfCharge < upThreshold) {
                setBmsStatus('Charging');

            } else if (hour == (selectedHourInRechargeInterval2 + 19) && stateOfCharge > downThreshold) {
                setBmsStatus('Recharging');
 
            } else if (hour == (selectedHourInChargeInterval2 + 10) && stateOfCharge < upThreshold) {
                setBmsStatus('Charging');
            }
            else {
                setBmsStatus('Inaction');
            }
        } else {
            setStatus('Stopped');
            setBmsStatus('Inaction');
        }
    }, [hourCounter, hour, stateOfCharge, downThreshold, upThreshold, selectedHourInRechargeInterval1, selectedHourInRechargeInterval2, selectedHourInChargeInterval1, selectedHourInChargeInterval2]) 

    useEffect(() => {
        if(bmsStatus == 'Charging') {
            const timer = setInterval(() => {
                setStateOfCharge(stateOfCharge => stateOfCharge + 1);
            }, (1000/chargePower));

            return () => {
                clearInterval(timer);
            }
        } else if (bmsStatus == 'Recharging') 
        {
            const timer = setInterval(() => {
                setStateOfCharge(stateOfCharge => stateOfCharge - 1);
            }, (1000/rechargePower));

            return () => {
                clearInterval(timer);
            }
        }

    }, [stateOfCharge, bmsStatus, chargePower, rechargePower]);

    return (
        <>  
            <PriceList 
                selectedHourInRechargeInterval1={(selectedHourInRechargeInterval1 + 6)} 
                selectedHourInRechargeInterval2={(selectedHourInRechargeInterval2 + 19)} 
                selectedHourInChargeInterval1={(selectedHourInChargeInterval1)} 
                selectedHourInChargeInterval2={(selectedHourInChargeInterval2 + 10)}
            />

            <div className='section-panels'> 
                <LeftSection 
                    selectedHourRechargeInterval1={"0" + (selectedHourInRechargeInterval1 + 6) + ":00"} 
                    minimumEnergyPriceRechargeInterval1={maximumEnergyPriceRechargeInterval1} 
                    selectedHourRechargeInterval2={(selectedHourInRechargeInterval2 + 19) + ":00"} 
                    minimumEnergyPriceRechargeInterval2={maximumEnergyPriceRechargeInterval2 }
                />
            
                <CenterSection 
                    showEditParameters={showEditParameters} 
                    setShowEditParameters={setShowEditParameters}
                    bmsStatus={bmsStatus} batterySoC={stateOfCharge} 
                    batterySoCScaled={stateOfCharge * 2.72} chargePower={chargePower} 
                    rechargePower={rechargePower} downThreshold={downThreshold} 
                    upThreshold={upThreshold}
                    onSubmit={data => {setRechargePower(data.rechargePower); setChargePower(data.chargePower); setDownThreshold(data.downThreshold); setUpThreshold(data.upThreshold)}}
                />
                
                <RightSection 
                    selectedHourChargeInterval1={"0" + (selectedHourInChargeInterval1) + ":00"} 
                    minimumEnergyPriceChargeInterval1={minimumEnergyPriceChargeInterval1} 
                    selectedHourChargeInterval2={(selectedHourInChargeInterval2 + 10) + ":00"} 
                    minimumEnergyPriceChargeInterval2={minimumEnergyPriceChargeInterval2}
                />

            </div>

            <div className='control-panel'>
                <h3>Simulation</h3>
            </div>
            
            <div className='control-panel'>
                <button className='button-4' 
                    onClick={() => setHourCounter(1)} 
                    disabled={status == 'Running'}
                >Start</button>

                <button className='button-4' 
                    onClick={() => setHourCounter(0)} 
                    disabled={status == 'Stopped'}       
                >Stop</button>

                <button className='button-4' 
                    onClick={() => setHour(0)} 
                    disabled={status == 'Stopped'}       
                >Reset</button>

                <button className='button-4' 
                    onClick={() => setShowEditParameters(!showEditParameters)}
                >Edit </button>

                 <ThemeChangeButton/>
            </div>
            <Clock hour={hour}/>
            <p className='text-transparent'>Status:  {status}</p>
        </>
    )
}
export default MainComp