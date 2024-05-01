import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CicleButton from './CircleButton';
import { toggleTodo, removeTodo, clearCompleted } from '../store/todoSlice';
import { setFilter } from '../store/filterSlice';

import removeImg from '../assets/images/icon-cross.svg';


export default function ListTodo() {
    const filterCheck = useSelector(state => state.filter.data);
    // Get state value And Filter Todo for display
    const todos = useSelector(state => state.todos.data.filter(todo => {
        if (filterCheck === 'Active') {
            return todo.completed === false;
        } else if (filterCheck === 'Completed') {
            return todo.completed === true;
        } else if (filterCheck === 'All') {
            return todo;
        }
    }));
    const dispatch = useDispatch();

    // Drag and Drop Styling
    function handleDrag(event) {
        if (event.type === 'dragstart') {
            setTimeout(() => {
                event.target.classList.add('draging')
                event.target.querySelector('div').style.opacity = '0';
                event.target.querySelector('button').style.display = 'none';
            }, 0)
        } else if (event.type === 'dragend') {
            event.target.querySelector('div').style.opacity = '1';
            event.target.querySelector('button').style.display = 'block';
            event.target.classList.remove('draging')
        }
    }

    // Drag and Drop Function
    function sortTodoList(e) {
        //Parent Element (ul)
        const sortableList = document.querySelector('.todo-table');

        //Element that is being dragged
        const dragingItem = sortableList.querySelector(".draging")

        //All Sibling Element is not dragging
        const siblings = [...sortableList.querySelectorAll(".todo-items:not(.draging)")]

        //Find the next sibling
        let nextSibling = siblings.find(sibling => {
            return e.clientY <= sibling.offsetTop + sibling.clientHeight / 2
        })

        //If the next sibling is null, then append the dragging item to the end of the list
        sortableList.insertBefore(dragingItem, nextSibling)
    }


    // Component Render
    return (
        <>
            <ul className='todo-table rounded-t-lg max-h-[265px] overflow-auto bg-listBg' onDragOver={sortTodoList}>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id} onDragStart={handleDrag} onDragEnd={handleDrag} className='todo-items flex justify-between py-4 border-b-[1px] border-opacity-30 border-gray-500 px-5 text-hover/70 text-sm font-semibold' draggable={true}>
                            <div className='flex items-center gap-3'>
                                <CicleButton key={todo.id} isTick={todo.completed} onClick={() => dispatch(toggleTodo(todo.id))} />
                                <p className={todo.completed ? 'line-through text-content/50' : null}>{todo.title}</p>
                            </div>
                            <button onClick={() => dispatch(removeTodo(todo.id))}><img src={removeImg} className='w-[10px]'></img></button>
                        </li>
                    );
                })}
            </ul>

            {/* Nav Footer */}
            <section className='flex justify-between px-5 py-4 items-center relative font-bold rounded-b-lg bg-listBg'>
                <p >{todos.length} items left</p>
                <nav className='absolute translate-y-full sm:top-0 top-5 sm:translate-y-0 sm:static w-full sm:w-auto left-0  px-5 sm:py-0 py-4 text-sm rounded-lg bg-listBg'>
                    <ul className='flex justify-center items-center w-full gap-5'>
                        <li onClick={() => dispatch(setFilter('All'))} id='All' className={filterCheck === 'All' ? 'cursor-pointer text-BrightBlue text-active' : 'cursor-pointer hover:text-hover'}>All</li>
                        <li onClick={() => dispatch(setFilter('Active'))} id='Active' className={filterCheck === 'Active' ? 'cursor-pointer text-active' : 'cursor-pointer hover:text-hover'}>Active</li>
                        <li onClick={() => dispatch(setFilter('Completed'))} id='Completed' className={filterCheck === 'Completed' ? 'cursor-pointer text-active' : 'cursor-pointer hover:text-hover'}>Completed</li>
                    </ul>
                </nav>
                <button className='hover:text-hover' onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
            </section >
        </>
    );
}

