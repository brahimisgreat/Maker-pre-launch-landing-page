import React from "react";
import "./PricePlans.css";
import { Plans } from "./Plans";

export const PricePlans = () => {
  return (
    <div className="pricePlans">
      <h2>Our pricing plans</h2>
      <p>
        We only make money when our creators make money. Our plans are always
        affordable, and it’s completely free to get started.
      </p>
      <Plans />
    </div>
  );
};
