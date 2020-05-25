import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Switch from "react-switch";

import './App.css';

function App() {
    const [checked, setChecked] = useState(false)

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    
    return (
        <div className={isDesktopOrLaptop ? 'App-desktop' : 'App-mobile'}>
            <div className={isDesktopOrLaptop ? 'body-desktop' : 'body-mobile'}>
                <div className={isDesktopOrLaptop ? 'body-header-desktop' : 'body-header-mobile'}>
                    <h1>Our Pricing</h1>    
                </div>
                <div className={isDesktopOrLaptop ? 'body-selector-desktop' : 'body-selector-mobile'}>
                    <p>Annually</p>
                    <Switch className="toggle-switch" onChange={() => setChecked(!checked)} checked={checked} offColor='#9CA1ED' onColor='#9CA1ED' uncheckedIcon={false} checkedIcon={false} />
                    <p>Monthly</p>
                </div>
                {checked ? (<div className={isDesktopOrLaptop ? 'body-cards-desktop' : 'body-cards-mobile'}>
                    <div className="left-card card" >
                        <h4>Basic</h4>
                        <h2>$19.99</h2>
                        <div>
                            <p>500 GB Storage</p>
                            <p>2 Users Allowed</p>
                            <p>Send up to 3 GB</p>
                        </div>
                        <button>LEARN MORE</button>
                    </div>
                    <div className="center-card card">
                        <h4>Professional</h4>
                        <h2>$24.99</h2>
                        <div>
                            <p>1 TB Storage</p>
                            <p>5 Users Allowed</p>
                            <p>Send up to 10 GB</p>
                        </div>
                        <button>LEARN MORE</button>
                    </div>
                    <div className="right-card card">
                        <h4>Master</h4>
                        <h2>$39.99</h2>
                        <div>
                            <p>2 TB Storage</p>
                            <p>10 Users Allowed</p>
                            <p>Send up to 20 GB</p>
                        </div>
                        <button>LEARN MORE</button>
                    </div>
                </div>) : 
                (<div className={isDesktopOrLaptop ? 'body-cards-desktop' : 'body-cards-mobile'}>
                    <div className="left-card card" >
                        <h4>Basic</h4>
                        <h2>$199.99</h2>
                        <div>
                            <p>500 GB Storage</p>
                            <p>2 Users Allowed</p>
                            <p>Send up to 3 GB</p>
                        </div>
                        <button>LEARN MORE</button>
                    </div>
                    <div className="center-card card">
                        <h4>Professional</h4>
                        <h2>$249.99</h2>
                        <div>
                            <p>1 TB Storage</p>
                            <p>5 Users Allowed</p>
                            <p>Send up to 10 GB</p>
                        </div>
                        <button>LEARN MORE</button>
                    </div>
                    <div className="right-card card">
                        <h4>Master</h4>
                        <h2>$399.99</h2>
                        <div>
                            <p>2 TB Storage</p>
                            <p>10 Users Allowed</p>
                            <p>Send up to 20 GB</p>
                        </div>
                        <button>LEARN MORE</button>
                    </div> </div>)}
            </div>
        </div>
    );
}

export default App;
