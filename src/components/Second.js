import React from 'react'
import Divva from './assets/Divva.jpg'
import './styles/Second.css'

const Second = () => {
    return (
        <section className='section-2'>
            <h1 className='about-me'>Tentang Saya</h1>
            <div className="container-2">
                <div className="image-cont">
                    <img src={Divva} alt="" />
                </div>

                <div className="text-2">
                    <p>Siswi SMK Telkom Malang</p>
                    <p>XI RPL 7</p>
                    <p>Pengurus OSIS periode 2020 - 2022</p>
                    <p>Suborgan Media Moklet (Desain)</p>
                    <p>Menyukai Kegiatan Menulis</p>
                    <p>Tertarik dalam Bidang Content Writer</p>
                    <p>Disiplin dan Menghargai Waktu</p>
                </div>
            </div>
        </section>
    )
}

export default Second
