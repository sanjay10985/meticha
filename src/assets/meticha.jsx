import React from "react";
import { withPhysics } from "../components/with-physics";

const Meticha = (props) => {
  return (
    <img
      className="cursor-none"
      src="/src/assets/Meticha_Logo.png"
      {...props}
    />
  );
};

export default withPhysics(Meticha);
