import React from 'react'
import Apartments from '../Apartments/Apartments'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Apartments/>
        </div>
    )
}
