//import './App.css'
import EnergyPriceIndicator from './EnergyPriceIndicator.jsx'   
import './Styles.css'

function EnergyPriceList() {
    return (
        <>
            <p className='header'>BMS and Energy Prices</p>
            <div className='container'>
                
                <EnergyPriceIndicator hour='00:00'/>
                <EnergyPriceIndicator hour='01:00'/>
                <EnergyPriceIndicator hour='02:00'/>
                <EnergyPriceIndicator hour='03:00'/>
                <EnergyPriceIndicator hour='04:00'/>
                <EnergyPriceIndicator hour='05:00'/>
                <EnergyPriceIndicator hour='06:00'/>
                <EnergyPriceIndicator hour='07:00'/>
                <EnergyPriceIndicator hour='08:00'/>
                <EnergyPriceIndicator hour='09:00'/>
                <EnergyPriceIndicator hour='10:00'/>
                <EnergyPriceIndicator hour='11:00'/>
                <EnergyPriceIndicator hour='12:00'/>
                <EnergyPriceIndicator hour='13:00'/>
                <EnergyPriceIndicator hour='14:00'/>
                <EnergyPriceIndicator hour='15:00'/>
                <EnergyPriceIndicator hour='16:00'/>
                <EnergyPriceIndicator hour='17:00'/>
                <EnergyPriceIndicator hour='18:00'/>
                <EnergyPriceIndicator hour='19:00'/>
                <EnergyPriceIndicator hour='20:00'/>
                <EnergyPriceIndicator hour='21:00'/>
                <EnergyPriceIndicator hour='22:00'/>
                <EnergyPriceIndicator hour='23:00'/>
            </div>
    
        </>
    )
}

export default EnergyPriceList