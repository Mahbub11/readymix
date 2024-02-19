import React from 'react';
import { Outlet, useLocation } from "react-router-dom";

function HomeLayout(props) {
    return (
        <div className='h-screen '>

       <div className='mt-10'>
       <Outlet></Outlet>
       </div>
            
        </div>
    );
}

export default HomeLayout;