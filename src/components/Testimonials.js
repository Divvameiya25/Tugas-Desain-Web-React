import React from 'react'
import './styles/Testimonials.css'
import saya from './assets/saya.jpg'
import pp from './assets/pp.jpg'
import hobi from './assets/hobi.jpg'

const Testimonials = () => {
    return (
        <section className='testimonials'>
            <h1>Lebih Lengkap</h1>
            <div className="cart-container">
                <div className="cart">
                    <img src={saya} alt="" />
                    <p>Saya</p>
                    <h5>Saya merupakan anak kedua dari dua bersaudara dan lahir di Malang pada 25 Mei 2005</h5>
                </div>

                <div className="cart">
                    <img src={pp} alt="" />
                    <p>Cita - cita</p>
                    <h5>Sejak kecil saya ingin menjadi seorang dokter, namun seiring bertambahnya usia dan pelajaran yang saya dapat di sekolah, saya pun berubah pikiran ingin menjadi seorang wirausaha dengan memanfaatkan pengalaman serta ilmu yang telah saya dapatkan selama ini </h5>
                </div>

                <div className="cart">
                    <img src={hobi} alt="" />
                    <p>Hobi</p>
                    <h5>Saya tidak memiliki hobi khusus karena menurut saya ketertarikan pada suatu hal tergantung pada mood dan kondisi. Contohnya seperti saat daring dan dirumah saja saya lebih menyukai kegiatan di dalam ruangan seperti menulis cerita pendek, bermain mobile games dan lain sebagainya</h5>
                </div>

            </div>
        </section>
    )
}

export default Testimonials
