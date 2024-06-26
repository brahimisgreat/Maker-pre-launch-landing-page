import passion from "../assets/Group 7.svg";
import money from "../assets/Group 9.svg";
import lifestyle from "../assets/Group 10.svg";
import work from "../assets/Group 12.svg";
import "./Content.css";

export const Content = () => {
  return (
    <div className="content">
      <div className="boxes" id='box1'>
        <img src={passion} />
        <div className="square1">
          <h4>Indulge your passions</h4>
          <p>
            Your passions shouldn't be just for the weekend. Earn a living doing
            what you love.
          </p>
        </div>
      </div>
      <div className="boxes" id='box2'>
        <img src={money} />
        <div  className="square2">
        <h4>Gain financial freedoms</h4>
        <p>
          Start making money work for you. There’s nothing quite like earning
          while you sleep.
        </p>
        </div >
      </div>
      <div className="boxes" id='box3'>
        <img src={lifestyle} />
        <div  className="square3">
        <h4>Choose your lifestyle</h4>
        <p>
          Own your daily schedule. Fancy a lie-in? Go for it! Take charge of
          your week.
        </p>

        </div>
      </div>
      <div className="boxes" id='box4'>
        <img src={work} />
        <div  className="square4">
        <h4>Work from anywhere</h4>
        <p>
          Selling online means not being pinned down. Want to work AND travel?
          Go for it!
        </p>

        </div>
      </div>
    </div>
  );
};
