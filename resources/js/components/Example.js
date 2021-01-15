import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./boxes.css"

function Example({ name, authname }) {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return (
        <div className="container">
            <div className="grids">
                <div data-aos="flip-right" className="boxes">1</div>
                <div data-aos="flip-right" className="boxes">2are logged into the admin paneYou are logged into the admin paneYou are logged into the admin pane</div>
                <div data-aos="fade-up" className="boxes">3are logged into the admin paneYou are logged into the admin paneYou are logged into the admin pane</div>
                <div data-aos="flip-right" className="boxes">4are logged into the admin paneYou are logged into the admin paneYou are logged into the admin pane</div>
                <div data-aos="flip-right" className="boxes">5</div>
                <div data-aos="fade-right" className="boxes">6are logged into the admin paneYou are logged into the admin paneYou are logged into the admin pane</div>
                <div data-aos="flip-left" className="boxes">7</div>
            </div>
            <div className="sect">
                <div data-aos="fade-right" className="blue">are logged into the admin paneYou are logged into the admin paneYou are logged into the admin pane</div>
                <div data-aos="fade-left" className="green">are logged into the admin paneYou are logged into the admin paneYou are logged into the admin pane</div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    const name = document.getElementById("example").getAttribute('name');
    const authname = document.getElementById("example").getAttribute('authname');

    ReactDOM.render(<Example name={name} authname={authname} />, document.getElementById('example'));
}
