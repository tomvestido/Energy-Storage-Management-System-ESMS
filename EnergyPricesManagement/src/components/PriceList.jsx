import './PriceIndicator.css'
import PriceIndicator from './PriceIndicator.jsx'   

function PriceList() {
    return (
        <> 
            <div className='container'>        
                <PriceIndicator hour='00:00' price={69.75}   style='rectangle-header'/>
                <PriceIndicator hour='01:00' price={341.22}  style='rectangle-header'/>
                <PriceIndicator hour='02:00' price={250.75}  style='rectangle-header'/>
                <PriceIndicator hour='03:00' price={124.75}  style='rectangle-header'/>
                <PriceIndicator hour='04:00' price={128.75}  style='rectangle-header'/>
                <PriceIndicator hour='05:00' price={1200.75} style='rectangle-header'/>
                <PriceIndicator hour='06:00' price={1104.75} style='rectangle-header-orange'/>
                <PriceIndicator hour='07:00' price={754.75}  style='rectangle-header-orange'/>
                <PriceIndicator hour='08:00' price={854.75}  style='rectangle-header-orange'/>
                <PriceIndicator hour='09:00' price={947.75}  style='rectangle-header-orange'/>
                <PriceIndicator hour='10:00' price={444.75}  style='rectangle-header'/>
                <PriceIndicator hour='11:00' price={69.75}   style='rectangle-header'/>
                <PriceIndicator hour='12:00' price={69.75}   style='rectangle-header'/>
                <PriceIndicator hour='13:00' price={69.75}   style='rectangle-header'/>
                <PriceIndicator hour='14:00' price={69.75}   style='rectangle-header'/>
                <PriceIndicator hour='15:00' price={69.75}   style='rectangle-header'/>
                <PriceIndicator hour='16:00' price={69.75}   style='rectangle-header'/>
                <PriceIndicator hour='17:00' price={69.75}   style='rectangle-header'/>
                <PriceIndicator hour='18:00' price={69.75}   style='rectangle-header'/>
                <PriceIndicator hour='19:00' price={69.75}   style='rectangle-header-orange'/>
                <PriceIndicator hour='20:00' price={69.75}   style='rectangle-header-orange'/>
                <PriceIndicator hour='21:00' price={69.75}   style='rectangle-header-orange'/>
                <PriceIndicator hour='22:00' price={69.75}   style='rectangle-header-orange'/>
                <PriceIndicator hour='23:00' price={69.75}   style='rectangle-header'/>
            </div>
        </>
    )
} 

export default PriceList
   