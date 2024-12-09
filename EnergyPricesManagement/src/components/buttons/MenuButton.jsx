import './MenuButton.css';
import PropTypes from 'prop-types'
import { useState } from 'react';

function MenuButton ({ icon: Icon, initialColor, hoverColor, onClick }) { 
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
        <button
            onClick={onClick}
            className="icon-button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            
            >
            <Icon
                size={24} // Możesz dostosować rozmiar ikony
                color={isHovered ? hoverColor : initialColor} // Zmieniaj kolor na hover
                className="img"
            />
        </button>
    );
}

MenuButton.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default MenuButton