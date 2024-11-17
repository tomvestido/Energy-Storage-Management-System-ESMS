import { useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import './ThemeChangeButton.css';

function ThemeChangeButton() {    
    const [theme, setTheme] = useLocalStorageState('light');
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        
    }, [theme]);
    
    return (
        <>
            <button 
                className='button-4'
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >{theme === 'light' ? 'Light' : 'Dark'}</button>
        </>    
    )
}

export default ThemeChangeButton