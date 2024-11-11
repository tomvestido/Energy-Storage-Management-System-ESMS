import PriceIndicator from './PriceIndicator.jsx'   
import * as prices from './../data/energyPrices.jsx';

function PriceList() {
    return (
        <> 
            <div className='container'>        
                <PriceIndicator hour='00:00' price={prices.energyPrices[0]}  style='rectangle-header' decision={true}/>
                <PriceIndicator hour='01:00' price={prices.energyPrices[1]}  style='rectangle-header'/>
                <PriceIndicator hour='02:00' price={prices.energyPrices[2]}  style='rectangle-header'/>
                <PriceIndicator hour='03:00' price={prices.energyPrices[3]}  style='rectangle-header'/>
                <PriceIndicator hour='04:00' price={prices.energyPrices[4]}  style='rectangle-header'/>
                <PriceIndicator hour='05:00' price={prices.energyPrices[5]}  style='rectangle-header'/>
                <PriceIndicator hour='06:00' price={prices.energyPrices[6]}  style='rectangle-header-orange'/>
                <PriceIndicator hour='07:00' price={prices.energyPrices[7]}  style='rectangle-header-orange'/>
                <PriceIndicator hour='08:00' price={prices.energyPrices[8]}  style='rectangle-header-orange'/>
                <PriceIndicator hour='09:00' price={prices.energyPrices[9]}  style='rectangle-header-orange'/>
                <PriceIndicator hour='10:00' price={prices.energyPrices[10]} style='rectangle-header'/>
                <PriceIndicator hour='11:00' price={prices.energyPrices[11]} style='rectangle-header'/>
                <PriceIndicator hour='12:00' price={prices.energyPrices[12]} style='rectangle-header'/>
                <PriceIndicator hour='13:00' price={prices.energyPrices[13]} style='rectangle-header'/>
                <PriceIndicator hour='14:00' price={prices.energyPrices[14]} style='rectangle-header'/>
                <PriceIndicator hour='15:00' price={prices.energyPrices[15]} style='rectangle-header'/>
                <PriceIndicator hour='16:00' price={prices.energyPrices[16]} style='rectangle-header'/>
                <PriceIndicator hour='17:00' price={prices.energyPrices[17]} style='rectangle-header'/>
                <PriceIndicator hour='18:00' price={prices.energyPrices[18]} style='rectangle-header'/>
                <PriceIndicator hour='19:00' price={prices.energyPrices[19]} style='rectangle-header-orange'/>
                <PriceIndicator hour='20:00' price={prices.energyPrices[20]} style='rectangle-header-orange'/>
                <PriceIndicator hour='21:00' price={prices.energyPrices[21]} style='rectangle-header-orange'/>
                <PriceIndicator hour='22:00' price={prices.energyPrices[22]} style='rectangle-header-orange'/>
                <PriceIndicator hour='23:00' price={prices.energyPrices[23]} style='rectangle-header'/>
            </div>
        </>
    )
} 

export default PriceList
   