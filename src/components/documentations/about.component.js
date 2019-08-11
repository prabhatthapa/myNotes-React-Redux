import React, { memo } from "react";

const About = props => {
  return <h1>This is about us section. {props.message}</h1>;
};

export default memo(About);
