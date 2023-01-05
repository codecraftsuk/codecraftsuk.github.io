import React from "react";
import './styles.css';

const About = () => {
  return (
    <div className="body">

      <div id="banner__wrapper">
        <div className="banner__content">
            <h1>
              About CodeCrafts
            </h1>
            <h4>
              Build your own future.
            </h4>
          </div>
      </div>

      <img src="src/assets/images/about/aboutimage.png" alt='about us image' className="main__image"/>


      <div id='description__wrapper'>
        <div className="description">
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when 
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
            of letters, as opposed to using 'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
            and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have 
            evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>

        <div id="team__wrapper">
          <div className="team__description">
            <h2>
              Meet the Team
            </h2>
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default About;
