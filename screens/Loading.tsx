import React, { FC } from "react";
// spinner, Loader
import { MutatingDots } from "react-loader-spinner";

const Loading: FC = () => {
  return (
    <MutatingDots
      height="80"
      width="80"
      color="#1976d2"
      secondaryColor="#1976d2"
      ariaLabel="bars-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loading;
