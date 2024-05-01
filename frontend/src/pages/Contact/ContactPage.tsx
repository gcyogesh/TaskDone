import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import ContactBody from '../../components/Contact/ContactBody'

const ContactPage = () => {
  return (
    <React.Fragment>
      <NavBar/>
     <ContactBody/>
      <Footer/>
    </React.Fragment>
  )
}

export default ContactPage