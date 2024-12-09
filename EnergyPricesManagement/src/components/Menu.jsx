import './Menu.css';
import MenuButton from './buttons/MenuButton.jsx';
import {  LayoutPanelLeft, Gauge, Leaf   } from 'lucide-react';


function Menu () { 
    
    return (
        <> 
            <div className='menu'>
                
                <MenuButton
                    icon={LayoutPanelLeft}
                    initialColor="#3e80fc"
                    hoverColor="#ffffff"
                />
                <MenuButton
                    icon={Gauge}
                    initialColor="#3e80fc"
                    hoverColor="#ffffff"
                />
                <MenuButton
                    icon={Leaf}
                    initialColor="#3e80fc"
                    hoverColor="#ffffff"
                />
       
                
       

            </div>
        </>
    ) 
}

export default Menu