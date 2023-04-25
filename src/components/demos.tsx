/**
* This is an auto-generated demo by dumi
* if you think it is not working as expected,
* please report the issue at
* https://github.com/umijs/dumi/issues
**/

import React from 'react'

export const DemoBlock = ({ children, className }) => (
  <div style={{ padding: 16 }} className={className}>
    {children}
  </div>
);

export const DemoDescription = ({ children }) => <div style={{ opacity: 0.5 }}>{children}</div>;

export const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))
