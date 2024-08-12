import type { ReactNode } from "react";

import { Nav } from "./Nav";

interface Props {
  children: ReactNode;
}

export function Layout(props: Props) {
  return (
    <>
      <Nav urls={["/", "/virtua", "/virtuoso", "/tanstack"]} />
      {props.children}
    </>
  );
}
