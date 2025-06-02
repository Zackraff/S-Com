// src/app/presenters/LandingPagePresenter.js
import LandingPageModel from "../models/LandingPageModel";
import LandingPage from "../views/LandingPage";

const LandingPagePresenter = () => {
  const data = LandingPageModel.getLandingData();

  return <LandingPage title={data.title} description={data.description} />;
};

export default LandingPagePresenter;
