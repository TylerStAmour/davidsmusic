import React from "react";

interface Props {
  children: React.ReactNode;
}

export default ({children}: Props) => (
  <div className={'p-14 pt-8'}>
    {children}
  </div>
);