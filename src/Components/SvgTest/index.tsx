import React from "react";
import Logo from "./vercel.svg";
import { hi } from "./hi";

const Component: React.FC = () => (
  <>
    <div>svg test</div>
    <Logo />
    <div>fishy</div>
    <div>{`${hi}`}</div>
  </>
);

export default Component;
