import React from 'react';
import author from '../me.jpg';

export const AboutMe = () => {
  return (
  <div id="about" className="container py-5">
      <div className="row">
          <div className="col-lg-6 col-xm-12">
              <div className="photo-wrap mb-5">
              <img className="profile-img" src={author} alt="author" />
              </div>
             
          </div>
          <div className="col-lg-6 col-xm-12">
              <h1 className="about-heading">about me</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod tempor nisi, non lobortis nisl semper ut. Phasellus eu laoreet turpis. Vivamus pretium fringilla felis et ornare. Maecenas ipsum enim, posuere in maximus gravida, porttitor nec lacus. Ut suscipit ante orci, sed sodales ex tincidunt sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. In dolor tellus, convallis in orci eget, mattis sodales nibh. Quisque mi sem, ornare at nibh eget, lobortis vestibulum magna. Donec condimentum quis orci quis porta. Nunc non ornare leo. Aenean accumsan sollicitudin justo, ut commodo augue finibus ac. Mauris pulvinar et dui sed condimentum. Sed ut urna in odio rutrum pharetra. Sed a eros leo. Nulla id faucibus mi. Vivamus auctor urna mi, vel scelerisque quam fermentum at.</p>
          </div>
      </div>
  </div>
  )
};
