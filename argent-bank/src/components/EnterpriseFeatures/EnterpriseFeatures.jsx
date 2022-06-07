import React from "react";
import "./EnterpriseFeatures.css";

const EnterpriseFeatures = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <article className="features__item item">
        <img
          className="item__icon"
          src="../img/icon-chat.png"
          alt="Chat Icon"
        />
        <h3 className="item__title">You are our #1 priority</h3>
        <p className="item__text">
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </article>
      <article className="features__item">
        <img
          className="item__icon"
          src="../img/icon-money.png"
          alt="Money Icon"
        />
        <h3 className="item__title">More savings means higher rates</h3>
        <p className="item__text">
          The more you save with us, the higher your interest rate will be!
        </p>
      </article>
      <article className="features__item">
        <img
          className="item__icon"
          src="../img/icon-security.png"
          alt="Security Icon"
        />
        <h3 className="item__title">Security you can trust</h3>
        <p className="item__text">
          We use top of the line encryption to make sure your data and money is
          always safe.
        </p>
      </article>
    </section>
  );
};

export default EnterpriseFeatures;
