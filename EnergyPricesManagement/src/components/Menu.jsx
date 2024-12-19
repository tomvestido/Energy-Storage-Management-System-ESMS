import './Menu.css';
import MenuButton from './buttons/MenuButton.jsx';
import { LayoutPanelLeft, Gauge, Leaf, CloudSun, BellRing } from 'lucide-react';

function Menu () { 
    
    return (
        <> 
            <div className='menu'>  
                <div className='menu-icons-container'>
                    <MenuButton
                        icon={LayoutPanelLeft}
                        initialColor="#5c5c5c"
                        hoverColor="#ffffff"
                    />
                    <MenuButton
                        icon={Gauge}
                        initialColor="#5c5c5c"
                        hoverColor="#ffffff"
                    />
                    <MenuButton
                        icon={CloudSun}
                        initialColor="#5c5c5c"
                        hoverColor="#ffffff"
                    />
                    <MenuButton
                        icon={Leaf}
                        initialColor="#5c5c5c"
                        hoverColor="#ffffff"
                    />    
                    <MenuButton
                        icon={BellRing}
                        initialColor="#5c5c5c"
                        hoverColor="#ffffff"
                    />                
                </div>                            
            </div>
        </>
    ) 
}

export default Menu