import PriceIndicator from './indicators/PriceIndicator.jsx'   
import * as prices from './../data/energyPrices.jsx';

function PriceList(props) {
    return (
        <> 
            <div className='container'>        
                <PriceIndicator hour='00:00' price={prices.energyPrices[0]}  style='rectangle-header' decision={props.selectedHourInChargeInterval1 == 0 ? true : false}/>
                <PriceIndicator hour='01:00' price={prices.energyPrices[1]}  style='rectangle-header' decision={props.selectedHourInChargeInterval1 == 1 ? true : false}/>
                <PriceIndicator hour='02:00' price={prices.energyPrices[2]}  style='rectangle-header' decision={props.selectedHourInChargeInterval1 == 2 ? true : false}/>
                <PriceIndicator hour='03:00' price={prices.energyPrices[3]}  style='rectangle-header' decision={props.selectedHourInChargeInterval1 == 3 ? true : false}/>
                <PriceIndicator hour='04:00' price={prices.energyPrices[4]}  style='rectangle-header' decision={props.selectedHourInChargeInterval1 == 4 ? true : false}/>
                <PriceIndicator hour='05:00' price={prices.energyPrices[5]}  style='rectangle-header' decision={props.selectedHourInChargeInterval1 == 5 ? true : false}/>
                <PriceIndicator hour='06:00' price={prices.energyPrices[6]}  style='rectangle-header-orange' decision={props.selectedHourInRechargeInterval1 == 6 ? true : false}/>
                <PriceIndicator hour='07:00' price={prices.energyPrices[7]}  style='rectangle-header-orange' decision={props.selectedHourInRechargeInterval1 == 7 ? true : false}/>
                <PriceIndicator hour='08:00' price={prices.energyPrices[8]}  style='rectangle-header-orange' decision={props.selectedHourInRechargeInterval1 == 8 ? true : false}/>
                <PriceIndicator hour='09:00' price={prices.energyPrices[9]}  style='rectangle-header-orange' decision={props.selectedHourInRechargeInterval1 == 9 ? true : false}/>
                <PriceIndicator hour='10:00' price={prices.energyPrices[10]} style='rectangle-header' decision={props.selectedHourInChargeInterval2 == 10 ? true : false}/>
                <PriceIndicator hour='11:00' price={prices.energyPrices[11]} style='rectangle-header' decision={props.selectedHourInChargeInterval2 == 11 ? true : false}/>
                <PriceIndicator hour='12:00' price={prices.energyPrices[12]} style='rectangle-header' decision={props.selectedHourInChargeInterval2 == 12 ? true : false}/>
                <PriceIndicator hour='13:00' price={prices.energyPrices[13]} style='rectangle-header' decision={props.selectedHourInChargeInterval2 == 13 ? true : false}/>
                <PriceIndicator hour='14:00' price={prices.energyPrices[14]} style='rectangle-header' decision={props.selectedHourInChargeInterval2 == 14 ? true : false}/>
                <PriceIndicator hour='15:00' price={prices.energyPrices[15]} style='rectangle-header' decision={props.selectedHourInChargeInterval2 == 15 ? true : false}/>
                <PriceIndicator hour='16:00' price={prices.energyPrices[16]} style='rectangle-header' decision={props.selectedHourInChargeInterval2 == 16 ? true : false}/>
                <PriceIndicator hour='17:00' price={prices.energyPrices[17]} style='rectangle-header' decision={props.selectedHourInChargeInterval2 == 17 ? true : false}/>
                <PriceIndicator hour='18:00' price={prices.energyPrices[18]} style='rectangle-header' decision={props.selectedHourInChargeInterval2 == 18 ? true : false}/>
                <PriceIndicator hour='19:00' price={prices.energyPrices[19]} style='rectangle-header-orange' decision={props.selectedHourInRechargeInterval2 == 19 ? true : false}/>
                <PriceIndicator hour='20:00' price={prices.energyPrices[20]} style='rectangle-header-orange' decision={props.selectedHourInRechargeInterval2 == 20 ? true : false}/>
                <PriceIndicator hour='21:00' price={prices.energyPrices[21]} style='rectangle-header-orange' decision={props.selectedHourInRechargeInterval2 == 21 ? true : false}/>
                <PriceIndicator hour='22:00' price={prices.energyPrices[22]} style='rectangle-header-orange' decision={props.selectedHourInRechargeInterval2 == 22 ? true : false}/>
                <PriceIndicator hour='23:00' price={prices.energyPrices[23]} style='rectangle-header-orange' decision={props.selectedHourInRechargeInterval2 == 23 ? true : false}/>
            </div>
        </>
    )
} 

export default PriceList
   