import React from 'react';
import style from './style.css';
import { Header } from 'app/components/header';
import { Main, Sidebar } from 'app/components';


export const Home = () => {

  return (
    <div className={style.container}>
      <Header />
      <div className={style.sidebarAndMainContainer}>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};
