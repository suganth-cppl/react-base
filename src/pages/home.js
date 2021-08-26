import React from "react";
import Header from "../components/header";
// import ContentLoader from "react-content-loader";
import { useTranslation } from "react-multi-lang";
import rectImg from "./../images/Rectangle.png";
import LoginComponent from "./../components/login";

const Home = () => {
  const t = useTranslation();

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col" style={{ padding: "7rem" }}>
            <h2>{t("logintitle")}</h2>
            <small>{t("logindesc")}</small>

            <LoginComponent />
          </div>
          <div className="col text-center">
            <img
              alt="This is the background"
              src={rectImg}
              style={{
                objectFit: "scale-down",
                height: "40rem",
                paddingTop: "4rem",
              }}
            />
          </div>
        </div>
      </div>

      {/* 
      <ContentLoader
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#cfcfcf"
        {...props}
      >
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="54" y="22" rx="3" ry="3" width="52" height="6" />
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <circle cx="24" cy="28" r="20" />
      </ContentLoader> */}
    </>
  );
};

export default Home;
