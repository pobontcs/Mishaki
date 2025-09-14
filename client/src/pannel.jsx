import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Pannel(){
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
            



    return (
        <div className="container-fluid p-0 d-flex flex-column min-vh-100">
        {/*Header*/}
            <div className="card d-flex flex-row align-items-center justify-content-center slide-up-title" style={{
                width: "1200px",
                height: "120px",
                backgroundColor: '#701705'
             }}>
                <img 
                    src="public/logo.png" 
                    className="img-fluid" 
                    style={{
                        maxWidth: "200px",
                        height: "100px"
                    }}
                    alt="Logo"
                />
            </div>
                        {/* buttons */}
            <div className="d-flex flex-row justify-content-center align-items-center flex-wrap py-3"

                  >
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
                    
                >
                    Exclusive
                </button>

                <button 
                    className="btn" 
                    style={buttonVar(hover2)}
                    onMouseEnter={() => setHover2(true)}
                    onMouseLeave={() => setHover2(false)}
                >
                    Traditional
                </button>
                <button 
                    className="btn" 
                    style={buttonVar(hover3)}
                    onMouseEnter={() => setHover3(true)}
                    onMouseLeave={() => setHover3(false)}
                >
                    Western
                </button>
            </div>
            <hr className="w-100"/>
        
        
        
        
        </div>
    );


}