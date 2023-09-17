import React from "react";
import { Button, Result } from "antd";

const Error: React.FC = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <Result
      status="404"
      title="Sth went wrong!"
      subTitle="Sorry, It seems like you have a problem with your internet connection."
      extra={
        <Button type="primary" onClick={(e) => window.location.reload()}>
          Back Home
        </Button>
      }
    />
  </div>
);

export default Error;
