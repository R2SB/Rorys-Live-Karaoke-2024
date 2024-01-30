import React from "react"
import igIcon from "../../assets/icons/instagram.png"
import emailIcon from "../../assets/icons/envelope.png"
import donateIcon from "../../assets/icons/donate.png"
import "./nav.css"
import { useState } from "react"

const Nav = () => {
  const [activeSection, setActiveSection] = useState("#");
  
  function openVenmo() {
    const venmoScheme = "venmo://paycharge?txn=pay&recipients=RoryChambers";
    const venmoWebURL = "https://account.venmo.com/u/RoryChambers";
  
    // Try to open the Venmo app
    window.location.href = venmoScheme;
  
    // Set a timeout to open the web URL if the app didn't open
    const timeoutDelay = 1500; // Adjust the delay as needed
    const timeoutId = setTimeout(() => {
      window.open(venmoWebURL, '_blank').focus();
    }, timeoutDelay);
  
    // Listen for the page visibility change event
    document.addEventListener("visibilitychange", () => {
      // Clear the timeout if the page becomes visible
      if (document.visibilityState === "visible") {
        clearTimeout(timeoutId);
      }
    });
  }
  

  return (
    <nav>
        <div className="nav__bar">
          <div className="nav__website">
            <a href="#" id="nav__title" onClick={() => setActiveSection('#')}></a>  
          </div>
          <div className="nav__icons">
            <a href="https://www.instagram.com/roryslivekaraoke/" target="__blank" id="nav__ig">
              <img src={igIcon} className="nav__icon" />
            </a>
            <a href="mailto:karaoke@rorychambers.com?subject=Booking%20Inquiry&amp;body=Please%20include%20the%20following%20details%3A%0A%0ADate%3A%0ALocation%3A%0AEvent%20Type%3A%0ATime%20and%20Length%20of%20Performance%3A%0ANumber%20of%20Guests%3A%0APA%20system%20required%20yes%2Fno%3A%0AWhere%20did%20you%20see%2Fhear%20about%20Rory's%20Live%20Karaoke%3A" target="__blank" id="nav__email">
              <img src={emailIcon} className="nav__icon"/>
            </a>
            <a href="#" onClick={openVenmo}>
              <img src={donateIcon} className="nav__icon" id="donate__icon" />
            </a>
          </div>
          
        </div>      
    </nav>
  )
}

export default Nav
