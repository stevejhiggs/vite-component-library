import React from "react";
import styled from "styled-components";

export interface Props {
  width: number;
  height: number;
  icon: any;
}

const StyledIcon = styled.svg<Props>`
  stroke-width: 1px;
  overflow: visible;
`;

const Icon: React.FC<Props> = ({ icon, width, height }) => {
  return <StyledIcon as={icon} width={width} height={height} />;
};

export default Icon;
