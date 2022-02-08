import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';


const MainMenu = () => {

  return (
    <div>
    <button >
        <Link to='/create'>Create</Link>
    </button>

    <Outlet />
    </div>
  );
};

export default MainMenu
