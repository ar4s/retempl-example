import React from "react";

interface Props extends React.HTMLProps<HTMLHeadingElement> {}

export function Heading({ children, ...rest }: Props) {
  return (
    <h1 style={style} {...rest}>
      {children}
    </h1>
  );
}

const style: React.CSSProperties = {
  color: "red",
  fontSize: "24px",
};
