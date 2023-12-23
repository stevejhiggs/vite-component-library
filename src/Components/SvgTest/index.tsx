import React from 'react';

import { hi } from './hi';
import Logo from './vercel.svg?react';

const Component: React.FC = () => (
  <>
    <div>svg test</div>
    <Logo />
    <div>fishy</div>
    <div>{`${hi}`}</div>
  </>
);

export default Component;
