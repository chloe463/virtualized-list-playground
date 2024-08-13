import styled from "styled-components";
import type { ReactNode } from "react";

import { Nav } from "./Nav";

interface Props {
  children: ReactNode;
}

export function Layout(props: Props) {
  return (
    <Grid>
      <NavWrapper>
        <Nav urls={["/", "/virtua", "/virtuoso", "/tanstack"]} />
      </NavWrapper>
      {props.children}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
`;

const NavWrapper = styled.div`
  & > nav {
    position: sticky;
    top: 8px;
  }
`;
