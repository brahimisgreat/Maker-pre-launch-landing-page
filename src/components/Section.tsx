import icon from "../assets/icon-scroll.svg";
import heroLeft from "../assets/illustration-hero-left.svg";
import heroright from "../assets/illustration-hero-right.svg";
import "../components/Header/Section.css";

export const Section = () => {
  return (
    <section className="section">
      <div className="section-container">
        <div className="sectionImgContainer">
          <img src={heroLeft} />
        </div>
        <div className="sectionImgContainer">
          <img src={heroright} />
        </div>
      </div>
      <div className="section-h2">
        <h2>
          Get paid for the work you <span>love</span> <br/>to do.
        </h2>
        <p>
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you’re looking to escape the rat race or set up a
          side hustle, we’ve got you covered.
        </p>
        <img src={icon} />
      </div>
    </section>
  );
};
