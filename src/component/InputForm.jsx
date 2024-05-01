import { React, useState } from "react";
import CicleButton from '../component/CircleButton';

// redux
import { addTodo } from "../store/todoSlice";
import { useDispatch } from 'react-redux';

export function InputForm() {
    const dispatch = useDispatch();


    const [isTick, setTick] = useState(false);

    //Form input value
    const [formValue, setFormValue] = useState('');
    function handleChange(e) {
        setFormValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (formValue != '') {
            setTick(true);
            setTimeout(() => {
                dispatch(addTodo(
                    {
                        id: Date.now(),
                        title: formValue,
                        completed: false,
                    }
                ))
                setFormValue('')
                setTick(false);
            }, 300)
        }

    }
    return (
        <form onSubmit={handleSubmit} className='px-5 mb-4 flex items-center gap-3 rounded-lg select-none focus:outline-none text-darkBlue bg-listBg text-sm'>
            <CicleButton isTick={isTick} onClick={handleSubmit} />
            <input value={formValue} onChange={handleChange} type="text" placeholder='Create a new todo...' className='w-full py-4 focus:outline-none bg-listBg text-hover' />
        </form>
    )
}
