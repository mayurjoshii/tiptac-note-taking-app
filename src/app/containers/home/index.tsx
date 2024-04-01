import React from 'react';
import style from './style.css';
import { Main, Sidebar } from 'app/components';
export const Home = () => {

  return (
    <div className={style.container}>
      <div className={style.sidebarAndMainContainer}>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};
