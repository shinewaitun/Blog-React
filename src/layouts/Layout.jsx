import React from 'react'
import { Outlet } from 'react-router';
import NavBar from 'src/layouts/NavBar';
import Footer from 'src/layouts/Footer'

export default function Layout() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
