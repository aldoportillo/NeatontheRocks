import React from 'react'
import Footer from './Footer'
import Header from './Header'

const getWindowSize = () => {
    const {innerWidth} = window;
    return innerWidth
}

export default function PageContainer({children}) {

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
  
  console.log(windowSize)
  return (
    <>
        <Header setOpenNav={setOpenNav} openNav={openNav} windowSize={windowSize}/>
        {children}
        <Footer />
    </>
  )
}
