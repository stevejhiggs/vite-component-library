import React from "react";

import { hi } from "./hi";
import { ReactComponent as Logo } from "./vercel.svg";

const Component: React.FC = () => (
  <>
    <div>svg test</div>
    <Logo />
    <div>fishy</div>
    <div>{`${hi}`}</div>
  </>
);

export default Component;
