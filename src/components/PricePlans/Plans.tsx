import check from '../../assets/icon-check.svg'
import bluecheck from '../../assets/Path 3.svg'
import './Plans.css'

export const Plans = () => {
  return (
    <div className="plans">
      <div className="plan-boxes1">
        <div className="section1">
          <h4>Dip your toe</h4>
          <p>Just getting started? No problem at <br/>all! Our free plan will take you a long way.</p>
        </div>
        <div className="section2">
            <h3>Free</h3>
            <ul>
              <li><img src={bluecheck} />Basic analytics</li>
              <li><img src={bluecheck} />Unlimited products</li>
              <li><img src={bluecheck} />Limited marketplace exposure</li>
              <li><img src={bluecheck} />10% fee per transaction</li>
            </ul>
            
        </div>
      </div>
      <div className="plan-boxes2">
        <div className="section1">
          <h4>Dive right in</h4>
          <p>Ready for the big time? Our paid plan will help you take your business to the next level.</p>
        </div>
        <div className="section2">
            <h4>$25.00<span>/month</span></h4>
            <ul>
              <li><img src={check} />Custom domain</li>
              <li><img src={check} />Advanced analytics and reports</li>
              <li><img src={check} />High marketplace visibility</li>
              <li><img src={check} />5% fee per transaction</li>
            </ul>
        </div>
      </div>
    </div>
  );
};
