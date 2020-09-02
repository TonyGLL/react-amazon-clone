// MODULES
import React from 'react';
import '../assets/Home.css';

// COMPONENTS
import Product from './Product';

function Home(props) {
    return (
        <div className="home">

            {/* BANNER */}
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="Banner" />

            {/* PRODUCTS */}
            <div className="home__row">
                <Product
                    id="12345"
                    title="The Lean Startup: Now Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._sx325_B01,204,203,200_.jpg"
                />

                <Product
                    id="49538094"
                    title="HUAWEI Watch GT 2 - Smart Watch, 46mm, 3D Glass Screen, Bluetooth, Black"
                    price={239.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/615hqoyfNBL._AC_SL1000_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="654654321"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={436.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />

                <Product
                    id="98498765"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={54.45}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />

                <Product
                    id="98432168"
                    title="SAMSUNG Galaxy S20 Ultra 128GB SM-G988B 6.9' Dual Sim LTE Libre de Fabrica"
                    price={1044.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71bAj75HoFL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="6519872"
                    title="Nikon D5600 + AF-S DX 18-140mm G ED VR 24.2MP CMOS 6000 x 4000Pixels Negro - Digital Camera (SLR, CMOS, 6000 x 4000 Pixels)"
                    price={968.85}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81kxnahOghL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    );
}

export default Home;