import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Landing() {

    useEffect(() => {
        AOS.init({ duration: 1200, once: true }); 
      }, []);

    const [hover, setHover] = useState(false);
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    
    const buttonVar = (hovered) => ({
        background: "None",
        color: "black",
        fontSize: hovered ? '20px' : '15px',
        transition: 'font-size 0.3s ease',
        border: 'none',
        padding: '10px 15px'
    });

    const facebook = () => {
        window.open("https://www.facebook.com/mishaki99", "_blank");
      };

    const title1 = "Ethnic Specials";
    const title2 = "Are ready for you";

    return (
        <div className="container-fluid p-0 d-flex flex-column min-vh-100">
            {/* Header */}     
            <div className="card d-flex flex-row align-items-center justify-content-center" style={{
                width: "100%",
                height: "150px",
                backgroundColor: '#701705'
             }}>
                <img 
                    src="/logo.png" 
                    className="img-fluid" 
                    style={{
                        maxWidth: "200px",
                        height: "100px"
                    }}
                    alt="Logo"
                />
            </div>

            {/* Navigation buttons */}
            <div className="d-flex flex-row justify-content-center align-items-center flex-wrap py-3">
                <button 
                    className="btn" 
                    style={buttonVar(hover)}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    Home
                </button>
                <button 
                    className="btn" 
                    style={buttonVar(hover1)}
                    onMouseEnter={() => setHover1(true)}
                    onMouseLeave={() => setHover1(false)}
                    onClick={facebook}
                >
                    Facebook
                </button>

                <button 
                    className="btn" 
                    style={buttonVar(hover2)}
                    onMouseEnter={() => setHover2(true)}
                    onMouseLeave={() => setHover2(false)}
                >
                    Shop
                </button>
                <button 
                    className="btn" 
                    style={buttonVar(hover3)}
                    onMouseEnter={() => setHover3(true)}
                    onMouseLeave={() => setHover3(false)}
                >
                    Help
                </button>
            </div>
            <hr className="w-100"/>
            
            {/* Main content */}
            <div className='container-fluid'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-12 col-md-6 col-lg-5 d-flex justify-content-center'>
                        <img 
                            className='img-fluid rounded m-2 m-md-4 slide-up-title' 
                            src='/land.png' 
                            alt="Landing visual"
                            style={{maxWidth: "500px", width: "100%"}}
                        />
                    </div>
                    
                    <div className='col-12 col-md-6 col-lg-7 d-flex flex-column align-items-center align-items-md-start mt-3'>
                        <h1 className='display-4 display-md-1 text-center text-md-start mt-3 mt-md-5 slide-up-title'>
                            {title1}
                        </h1>
                        <h2 className='text-center text-md-start slide-up-subtitle'> {title2}</h2>

                        <div className='d-flex flex-column flex-md-row justify-content-center align-items-center mt-3'>
                            <img 
                                className='img-fluid mb-3 mb-md-5 me-md-3 slide-up-title' 
                                src='/pujo.png' 
                                alt="Pujo special"
                                style={{
                                    maxWidth: '270px',
                                    width: '100%',
                                    padding: hover ? "0px" : "20px",
                                    transition: "padding 0.3s ease"
                                }}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            />
                            <img 
                                className='img-fluid mt-0 mt-md-5 ms-md-3 slide-up-subtitle' 
                                src='/p2.png' 
                                alt="Second promotion"
                                style={{
                                    maxWidth: '330px',
                                    width: '100%',
                                    padding: hover1 ? "0px" : "20px",
                                    transition: "padding 0.3s ease"
                                }} 
                                onMouseEnter={() => setHover1(true)}
                                onMouseLeave={() => setHover1(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <hr/>

            {/* sub content */}
            <div className='d-flex flex-column'>
                    <div className='d-flex flex-column' data-aos='fade-up'>
                        <h1 className=' text-black-50'
                            style={{fontSize:"50px"}}>
                                About<h1>Mishaki</h1> </h1>
                        </div>
                        <div className='d-flex flex-column align align-items-center justify-content-center ml-5'  data-aos='slide-right'>
                            <p className='text-black-50 align-items-start'>The Journey was Started at 2023,
                                 From stiches to innovations we offer the best</p>
                            <p className='text-black-50 align-items-start'>Fabrics that will suit and also comfort your feelings,</p>
                                <p className='text-black-50 align-items-start'>Every design, every fabric choice,</p> 
                               <p> every little detail reflects a journey of passion and resilience.  </p>
                                <p className='text-black-50 align-items-start'>In Mishaki you choose your clothing according to your satisfaction needs</p>
                        </div>
            </div>
                                <hr/>
                                    <div className='justify-content-center'>
                                <button className='btn btn-dark mb-5 ' style={{width:"100px"}}>Go to shop <br/>
                                     <i className='fa-solid fa-arrow-right '></i></button>
                                     </div>
                                
            {/* Footer with some spacing */}
            <footer className="mt-auto py-4" style={{backgroundColor:"gray",width:"100%"}}>
                All rights reserved
            </footer>
        </div>
    );
}