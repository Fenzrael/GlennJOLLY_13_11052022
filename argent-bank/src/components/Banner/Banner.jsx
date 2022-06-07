import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="hero">
      <article className="hero__content content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="content__subtitle">No Fees.</p>
        <p className="content__subtitle">No minimum Deposit.</p>
        <p className="content__subtitle">High interest rates.</p>
        <p className="content__text">
          Open a savings account with Argent Bank today!
        </p>
      </article>
    </section>
  );
};

export default Banner;
