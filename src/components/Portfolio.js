import React from 'react';
// Import each image used in portfolio
import website1 from '../images/website-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

export const Portfolio = () => {

    // Copy below for each new image in portfolio

    const openPopupboxWebsite = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={website1} alt="Website image"/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum iusto aperiam illum libero animi culpa.</p>
        <b>Github:</b> <a className='hyper-link' onClick={() => window.open("https://github.com")}>Project 1</a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigWebsite = {
        titleBar: {
            enable: true,
            text: "Website portfolio project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    
    }

  return (
  <div id="portfolio" className='portfolio-wrapper'>
      <div className="container">
          <h1 className="text-uppercase text-center py-5">
              portfolio
          </h1>
          <div className="image-box-wrapper row jusify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxWebsite}>
              <img src={website1} alt="website 1" className="portfolio-image" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>
              
          
          
          <div className="portfolio-image-box" onClick={openPopupboxWebsite}>
              <img src={website1} alt="website 1" className="portfolio-image" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>
          
          
          <div className="portfolio-image-box" onClick={openPopupboxWebsite}>
              <img src={website1} alt="website 1" className="portfolio-image" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>
          
          
          <div className="portfolio-image-box" onClick={openPopupboxWebsite}>
              <img src={website1} alt="website 1" className="portfolio-image" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>
          </div>
             
          
      </div>
      {/* Add new container below for each image */}
      <PopupboxContainer {...popupboxConfigWebsite}/>
  </div>
  )
};

export default Portfolio;