import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { useLocation } from 'react-router-dom'

const getWindowSize = () => {
    const {innerWidth} = window;
    return innerWidth
}

export default function PageContainer({children}) {

  const loaction  = useLocation()

  const [openNav, setOpenNav] = React.useState(false)

  const [windowSize, setWindowSize] = React.useState(getWindowSize())

  React.useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  React.useEffect(() => {
    setOpenNav(false)
  },[loaction])
  
  console.log(windowSize)
  return (
    <>
        <Header setOpenNav={setOpenNav} openNav={openNav} windowSize={windowSize}/>
        {children}
        <Footer />
    </>
  )
}
