import React from 'react'
import Footer from './Footer'
import Header from './Header'
import NavMenu from './NavMenu'

export default function PageContainer({children}) {

  const [openNav, setOpenNav] = React.useState(false)
  
  return (
    <>
        <Header setOpenNav={setOpenNav} openNav={openNav}/>
        {openNav && <NavMenu />}
        {children}
        <Footer />
    </>
  )
}
