import React from "react";
import Button from "@mui/material/Button";

const RouterButton = ({ link, text, variant }) => {
  return (
    <div style={{position:"absolute"}}>
      <Button href={link} variant={variant}>
        {text}
      </Button>
    </div>
  );
};

export default RouterButton;
