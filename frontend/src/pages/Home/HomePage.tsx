import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SecondBody from '../../components/Home/SecondBody'
import ThirdBody from '../../components/Home/ThirdBody'
import FourthBody from '../../components/Home/FourthBody'
import FifthBody from '../../components/Home/FifthBody'
import SixthBody from '../../components/Home/SixthBody'
import Footer from '../../components/Footer/Footer'
import FirstBody from '../../components/Home/FirstBody'

const HomePage = () => {
  return (
   <React.Fragment>
   <NavBar/>
   <FirstBody/>
   <SecondBody/>
   <ThirdBody/>
   <FourthBody/>
   <FifthBody/>
   <SixthBody/>
   <Footer/>
   </React.Fragment>
  )
}

export default HomePage