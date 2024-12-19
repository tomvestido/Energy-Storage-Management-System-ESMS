import './MainPage.css';
import Menu from './../Menu.jsx';
import Dashboard from './Dashboard.jsx';

function MainPage() {
    return (
        <div className='main-page-container'>
            <Menu />
            <Dashboard />
        </div>
    )       
}

export default MainPage