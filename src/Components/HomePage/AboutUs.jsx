import { useEffect, useRef, useContext, useState } from "react";
import "../../../CSS/AboutUs.css";
import CurrentPageContext from "../../Context/CurrentPageContext";

const AboutUs = () => {

  const containersRef = useRef([]);
  const { currentPage } = useContext(CurrentPageContext); 


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    containersRef.current.forEach((container) => {
      if (container) observer.observe(container);
    });

    return () => {
      containersRef.current.forEach((container) => {
        if (container) observer.unobserve(container);
      });
    };
  }, []);

  return (
    <>
      <div className={currentPage === 'home'? "about-us-section" : "about-us-section-2"}>
        <div
          className="about-us-container-1"
          ref={(el) => {
            if (el) containersRef.current.push(el);
          }}
        >
          <div className="about-us-text-container-1">
            <p className="about-us-text-1">
              Welcome to Anakuma, where Asian fusion cuisine meets heartfelt
              hospitality in the heart of Brighton's vibrant Preston Street.
              Founded by us, brothers Ali and Mo Razavi, Anakuma is our tribute
              to our late mother, Lindsay, whose love for cooking and family
              inspires every dish we serve. Our journey began with our beloved
              first restaurant, Halisco, just a stone's throw away. Buoyed by
              the success of Halisco and driven by our passion for the rich food
              culture of Brighton, we envisioned Anakuma as a place where we
              could offer something new and exciting: high-quality
              Asian-inspired cuisine in a warm, inviting setting.
            </p>
          </div>
          <div className="photo-wrapper">
            <div className="photo-container-1">
              <img
                src="Images/bao-buns.jpg"
                className="bao-buns"
                alt="bao buns"
              />
              <img
                src="Images/anakuma-opening.jpg"
                className="anakuma-opening"
                alt="anakuma opening"
              />
            </div>
          </div>
        </div>
        <div
          className="about-us-container-2"
          ref={(el) => {
            if (el) containersRef.current.push(el);
          }}
        >
          <div className="photo-wrapper">
            <div className="photo-container-2">
              <img
                src="Images/crab.jpg"
                className="crab-bowl"
                alt="photo of a crab dish"
              />
              <img
                src="Images/resturant-portrait.jpg"
                className="anakuma-resturant"
                alt="anakuma resturant"
              />
            </div>
          </div>
          <div className="about-us-text-container-1">
            <p className="about-us-text-2">
              At Anakuma, we take pride in our carefully curated menu that
              celebrates the flavors of Asia with a twist. From our flavorful
              small plates to our signature bao buns and inventive cocktails,
              each dish is crafted to be shared and enjoyed among friends and
              family. Step inside and you'll find a space that blends rustic
              charm with modern comfort—high ceilings, ambient lighting, and
              cozy seating create the perfect backdrop for any occasion, whether
              it's a casual evening out or a special celebration.
            </p>
          </div>
        </div>
        <div
          className="about-us-container-3"
          ref={(el) => {
            if (el) containersRef.current.push(el);
          }}
        >
          <div className="about-us-text-container-1">
            <p className="about-us-text-1">
              Join us at Anakuma to experience our warm hospitality and the
              vibrant flavors of our kitchen. Whether you're a local resident or
              visiting Brighton, we look forward to welcoming you to our table
              where every dish tells a story of passion and creativity. And if
              you're in the mood for a different culinary adventure, don't
              forget to visit our sister restaurant, Halisco, just down the
              street. There, you can immerse yourself in the bold and savory
              flavors of Mexico, crafted with the same dedication to quality and
              taste that defines our approach at Anakuma. Whichever you choose,
              we promise an unforgettable dining experience that reflects our
              commitment to exceptional food and genuine hospitality.
            </p>
          </div>
          <div className="photo-wrapper">
            <div className="photo-container-1">
              <img src="Images/trout.jpg" className="trout" />
              <img src="Images/chicken-wings.jpeg" className="chicken-wings" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
