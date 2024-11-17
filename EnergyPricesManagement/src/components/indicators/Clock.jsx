import './Clock.css';

function Clock(props){

    if (props.hour < 10) {
        return(
            <>
                <p className='text-transparent'>Hour:  0{props.hour}:00</p>
            </>
        )
    } else {
        return(
            <>
                <p className='text-transparent'>Hour:  {props.hour}:00</p>
            </>
        )
    }
}

export default Clock