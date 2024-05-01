import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

//Icon Dark Ligth
import darkImg from '../assets/images/icon-moon.svg';
import lightImg from '../assets/images/icon-sun.svg';

export default function Header() {
  const isDark = useSelector(state => state.theme.isDark);
  const dispatch = useDispatch();

  return (
    <header className='flex justify-between py-10 font-bold text-white'>
      <h1 className='text-2xl tracking-[0.6rem]'>TODO</h1>
      <button onClick={() => dispatch(toggleTheme())}><img src={isDark ? darkImg : lightImg} alt="" /></button>
    </header>
  )
}
