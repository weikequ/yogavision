import React from "react";
import Button from "@mui/material/Button";

const RouterButton = ({ link, text, variant }) => {
  return (
    <div style={{position:"absolute"}}>
      <Button style={{
              backgroundColor: "#433030",
            }}
            href={link} variant={variant}>
        {text}
      </Button>
    </div>
  );
};

export default RouterButton;
