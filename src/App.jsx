//dependencies
import React from 'react';
import { useSelector } from 'react-redux';

//components
import Header from './component/Header';
import ListTodo from './component/ListTodo';
import { InputForm } from './component/InputForm';
import { Footer } from './component/Footer';

//styles
import bgLight from './assets/images/bg-mobile-light.jpg';
import bgDark from './assets/images/bg-mobile-dark.jpg';
import removeImg from './assets/images/icon-cross.svg';


function App() {
  const isDark = useSelector(state => state.theme.isDark);

  return (
    <>
      <BackgroundImage bgUrl={isDark ? bgDark : bgLight} />
      <main className='relative z-30 container mx-auto px-5 text-[11px] font-medium max-w-lg text-content'>
        <Header />
        <InputForm />
        <ListTodo removeImg={removeImg} />
        <Footer />
      </main>
    </>
  )
}

export default App

function BackgroundImage({ bgUrl }) {
  return (<div className='absolute h-[200px] w-full z-10 bg-cover' style={{
    backgroundImage: `url(${bgUrl})`
  }}></div>);
}
