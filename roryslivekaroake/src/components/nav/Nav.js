import React, { useState, useEffect } from "react"
import igIcon from "../../assets/icons/instagram.png"
import calIcon from "../../assets/icons/calendar.png"
import emailIcon from "../../assets/icons/envelope.png"
import donateIcon from "../../assets/icons/donate.png"
import logo from "../../assets/icons/Rory_LK_rev-centered.png"
import "./nav.css"
import { CALENDAR_ID } from '../../constants';

const Nav = () => {
  const [activeSection, setActiveSection] = useState("#");
  const [scrolled, setScrolled] = useState(false);
  
  // Simplified scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Call once to initialize
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
    <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav__bar">
          <div className="nav__website">
            <a href="#" id="nav__title" onClick={() => setActiveSection('#')}>
              <img src={logo} className="nav__icon__logo" />
            </a>
          </div>
          <div className="nav__icons">
          <a href="https://www.instagram.com/roryslivekaraoke/" target="__blank" id="nav__ig" className="nav__item">
              <img src={igIcon} className="nav__icon" />
              <span className="nav__text">Social</span>
            </a>
            <a href="mailto:karaoke@rorychambers.com?subject=Booking%20Inquiry&amp;body=Please%20include%20the%20following%20details%3A%0A%0ADate%3A%0ALocation%3A%0AEvent%20Type%3A%0ATime%20and%20Length%20of%20Performance%3A%0ANumber%20of%20Guests%3A%0APA%20system%20required%20yes%2Fno%3A%0AWhere%20did%20you%20see%2Fhear%20about%20Rory's%20Live%20Karaoke%3A" target="__blank" id="nav__email" className="nav__item">
              <img src={emailIcon} className="nav__icon"/>
              <span className="nav__text">Book</span>
            </a>
            <a href="#" onClick={openVenmo} className="nav__item">
              <img src={donateIcon} className="nav__icon" id="donate__icon" />
              <span className="nav__text">Tip Jar</span>
            </a>
            <a href={`https://calendar.google.com/calendar/u/0/r?cid=${CALENDAR_ID}`} id="nav__cal" className="nav__item">
              <img src={calIcon} className="nav__icon" />
              <span className="nav__text">Gigs</span>
            </a>            
          </div>
        </div>      
    </nav>
  )
}

export default Nav
