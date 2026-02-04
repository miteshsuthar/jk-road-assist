import React from "react";
import "../../styles/coming-soon.css";
import { COMING_SOON } from "../../constants/comingSoon";
import { IMAGES } from "../../constants/images";

const ComingSoon = () => (
  <div className="coming-soon-page">
    <div className="coming-soon-page__content">
      <img
        src={IMAGES.comingSoon.rocket}
        alt=""
        className="coming-soon-page__rocket"
      />
      <h1 className="coming-soon-page__heading">{COMING_SOON.HEADING}</h1>
      <p className="coming-soon-page__subtitle">{COMING_SOON.SUBTITLE}</p>
    </div>
  </div>
);

export default ComingSoon;
