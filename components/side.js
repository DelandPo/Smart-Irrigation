import React from "react";
import { Svg } from "expo";

const Square = props => (
  <Svg.Rect
    {...props}
    x={4}
    y={4}
    width={94}
    height={94}
    rx={10}
    fill="none"
    stroke="#000000"
    strokeWidth={5}
  />
);

const Dot = props => <Svg.Circle {...props} r={10} />;

const Side = props => (
  <Svg height={100} width={100}>
    <Square />
    {props.children}
  </Svg>
);

export const SideOne = props => (
  <Side>
    <Dot cx={50} cy={50} />
  </Side>
);

export const SideTwo = props => (
  <Side>
    <Dot cx={75} cy={75} />
    <Dot cx={25} cy={25} />
  </Side>
);

export const SideThree = props => (
  <Side>
    <Dot cx={75} cy={75} />
    <Dot cx={50} cy={50} />
    <Dot cx={25} cy={25} />
  </Side>
);

export const SideFour = props => (
  <Side>
    <Dot cx={75} cy={75} />
    <Dot cx={75} cy={25} />
    <Dot cx={25} cy={75} />
    <Dot cx={25} cy={25} />
  </Side>
);

export const SideFive = props => (
  <Side>
    <Dot cx={75} cy={75} />
    <Dot cx={75} cy={25} />
    <Dot cx={50} cy={50} />
    <Dot cx={25} cy={75} />
    <Dot cx={25} cy={25} />
  </Side>
);

export const SideSix = props => (
  <Side>
    <Dot cx={75} cy={75} />
    <Dot cx={75} cy={50} />
    <Dot cx={75} cy={25} />
    <Dot cx={25} cy={75} />
    <Dot cx={25} cy={50} />
    <Dot cx={25} cy={25} />
  </Side>
);

export default Side;
