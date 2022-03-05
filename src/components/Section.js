import React from 'react'

import './styles/Section.css'


const Section = () => {
    return (
        <section className='main-section'>
            <div className='container'>


                <div className="texts">
                    <h1>Hallo! Nama Saya </h1>
                    <h1 className='h1-big'>Divva Meiya</h1>
                    <p>Siswi SMK Telkom Malang Jurusan RPL</p>
                    <button className='text-button'>Biodata</button>
                </div>

                <div className="image">
                    <img alt="" />
                </div>
            </div>
        </section>
    )
}

export default Section
