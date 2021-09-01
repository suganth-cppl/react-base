import React from "react";
import Header from "./../components/header";
import ProfileInformation from "./../components/profile";
import ValidateProfile from "../components/validate-profile";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <ProfileInformation />
          </div>
          <div className="col">
            <ValidateProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
