import React from 'react'
import Apartments from '../Apartments/Apartments'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Services from '../Services/Services'

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Apartments/>
            <Services/>
            <Footer/>
        </div>
    )
}
