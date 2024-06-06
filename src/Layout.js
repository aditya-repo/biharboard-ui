import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout