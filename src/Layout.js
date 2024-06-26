import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div class="flex h-screen">
            <div class="bg-gray-800 w-64 h-screen fixed">
                <Sidebar />

            </div>

            <div class="flex-1 ml-64 overflow-y-auto">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout