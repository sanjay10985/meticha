import React from "react";
import { withPhysics } from "../components/with-physics";

const Meticha = (props) => {
  return (
    <img className="cursor-none" src="/public/Meticha_Logo.png" {...props} />
  );
};

export default withPhysics(Meticha);
