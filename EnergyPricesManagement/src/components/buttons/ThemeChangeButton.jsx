import { useEffect, useState } from 'react';
import './ThemeChangeButton.css';

function ThemeChangeButton() {    
    const [theme, setTheme] = useState('light');
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        
    }, [theme]);
    
    return (
        <>
            <button 
                className='button-4'
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >{theme === 'light' ? 'Light' : 'Dark'}
            </button>
        </>    
    )
}

export default ThemeChangeButton