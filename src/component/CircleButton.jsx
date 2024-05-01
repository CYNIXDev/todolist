import { React } from 'react';
import checkImg from '../assets/images/icon-check.svg';

export default function CicleButton({ isTick, onClick }) {
    const styleCheck = {
        background: 'linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        border: 'none',
    }
    return (
        <>

            <span type='submit' onClick={onClick} className='min-w-5 min-h-5 w-5 h-5 border-solid border-[1px] border-content/30 rounded-full flex justify-center items-center cursor-pointer' style={isTick ? styleCheck : null}>
                {isTick ? <img src={checkImg} alt="" /> : null}
            </span>
        </>
    );

}