import React from 'react';
import './PricingPlans.css';

const PricingPlans = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Ready To Start? Don't Worry, We'll Keep You At Comfortable Budget</h1>
        <p>Get started with a 7-day trial. Cancel anytime.</p>
      </div>
      <div className="pricing-plans">
        <div className="pricing-plan">
          <div className="pricing-plan-header">
            <h3>BEGGINER</h3>
            <p>Perfect to get started</p>
          </div>
          <div className="pricing-plan-price">
            <h2>Free/Monthly</h2>
          </div>
          <div className="pricing-plan-features">
            <ul>
              <li>✔ Generate 500 Al Words</li>
              <li>✔ Multiple languages supported</li>
              <li>✔ Writing settings control</li>
              <li>✔ 24/7 Support Service</li>
            </ul>
          </div>
          <button className="pricing-plan-button">SUBSCRIBE</button>
        </div>
        <div className="pricing-plan">
          <div className="pricing-plan-header">
            <h3>STANDARD</h3>
            <p>Best for professionals and bloggers</p>
          </div>
          <div className="pricing-plan-price">
            <h2>$19.00/Monthly</h2>
          </div>
          <div className="pricing-plan-features">
            <ul>
              <li>✔ Generate 500 Al Words</li>
              <li>✔ Multiple languages supported</li>
              <li>✔ Writing settings control</li>
              <li>✔ 24/7 Support Service</li>
            </ul>
          </div>
          <button className="pricing-plan-button">SUBSCRIBE</button>
        </div>
        <div className="pricing-plan">
          <div className="pricing-plan-header">
            <h3>PROFESSIONAL</h3>
            <p>Perfect For large enterprises</p>
          </div>
          <div className="pricing-plan-price">
            <h2>$29.00/Monthly</h2>
          </div>
          <div className="pricing-plan-features">
            <ul>
              <li>✔ Generate 500 Al Words</li>
              <li>✔ Multiple languages supported</li>
              <li>✔ Writing settings control</li>
              <li>✔ 24/7 Support Service</li>
            </ul>
          </div>
          <button className="pricing-plan-button">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
