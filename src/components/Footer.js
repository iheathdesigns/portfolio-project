import React from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, RedditShareButton, RedditIcon } from 'react-share';

const Footer = () => {
  return (
  <div className='footer'>
      <div className="container">
          <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="d-flex">
                      <p>city Charlotte Main St 2020 office #223</p>
                  </div>
                  <div className="d-flex">
                      <a href='tel:555-555-1212'>+(704)555-1212</a>
                  </div>
                  <div className="d-flex">
                      <p>ianheath2010@gmail.com</p>
                  </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="row">
                      <div className="col">
                          <a className='footer-nav'>Home</a>
                          <br />
                          <a className='footer-nav'>About Me</a>
                          <br />
                          <a className='footer-nav'>Services</a>
                      </div>
                      <div className="col">
                          <a className='footer-nav'>Experience</a>
                          <br />
                          <a className='footer-nav'>Portfolio</a>
                          <br />
                          <a className='footer-nav'>Contact</a>
                      </div>
                  </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                  <div className="d-flex justify-content-center">
                      <FacebookShareButton
                      url={"http://facebook.com"}
                      quote={"Fullstack Developer"}
                      hashtag="#javascript"
                      >
                          <FacebookIcon className='mx-3' size={36}/>
                      </FacebookShareButton>
                      <TwitterShareButton
                      url={"http://twitter.com"}
                      quote={"Fullstack Developer"}
                      hashtag="#javascript"
                      >
                          <TwitterIcon className='mx-3' size={36}/>
                      </TwitterShareButton>
                      <RedditShareButton
                      url={"http://reddit.com"}
                      quote={"Fullstack Developer"}
                      hashtag="#javascript"
                      >
                          <RedditIcon className='mx-3' size={36}/>
                      </RedditShareButton>
                      <LinkedinShareButton
                      url={"http://linkedin.com"}
                      quote={"Fullstack Developer"}
                      hashtag="#javascript"
                      >
                          <LinkedinIcon className='mx-3' size={36}/>
                      </LinkedinShareButton>
                  </div>
                  <p className="pt-3 text-center">
                      Copyright&copy;
                      {new Date().getFullYear()}&nbsp;IHeathSucks
                  </p>
              </div>
          </div>
      </div>
  </div>
  )
};

export default Footer;
